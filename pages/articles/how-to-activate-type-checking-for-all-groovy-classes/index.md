---
title: How to activate type checking for all Groovy classes
lang: en
date: 2018-04-26
meta:
  - name: description
    content: 'To activate type checking for all your Groovy classes, you can add the Groovy compilation configuration from this article to your compileGroovy Gradle task.'
  - name: keywords
    content: [Groovy, 'Type Checking', TypeChecked, Gradle, Configscript]
---

# How to activate type checking for all Groovy classes

To activate type checking for all your Groovy classes, you can add the Groovy
[compilation
configuration](http://docs.groovy-lang.org/latest/html/documentation/#compilation-customizers)
from this article to your `compileGroovy` Gradle task. Doing that is equivalent
to annotating each class with the `@TypeChecked` annotation.

_gradle.build:_

```groovy
apply plugin: 'groovy'

compileGroovy.groovyOptions.configurationScript = file('gradle/config/groovyc.groovy')
```

Add the file _gradle/config/groovyc.groovy_ Groovy compiler configuration script
relative to your _build.gradle_:

```groovy
import groovy.transform.TypeChecked

withConfig(configuration) {
  ast(TypeChecked)
}
```

The `configuration` references a `CompilerConfiguration` instance. That’s how
you‘ve declared an AST transformation compilation customizer to activate static
type checking for all your Groovy files.

When you are using an undeclared variable, the `compileGroovy` task will throw
an error like “`[Static type checking] — The variable [naame] is undeclared`”
now, thus helping you to find typos, unmatched return types, wrong assignments,
unavailable variables and methods, you name it.

---

You could also activate static compilation by default:

```groovy
import groovy.transform.CompileStatic

withConfig(configuration) {
  ast(CompileStatic)
}
```

With `@CompileStatic`, Groovy tries to generate byte-code close to what `javac`
would generate.
