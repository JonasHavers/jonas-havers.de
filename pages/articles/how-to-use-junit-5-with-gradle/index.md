---
title: How to use JUnit 5 with Gradle
lang: en-US
date: 2018-04-13
meta:
  - name: description
    content: 'There are several ways to use JUnit 5 with Gradle. One possibility is to use Gradle ≥ 4.6 which comes with native support for the JUnit platform.'
  - name: keywords
    content: [Junit, Gradle, 'Unit Tests', Jupiter, 'Test Logging']
---

# How to use JUnit 5 with Gradle

There are [several
ways](https://junit.org/junit5/docs/current/user-guide/#running-tests-build-gradle)
to use JUnit 5 with Gradle.

One possibility is to use Gradle ≥ 4.6 which comes with [native support for the
JUnit
platform](https://docs.gradle.org/current/userguide/java_plugin.html#using_junit5).
Add the following code to your `build.gradle` to use JUnit 5:

```groovy
repositories {
    mavenCentral()
}

dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter-api:5.1.1'
    testRuntimeOnly 'org.junit.jupiter:junit-jupiter-engine:5.1.1'
}

test {
    useJUnitPlatform()
}
```

## Test logging

```bash
java9.collections.MapTest > java9.collections.MapTest$Of.shouldThrowAnExceptionWhenPassedNullValue() PASSED

java9.collections.MapTest > java9.collections.MapTest$Of.shouldCreateAMapOfTypeImmutableCollections$Map0() PASSED
```

To get a test logging similar to the above, add the following `testLogging` to
the `test` closure:

```groovy
test {
    testLogging {
        events 'PASSED', 'FAILED', 'SKIPPED'
    }
}
```

There are three additional `TestLogEvent`s: `STARTED`, `STANDARD_OUT` and
`STANDARD_ERROR`. To add the Standard-Out and Standard-Error streams, you can
also add `test.testLogging.showStandardStreams = true`.

Unfortunately, the `@DisplayName` annotation is not supported yet for the Gradle
test task’s logging, but you will benefit from it when you execute the tests in
IntelliJ for example.

## Test summary

```bash
Test result: SUCCESS
Test summary: 38 tests, 38 succeeded, 0 failed, 0 skipped
```

To get a test summary like the above, add an `afterSuite` to the `test` closure:

```groovy
test {
    afterSuite { desc, result ->
        if (!desc.parent) {
            println "\nTest result: ${result.resultType}"
            println "Test summary: ${result.testCount} tests, " +
                    "${result.successfulTestCount} succeeded, " +
                    "${result.failedTestCount} failed, " +
                    "${result.skippedTestCount} skipped"
        }
    }
}
```

I have published a [project on
GitHub](https://github.com/JonasHavers/javafeatures) that uses this
configuration.
