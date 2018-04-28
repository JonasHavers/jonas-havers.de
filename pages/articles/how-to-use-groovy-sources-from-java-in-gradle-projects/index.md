---
title: How to use Groovy sources from Java in Gradle projects
lang: en-US
date: 2018-04-09
meta:
  - name: description
    content: 'To use Java sources from Groovy as well as Groovy sources from Java you have to change the default Gradle SourceSet configuration.'
  - name: keywords
    content: [Gradle, Groovy, Java, 'Project Setup', 'Gradle Configuration']
---

# How to use Groovy sources from Java in Gradle projects

When you want to use Java sources from Groovy, there is no need to change the default configuration after applying the Gradle Groovy plugin:

```groovy
apply plugin: 'groovy'

repositories {
  mavenCentral()
}

dependencies {
  compile 'org.codehaus.groovy:groovy-all:2.4.15'
}
```

When you want to do things the other way around, the defaults cause the compiler to complain that it cannot find Groovy stuff within your project.

So to use Java sources from Groovy as well as Groovy sources from Java, both your Java and Groovy source files must be compiled using the Groovy compiler. By default, the Java sources are compiled by the Java compiler and passed along to the Groovy compiler.

## Solutions

You can change this behaviour using one of the following solutions.

### 1. Change the default Gradle SourceSets

By applying the following configuration to the `build.gradle` of your Gradle project, you change the default [Gradle SourceSets](https://docs.gradle.org/current/dsl/org.gradle.api.tasks.SourceSet.html) directories that are being used during compilation:

```groovy{3,4}
sourceSets {
  main {
    java { srcDirs = [] }
    groovy { srcDirs += ['src/main/java'] }
  }
}
```

Afterwards, the default Java SourceSet `src/main/java` is not managed by the Java plugin anymore. All source files are handled by the Groovy compiler.

### 2. Put all your Java files into the default Groovy source directory

Another solution to use Groovy sources from Java is to place all your Java sources next to the Groovy files in the `src/main/groovy` directory and get rid of `src/main/java`.

---

## Why is that?

The [Groovy Gradle plugin](https://docs.gradle.org/current/userguide/groovy_plugin.html) extends the [Java plugin](https://docs.gradle.org/current/userguide/java_plugin.html) to add Groovy compilation capabilities. If you apply the Groovy Gradle plugin to your project, the Java plugin will also be applied, if it has not already been applied.

By default, the sources inside `src/main/java` are handled by the Java plugin. It uses the Java `javac` compiler when executing the Gradle task `compileJava`. The `compileTestJava` task further looks for Java test source files in the default `src/test/java` directory.

Groovy's Gradle plugin extends the Java plugin's compilation and looks for source files in the directory `src/main/groovy` when executing `compileGroovy`. The `compileTestGroovy` task looks for test source files in the `src/test/groovy`directory.

If you move your Java files over to `src/main/groovy` as described in the second solution they will be handled by the Groovy plugin. The Groovy plugin uses `groovyc`, the Groovy compiler. It makes use of the [_joint compilation_](http://groovy-lang.org/groovyc.html#section-jointcompilation) feature which allows you to mix and match Groovy and Java code in the Groovy SourceSet directories. For example, a Groovy class can extend a Java class that in turn extends a Groovy class. You can have dependencies in both directions and choose the best language for the job. Furthermore, you can incrementally rewrite and migrate any class to the other language if needed.

If you change the Groovy SourceSet as described in the first solution, the joint-compilation takes effect in both the default `src/main/groovy` and the added `src/main/java` directory. It doesn't matter which directory you put the Java and Groovy files in.

---

If you want to try it on your own, I have prepared a [sample project on Github](https://github.com/JonasHavers/groovier-java-compilation) that you can use as a reference.
