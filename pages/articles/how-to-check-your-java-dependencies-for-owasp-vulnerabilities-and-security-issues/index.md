---
title: How to check your Java dependencies for OWASP vulnerabilities and security issues
lang: en
date: 2018-04-23
meta:
  - name: description
    content: 'The OWASP dependency-check provides monitoring of the libraries you use in your Java project to identify the use of known vulnerable components.'
  - name: keywords
    content: [OWASP, Java, 'Dependency Check', 'Security Issues', Gradle]
---

# How to check your Java dependencies for OWASP vulnerabilities and security issues

The OWASP [dependency-check](https://jeremylong.github.io/DependencyCheck/)
provides monitoring of the libraries you use in your Java project to identify
the use of known vulnerable components.

It produces an individual analysis report for the issue of “[Using Components
with Known
Vulnerabilities](https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities)”
which is listed in [the OWASP Top Ten
2017](https://www.owasp.org/index.php/Top_10-2017_Top_10).

---

## Gradle plugin

The [gradle
plugin](https://jeremylong.github.io/DependencyCheck/dependency-check-gradle/)
can create a report of known vulnerable components that are included in the
build of your project. You include it in your _build.gradle_:

```groovy
buildscript {
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath 'org.owasp:dependency-check-gradle:3.1.2'
    }
}
apply plugin: 'org.owasp.dependencycheck'
```

Afterwards you should integrate the check into your build system by using the
command:

```bash
./gradlew dependencyCheckAnalyze
```

---

## Integration with Gitlab CI

If you are using Gitlab CI and you do not want to execute the check on every CI
build, because your dependencies do not change that often and the check itself
can take a few minutes depending on the libraries you are using, you can
[schedule a
pipeline](https://docs.gitlab.com/ce/user/project/pipelines/schedules.html) in
your project and restrict the task’s execution to that scheduled (nightly)
build. Here is an excerpt for your _.gitlab-ci.yml_ file that you place in your
project root folder:

```yaml
stages:
  - dependencyCheck
  # etc.

dependencyCheck:
  stage: dependencyCheck
  only:
    - schedules
  script:
    - ./gradlew dependencyCheckAnalyze
  artifacts:
    name: "${CI_JOB_ID}_${CI_JOB_NAME}"
    when: always
    expire_in: 30 day
    paths:
      - build/reports/dependency-check-report.html
```

When executed, the plugin will create the dependency check HTML report and
Gitlab will archive it for 30 days.

---

## Configurations

You can [configure the gradle
plugin](https://jeremylong.github.io/DependencyCheck/dependency-check-gradle/configuration.html)
by applying a closure in your _build.gradle_ like the one below that will fail
the build when a [CVSS score](https://www.first.org/cvss/) equal to or above a
level 5 is identified:

```groovy
dependencyCheck {
  failBuildOnCVSS = 5
  failOnError = true
  suppressionFile = 'config/dependencyCheck/suppressions.xml'
  analyzers {
    experimentalEnabled = true
    archiveEnabled = true
    jarEnabled = true
    centralEnabled = true
    nexusEnabled = true
    pyDistributionEnabled = false
    pyPackageEnabled = false
    rubygemsEnabled = false
    opensslEnabled = false
    nuspecEnabled = false
    assemblyEnabled = false
    cmakeEnabled = false
    autoconfEnabled = true
    composerEnabled = false
    nodeEnabled = true
    nspEnabled = false
    cocoapodsEnabled = false
    swiftEnabled = false
  }
}
```

Personally, I like to put configurations like this one in separate files (e.g.
in _gradle/plugins_) and apply their contents to the _build.gradle_ like this:

```groovy
apply from: "gradle/plugins/dependency-check.gradle"
```

---

## Suppressions

In the configuration example above I defined my path to a suppression file
relative to the _build.gradle_:

```groovy
dependencyCheck {
  suppressionFile = 'config/dependencyCheck/suppressions.xml'
}
```

In _config/dependencyCheck/suppressions.xml_ I can define which warnings should
be ignored. This way I can define [False
Positives](https://jeremylong.github.io/DependencyCheck/general/suppression.html)
or known (minor) issues I want or have to ignore until a dependency update.
Example:

```xml
<xml version="1.0" encoding="UTF-8">
<suppressions xmlns="https://jeremylong.github.io/DependencyCheck/dependency-suppression.1.1.xsd">
  <suppress>
      <notes><![CDATA[
  file name: async-http-client-netty-utils-2.1.0-alpha25.jar
  ]]></notes>
      <gav regex="true">^org\.asynchttpclient:async-http-client-netty-utils:.*$</gav>
      <cve>CVE-2014-3488</cve>
  </suppress>
</suppressions>
```

You can also create hints for [False
Negatives](https://jeremylong.github.io/DependencyCheck/general/hints.html).
