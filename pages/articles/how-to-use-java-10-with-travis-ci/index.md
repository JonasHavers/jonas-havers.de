---
title: How to use Java 10+ with Travis CI
lang: en
date: 2018-04-18
meta:
  - name: description
    content: 'As of today, Travis CI only supports Java ≤ 9. This post explains how to use Java 10+.'
  - name: keywords
    content: [Continuous Integration, Travis CI, Java 10, Gradle, JDK]
---

# How to use Java 10+ with Travis CI

As of today, Travis CI [only supports Java ≤
9](https://github.com/travis-ci/travis-ci/issues/9368).

But you can download and use another version of the JDK for your Travis CI
build. There is [a
shell-script](https://raw.githubusercontent.com/sormuras/bach/master/install-jdk.sh)
in the [Java Shell Builder](https://sormuras.github.io/bach/) project that
determines the most recent (early-access) build number (for the JDK version you
want), downloads the JDK archive to the user home directory and extracts it
there.

I’ve taken some lines from the [_.travis.yml_ file from the JUnit 5
project](https://github.com/junit-team/junit5/blob/master/.travis.yml), which is
using the mentioned shell-script, to use them in [my Java 9/10+ features sample
project on GitHub](https://github.com/JonasHavers/javafeatures/). With the
following lines you can use the latest Open-/Oracle JDK 10 builds to run your
Travis CI script.

```yaml
  language: java
  dist: trusty
  sudo: false
  before_install:

  matrix:
    include:
  script:
  - ./gradlew --version
  - ./gradlew test
```

Gradle 4.6 [currently fails](https://github.com/gradle/gradle/issues/4515) to
recognise the version name “11-ea” as JDK 11, but a fix is already planned for
Gradle 4.7. This is why I removed the JDK 11 lines from the JUnit project for
[my project](https://github.com/JonasHavers/javafeatures/).
