---
title: Getting started with Micronaut
lang: en
date: 2018-05-30
meta:
  - name: description
    content: 'Micronaut is a new JVM-based framework that is designed for building twelve-factor microservice applications.'
  - name: keywords
    content: ['Micronaut', 'JVM framework', 'serverless', 'microservice', 'reactive', 'Groovy', 'Grails', 'Kotlin', 'Java']
---

# Getting started with Micronaut

[Micronaut](http://micronaut.io/) is a new JVM-based framework that is designed for building [twelve-factor](https://12factor.net/) microservice applications.

The project was initiated by [OCI](https://objectcomputing.com/) and the team that built the Grails framework, [officially announced](https://www.youtube.com/watch?v=56j_f3OCg6E) by Graeme Rocher at Greach Conference 2018, and publicly [open-sourced](http://micronaut.io/announcement.html) under Apache License 2 on May 23rd, 2018. The first milestone release towards version 1.0.0 was released today, on May 30th, 2018. As the [official guide](http://docs.micronaut.io/latest/guide/index.html) states, "Micronaut is developed by the creators of the Grails framework and takes inspiration from lessons learnt over the years building real-world applications from monoliths to microservices using Spring, Spring Boot and Grails."

Micronaut's benefits include a fast startup time and low memory footprint that not only allow the development of serverless applications.

> The low overhead is achieved by using a compile-time Dependency Injection (DI) and Aspect-Oriented Programming (AOP) API that does not use reflection. Reflection-based Inversion of Control (IoC) frameworks load and cache reflection data for every field, method and constructor. With Micronaut, your application startup time and memory consumption are not bound to the size of your codebase.

Micronaut comes with a HTTP server and HTTP client. Micronaut's HTTP server makes it as easy as possible to expose APIs that can be consumed by HTTP clients. Non-blocking reactivity is supported with the use of [Netty](https://netty.io/). HTTP clients can be build declaratively with the use of annotations, which are implemented at compile-time, reducing memory consumption. The Grails' ORM framework [GORM](http://gorm.grails.org/) is officially supported which provides a rich set of APIs for accessing SQL databases like PostgreSQL with Hibernate as well as Neo4J, Redis, MongoDB, GraphQL and Cassandra databases.

Service discovery (Consul, Eureka), client side load balancing, circuit breaker, configuration sharing (Consul, AWS/GCP planned), distributed tracing tools (such as Zipkin), support for serverless computing with AWS Lambda are featured.

Over all, Micronaut offers a pretty similar programming model to Spring Boot and Grails.

## Let's start

We can start with the [official example projects on GitHub](https://github.com/micronaut-projects/micronaut-examples) to get a glimpse on how to develop with Micronaut. They run with Java 8 and the provided Gradle wrapper (or Gradle 4.7). _Note that the hello-world-kotlin sample does not currently use the same port as the others (i.e. port 8080), but a random port._

For folks who are keen on building from source, snapshots of Micronaut are available [on Sonatype](https://oss.sonatype.org/content/groups/public/io/micronaut/). Otherwise you can [download](http://micronaut.io/download.html) the pre-built [1.0.0.M1 binary](https://github.com/micronaut-projects/micronaut-core/releases/download/v1.0.0.M1/micronaut-1.0.0.M1.zip) from GitHub.

There is a Micronaut Command Line Interface (CLI) that we can use to setup projects on our own. The CLI zip of version 1.0.0-SNAPSHOT can also be found [at Sonatype](https://oss.sonatype.org/content/groups/public/io/micronaut/cli/1.0.0-SNAPSHOT/).
To create a new project we can install the Micronaut Command Line Interface (CLI) with [SDKman](http://sdkman.io/):

```bash
$ sdk install micronaut
```

Afterwards, we verify that Micronaut CLI was installed:

```bash
$ mn --version
| Micronaut Version: 1.0.0.M1
| JVM Version: 1.8.0_172
```

If you've got any errors with Java 9 or 10 so far, try to switch to the Java version that worked for me, i.e. Java 8 (1.8.0_172) (for example via `sdk install java 8.0.172-zulu`).

```bash
$ java -version
openjdk version "1.8.0_172"
OpenJDK Runtime Environment (Zulu 8.30.0.1-macosx) (build 1.8.0_172-b01)
OpenJDK 64-Bit Server VM (Zulu 8.30.0.1-macosx) (build 25.172-b01, mixed mode)
```

To try out the Groovy samples or develop with Groovy, setup Groovy (with SDKman: `sdk install groovy`) and check if it's working:

```bash
$ groovy -version
Groovy Version: 2.5.0 JVM: 1.8.0_172 Vendor: Azul Systems, Inc. OS: Mac OS X
```

Afterwards, we can create a server application following [the official documentation](http://docs.micronaut.io/latest/guide/index.html#creatingServer), or we start trying some commands out on our own:

```bash
$ mn create-app micronaut
```

Note that we can use the interactive shell to create beans, clients, controllers and jobs from there on:

```bash
$ mn
| Starting interactive mode...
| Enter a command name to run. Use TAB for completion:
mn>

create-bean          create-client        create-controller    create-job           help
```

```bash
mn> create-controller -lang kotlin hello
| Rendered template Controller.kt to destination src/main/kotlin/micronaut/HelloController.kt
| Rendered template ControllerTest.java to destination src/test/java/micronaut/HelloControllerTest.java
```

```bash
mn> create-job -lang groovy hello
| Rendered template Job.groovy to destination src/main/groovy/micronaut/HelloJob.groovy
```

```bash
mn> create-bean hello -lang groovy
| Rendered template Bean.groovy to destination src/main/groovy/micronaut/Hello.groovy
```

The CLI helps us with documentation for commands and their parameters:

```bash
mn> help create-job
| Command: create-job
| Description:
Creates a job with scheduled method

| Usage:
mn create-job [JOB NAME]

| Arguments:
* Job Name - The name of the job class to create (REQUIRED)

| Flags:
* force - Whether to overwrite existing files
* lang - The language used for the job (options: groovy, kotlin, java)
```

Ok, so far we played around with the CLI. We will continue by building our first application.

## Building our own Hello World application

Let's start by creating our project using the Micronaut CLI:

```bash
$ mn create-app helloworld
```

### Main class

The executable Java Main class is already available:

_`src/main/java/helloworld/Application.java`_

```java
package helloworld;

import io.micronaut.runtime.Micronaut;

public class Application {

    public static void main(String[] args) {
        Micronaut.run(Application.class);
    }
}
```

We can run the application either through this class if we use our preferred Java IDE (i.e. [IDEA](https://www.jetbrains.com/idea/) ;)) or with `./gradlew run` using the Gradle wrapper for development.

```bash
$ ./gradlew run

> Task :run
13:52:11.961 [main] INFO  io.micronaut.runtime.Micronaut - Startup completed in 1121ms. Server Running: http://localhost:47743
```

For now, stop the server by pressing CTRL+C, because we haven't implemented any endpoint to talk to yet.

Note that the server starts at a random port by default without further configuration. We can change that by adding the server port configuration to our existing `src/main/resources/application.yml`:

```yaml
micronaut:
    application:
        name: helloworld
    server:
        port: 8888
```

### HTTP endpoint

Next, we create a controller that is responsible for the `/hello` and subordinate paths:

_`src/test/java/helloworld/HelloController.java`_

```java
package helloworld;

import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.reactivex.Single;

@Controller("/hello")
public class HelloController {

    @Get("/{name}")
    public Single<String> hello(String name) {
        return Single.just("Hello " + name + "!");
    }
}
```

The controller accepts GET requests for `/hello/{name}` where `{name}` is the dynamic route parameter that is injected to our "hello" method which is annotated with the `@Get` annoation. A GET request to `/hello/Jonas/` will be served with the response "Hello Jonas!".

To test the endpoint, we can implement a HTTP client (`helloworld.HelloControllerClient`) class in the `src/test` folder of our project now.

### A reactive Java HTTP Client

_`src/test/java/helloworld/HelloControllerClient.java`_

```java
package helloworld;

import io.micronaut.http.annotation.Get;
import io.micronaut.http.client.Client;
import io.reactivex.Single;

import javax.validation.constraints.NotBlank;

@Client("/")
public interface HelloControllerClient {

    @Get("/hello/{name}")
    Single<String> hello(@NotBlank String name);
}
```

The client is generated at compile time using this declarative approach.

### The HTTP Client Test

We can test our hello world endpoint with this Java JUnit test:

_`src/test/java/helloworld/HelloControllerTest.java`_

```java
package helloworld;

import io.micronaut.context.ApplicationContext;
import io.micronaut.runtime.server.EmbeddedServer;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class HelloControllerTest {

    private EmbeddedServer server;
    private HelloControllerClient client;

    @Before
    public void setup() {
        this.server = ApplicationContext.run(EmbeddedServer.class);
        this.client = server.getApplicationContext().getBean(HelloControllerClient.class);
    }

    @Test
    public void shouldReturnHello() {
        String response = client.hello("Jonas").blockingGet();
        assertEquals(response, "Hello Jonas!");
    }

    @After
    public void cleanup() {
        this.server.stop();
    }
}
```

### The executable application

To run the application via an executable or to deploy the application, we create a runnable JAR file by running `./gradlew assemble`.

The JAR file is build to `build/libs` and executed from the project's root folder with this command:

`java -jar build/libs/helloworld-0.1-all.jar`

As we configured above, the server will start and be available on localhost on port 8888 ([http://localhost:8888/hello/Jonas](http://localhost:8888/hello/Jonas)).

The file size is 11.1 MB. The startup time is about 1 second.

### Notes on testing

#### Using the generic HTTP client

We do not have to implement our own declarative HTTP client for testing. We can use the default provided with Micronaut like this:

_`src/test/java/helloworld/HelloControllerAlternativeTest.java`_

```java
package helloworld;

import io.micronaut.context.ApplicationContext;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.client.HttpClient;
import io.micronaut.runtime.server.EmbeddedServer;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.io.IOException;

import static org.junit.Assert.assertEquals;

public class HelloControllerAlternativeTest {

    private EmbeddedServer server;
    private HttpClient client;

    @Before
    public void setup() {
        this.server = ApplicationContext.run(EmbeddedServer.class);
        this.client = HttpClient.create(this.server.getURL());
    }

    @Test
    public void shouldReturnHello() {
        String response = client.toBlocking()
                .retrieve(HttpRequest.GET("/hello/Jonas"));
        assertEquals(response, "Hello Jonas!");
    }

    @After
    public void cleanup() throws IOException {
        this.server.stop();
        this.client.close();
    }
}
```

#### Using the Spock framework for testing

To alternatively use the [Spock framework](http://spockframework.org/), which is also my favorite testing framework, we apply the Gradle Groovy plugin and add the testCompile dependency to Spock in our Gradle build:

_`gradle.build`_

```groovy
apply plugin: "groovy"

dependencies {
    testCompile "org.spockframework:spock-core:1.1-groovy-2.4"
}
```

Afterwards, we can implement our [Specification](http://spockframework.org/spock/docs/1.1/spock_primer.html):

_`src/test/groovy/helloworld/HelloControllerSpec.groovy`_

```groovy
package helloworld

import io.micronaut.context.ApplicationContext
import io.micronaut.runtime.server.EmbeddedServer
import spock.lang.AutoCleanup
import spock.lang.Shared
import spock.lang.Specification
import spock.lang.Unroll

class HelloControllerSpec extends Specification {

    @Shared
    @AutoCleanup
    EmbeddedServer embeddedServer =
            ApplicationContext.run(EmbeddedServer)

    @Shared
    HelloControllerClient client = embeddedServer
            .applicationContext
            .getBean(HelloControllerClient)

    @Unroll
    void "test hello #name response"() {
        expect:
        client.hello(name).blockingGet() == 'Hello Jonas!'
        where:
        name = 'Jonas'
    }
}
```

Spock creates a HTML test report by default which we can view by opening the `build/reports/tests/test/index.html` with a browser after we ran the tests with `./gradlew test`.

## What's next

This is just the start. The full code example of our hello-world application is [available at GitHub](https://github.com/JonasHavers/micronaut-helloworld/).

I recommend the talk ["Launching the Micro Future: Groovy, Grails and Project Particle" by Graeme Rocher](https://www.youtube.com/watch?v=HTUumoh7lWE) which is available on YouTube. Graeme demonstrates a lot of the public examples and provides more details.

Álvaro Sánchez talked about ["Reactive microservices with Micronaut"](https://www.youtube.com/watch?v=o-DznSljvzI) at Greach 2018.

There is an [official guide](http://docs.micronaut.io/snapshot/guide/index.html) and [API reference](http://docs.micronaut.io/snapshot/api/index.html) as well as some [official implementation guides](http://guides.micronaut.io/) – as of writing primarily to different authentication mechanisms.

I am sure we will be provided with more information and see further progress after GR8Conf 2018, which is currently taking place. For example, there is a [workshop](https://alvarosanchez.github.io/micronaut-workshop/) held by Álvaro Sánchez today.

Watch [#micronautfw on Twitter](https://twitter.com/search?q=%23micronautfw) for more details. You can also [follow me there](https://twitter.com/JonasHavers).
