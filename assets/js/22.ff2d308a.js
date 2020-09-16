(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{247:function(e,t,o){"use strict";o.r(t);var a=o(2),n=Object(a.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"how-to-create-database-test-data-for-spring-boot-applications-with-flyway-db"}},[e._v("How to create database test data for Spring Boot applications with Flyway DB")]),e._v(" "),o("p",[e._v("Spring Boot has default support for "),o("a",{attrs:{href:"https://flywaydb.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flyway DB"),o("OutboundLink")],1),e._v(", a\nlibrary for database migrations. Thanks to Spring Boot’s auto-configuration, you\njust have to provide the\n"),o("a",{attrs:{href:"https://flywaydb.org/documentation/plugins/springboot",target:"_blank",rel:"noopener noreferrer"}},[e._v("dependency"),o("OutboundLink")],1),e._v(" to\n"),o("code",[e._v("flyway-core")]),e._v(" and you’re ready to go.")]),e._v(" "),o("p",[e._v("You can use Flyway DB’s "),o("code",[e._v("afterMigrate")]),o("a",{attrs:{href:"https://flywaydb.org/documentation/callbacks.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("\ncallback"),o("OutboundLink")],1),e._v(" to prepare the\nenvironment with test data. Flyway DB looks after a "),o("code",[e._v("afterMigrate.sql")]),e._v(" file in\nthe locations defined by Spring Boot’s "),o("code",[e._v("spring.flyway.locations")]),e._v(" setting at\nstartup. The test data is created after all DB migration scripts were executed.")]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("If you want to apply the test data only to a specific environment, you can\noverride the "),o("code",[e._v("spring.flyway.locations")]),e._v(" configuration for that stage.")]),e._v(" "),o("p",[e._v("I explain two options "),o("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html#boot-features-external-config",target:"_blank",rel:"noopener noreferrer"}},[e._v("for using externalised configuration with Spring\nBoot"),o("OutboundLink")],1),e._v("\nthat I have experienced in projects in the past, but you have a lot more\noptions. Some of them meet the guidelines of the "),o("a",{attrs:{href:"https://12factor.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twelve-Factor App\nmethodology"),o("OutboundLink")],1),e._v(" which requires "),o("a",{attrs:{href:"https://12factor.net/config",target:"_blank",rel:"noopener noreferrer"}},[e._v("strict separation of config\nfrom code"),o("OutboundLink")],1),e._v(". If the type of config does not vary\nbetween deploys it is best done in the code.")]),e._v(" "),o("h2",{attrs:{id:"configuration-depending-on-the-spring-profile"}},[e._v("Configuration depending on the Spring profile")]),e._v(" "),o("p",[e._v("From my experience, Spring profiles are often used for different application\nenvironment-specific configurations, i.e. for deployment stages. If you work\nwith the stages "),o("em",[e._v("none")]),e._v(" (local-dev), "),o("em",[e._v("dev")]),e._v(" (development preview), "),o("em",[e._v("stage")]),e._v("\n(pre-production), "),o("em",[e._v("prod")]),e._v(" (production), you might have at least one of the\n"),o("code",[e._v("application.properties")]),e._v(", "),o("code",[e._v("application-dev.properties")]),e._v(",\n"),o("code",[e._v("application-stage.properties")]),e._v(", "),o("code",[e._v("application-prod.properties")]),e._v(" files for\ndifferent configurations already. All the Spring profiles properties files are\neither packaged inside the JAR file, which is not the cleanest approach you can\ntake, or the profile(-independent) properties file is placed next to your JAR\nfile.")]),e._v(" "),o("p",[e._v("Let’s say, you only want to apply the database test data to the development\nstage. That means the "),o("code",[e._v("application-dev.properties")]),e._v(" is the place to change the\nconfig. Your migrations scripts are placed inside the "),o("code",[e._v("db/migration")]),e._v(" directory\nunder "),o("code",[e._v("src/main/resources")]),e._v(" which is copied on packaging or execution of your\napplication and put onto the classpath at runtime.")]),e._v(" "),o("p",[e._v("Put the default Flyway configuration into your "),o("code",[e._v("application.properties")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language-properties extra-class"},[o("pre",{pre:!0,attrs:{class:"language-properties"}},[o("code",[o("span",{attrs:{class:"token attr-name"}},[e._v("spring.flyway.locations")]),o("span",{attrs:{class:"token punctuation"}},[e._v("=")]),o("span",{attrs:{class:"token attr-value"}},[e._v("classpath:/db/migration")]),e._v("\n")])])]),o("p",[e._v("This way only the versioned migrations are executed at application startup-time.\nNow, put the setting that is specific to your development stage into your "),o("code",[e._v("dev")]),e._v("\nprofile’s "),o("code",[e._v("application-dev.properties")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language-properties extra-class"},[o("pre",{pre:!0,attrs:{class:"language-properties"}},[o("code",[o("span",{attrs:{class:"token attr-name"}},[e._v("spring.flyway.locations")]),o("span",{attrs:{class:"token punctuation"}},[e._v("=")]),o("span",{attrs:{class:"token attr-value"}},[e._v("classpath:/db/migration,classpath:/db/testdata")]),e._v("\n")])])]),o("p",[e._v("This overrides the default, profile-independent configuration and enables Flyway\nto read the scripts from "),o("code",[e._v("/db/testdata")]),e._v(" from your classpath.")]),e._v(" "),o("p",[e._v("When the "),o("code",[e._v("dev")]),e._v(" profile is active, the file "),o("code",[e._v("src/main/resources/db/testdata /afterMigrate.sql")]),e._v(" will be found and executed. Make sure the script can be\nexecuted multiple times, because the "),o("code",[e._v("afterMigrate")]),e._v(" callback is run on each\nstart of your application. If you are using Postgres for example, "),o("router-link",{attrs:{to:"/articles/how-to-execute-an-upsert-with-postgresql/"}},[e._v("you can make\nuse of the "),o("code",[e._v("ON CONFLICT")]),e._v(" clause")]),e._v("\n("),o("code",[e._v("INSERT INTO client (…) VALUES (…) ON CONFLICT DO NOTHING;")]),e._v(").")],1),e._v(" "),o("h2",{attrs:{id:"configuration-via-environment-variables"}},[e._v("Configuration via environment variables")]),e._v(" "),o("p",[e._v("An alternative approach is to deliver your configuration via environment\nvariables. If you are using something like Kubernetes, Docker or your own\nprovisioning script, you can override Spring’s default configuration by setting\nthe environment variable "),o("code",[e._v("SPRING_FLYWAY_LOCATIONS")]),e._v(". You use underscore-separated\nkey names, because most operating systems disallow period-separated key names\nlike "),o("code",[e._v("spring.flyway.locations")]),e._v(". Either provision the migration script\n"),o("code",[e._v("afterMigrate.sql")]),e._v(" next to or inside your executable JAR file.")]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("For further explanation on how to execute Flyway migration scripts with Spring\nBoot, have a look at the "),o("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/howto-database-initialization.html#howto-execute-flyway-database-migrations-on-startup",target:"_blank",rel:"noopener noreferrer"}},[e._v("official Spring Boot\ndocumentation"),o("OutboundLink")],1),e._v(".")])])},[],!1,null,null,null);t.default=n.exports}}]);