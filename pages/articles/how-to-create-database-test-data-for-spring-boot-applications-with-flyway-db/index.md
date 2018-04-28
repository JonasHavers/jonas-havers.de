---
title: How to create database test data for Spring Boot applications with Flyway DB
lang: en-US
date: 2018-04-16
meta:
  - name: description
    content: 'Spring Boot has default support for Flyway DB, a library for database migrations. This post explains how to create database test data for Spring Boot applications with Flyway DB.'
  - name: keywords
    content: ['Spring Boot', 'Flyway DB', 'DB Migration', 'Test Data']
---

# How to create database test data for Spring Boot applications with Flyway DB

Spring Boot has default support for [Flyway DB](https://flywaydb.org/), a
library for database migrations. Thanks to Spring Boot’s auto-configuration, you
just have to provide the
[dependency](https://flywaydb.org/documentation/plugins/springboot) to
`flyway-core` and you’re ready to go.

You can use Flyway DB’s `afterMigrate`[
callback](https://flywaydb.org/documentation/callbacks.html) to prepare the
environment with test data. Flyway DB looks after a `afterMigrate.sql` file in
the locations defined by Spring Boot’s `spring.flyway.locations` setting at
startup. The test data is created after all DB migration scripts were executed.

---

If you want to apply the test data only to a specific environment, you can
override the `spring.flyway.locations` configuration for that stage.

I explain two options [for using externalised configuration with Spring
Boot](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html#boot-features-external-config)
that I have experienced in projects in the past, but you have a lot more
options. Some of them meet the guidelines of the [Twelve-Factor App
methodology](https://12factor.net/) which requires [strict separation of config
from code](https://12factor.net/config). If the type of config does not vary
between deploys it is best done in the code.

## Configuration depending on the Spring profile

From my experience, Spring profiles are often used for different application
environment-specific configurations, i.e. for deployment stages. If you work
with the stages _none_ (local-dev), _dev_ (development preview), _stage_
(pre-production), _prod_ (production), you might have at least one of the
`application.properties`, `application-dev.properties`,
`application-stage.properties`, `application-prod.properties` files for
different configurations already. All the Spring profiles properties files are
either packaged inside the JAR file, which is not the cleanest approach you can
take, or the profile(-independent) properties file is placed next to your JAR
file.

Let’s say, you only want to apply the database test data to the development
stage. That means the `application-dev.properties` is the place to change the
config. Your migrations scripts are placed inside the `db/migration` directory
under `src/main/resources` which is copied on packaging or execution of your
application and put onto the classpath at runtime.

Put the default Flyway configuration into your `application.properties`:

```
spring.flyway.locations=classpath:/db/migration
```

This way only the versioned migrations are executed at application startup-time.
Now, put the setting that is specific to your development stage into your `dev`
profile’s `application-dev.properties`:

```
spring.flyway.locations=classpath:/db/migration,classpath:/db/testdata
```

This overrides the default, profile-independent configuration and enables Flyway
to read the scripts from `/db/testdata` from your classpath.

When the `dev` profile is active, the file `src/main/resources/db/testdata /afterMigrate.sql` will be found and executed. Make sure the script can be
executed multiple times, because the `afterMigrate` callback is run on each
start of your application. If you are using Postgres for example, [you can make
use of the `ON CONFLICT` clause](/articles/how-to-execute-an-upsert-with-postgresql/)
(`INSERT INTO client (…) VALUES (…) ON CONFLICT DO NOTHING;`).

## Configuration via environment variables

An alternative approach is to deliver your configuration via environment
variables. If you are using something like Kubernetes, Docker or your own
provisioning script, you can override Spring’s default configuration by setting
the environment variable `SPRING_FLYWAY_LOCATIONS`. You use underscore-separated
key names, because most operating systems disallow period-separated key names
like `spring.flyway.locations`. Either provision the migration script
`afterMigrate.sql` next to or inside your executable JAR file.

---

For further explanation on how to execute Flyway migration scripts with Spring
Boot, have a look at the [official Spring Boot
documentation](https://docs.spring.io/spring-boot/docs/current/reference/html/howto-database-initialization.html#howto-execute-flyway-database-migrations-on-startup).
