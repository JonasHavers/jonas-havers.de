(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{249:function(t,a,o){"use strict";o.r(a);var n=o(2),s=Object(n.a)({},function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"how-to-activate-type-checking-for-all-groovy-classes"}},[t._v("How to activate type checking for all Groovy classes")]),t._v(" "),o("p",[t._v("To activate type checking for all your Groovy classes, you can add the Groovy\n"),o("a",{attrs:{href:"http://docs.groovy-lang.org/latest/html/documentation/#compilation-customizers",target:"_blank",rel:"noopener noreferrer"}},[t._v("compilation\nconfiguration"),o("OutboundLink")],1),t._v("\nfrom this article to your "),o("code",[t._v("compileGroovy")]),t._v(" Gradle task. Doing that is equivalent\nto annotating each class with the "),o("code",[t._v("@TypeChecked")]),t._v(" annotation.")]),t._v(" "),o("p",[o("em",[t._v("gradle.build:")])]),t._v(" "),o("div",{staticClass:"language-groovy extra-class"},[o("pre",{pre:!0,attrs:{class:"language-groovy"}},[o("code",[t._v("apply plugin"),o("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),o("span",{attrs:{class:"token string"}},[t._v("'groovy'")]),t._v("\n\ncompileGroovy"),o("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("groovyOptions"),o("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("configurationScript "),o("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),o("span",{attrs:{class:"token function"}},[t._v("file")]),o("span",{attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{attrs:{class:"token string"}},[t._v("'gradle/config/groovyc.groovy'")]),o("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),o("p",[t._v("Add the file "),o("em",[t._v("gradle/config/groovyc.groovy")]),t._v(" Groovy compiler configuration script\nrelative to your "),o("em",[t._v("build.gradle")]),t._v(":")]),t._v(" "),o("div",{staticClass:"language-groovy extra-class"},[o("pre",{pre:!0,attrs:{class:"language-groovy"}},[o("code",[o("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" groovy"),o("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("transform"),o("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("TypeChecked\n\n"),o("span",{attrs:{class:"token function"}},[t._v("withConfig")]),o("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configuration"),o("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),o("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),o("span",{attrs:{class:"token function"}},[t._v("ast")]),o("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TypeChecked"),o("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),o("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),o("p",[t._v("The "),o("code",[t._v("configuration")]),t._v(" references a "),o("code",[t._v("CompilerConfiguration")]),t._v(" instance. That’s how\nyou‘ve declared an AST transformation compilation customizer to activate static\ntype checking for all your Groovy files.")]),t._v(" "),o("p",[t._v("When you are using an undeclared variable, the "),o("code",[t._v("compileGroovy")]),t._v(" task will throw\nan error like “"),o("code",[t._v("[Static type checking] — The variable [naame] is undeclared")]),t._v("”\nnow, thus helping you to find typos, unmatched return types, wrong assignments,\nunavailable variables and methods, you name it.")]),t._v(" "),o("hr"),t._v(" "),o("p",[t._v("You could also activate static compilation by default:")]),t._v(" "),o("div",{staticClass:"language-groovy extra-class"},[o("pre",{pre:!0,attrs:{class:"language-groovy"}},[o("code",[o("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" groovy"),o("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("transform"),o("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("CompileStatic\n\n"),o("span",{attrs:{class:"token function"}},[t._v("withConfig")]),o("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configuration"),o("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),o("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),o("span",{attrs:{class:"token function"}},[t._v("ast")]),o("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CompileStatic"),o("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),o("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),o("p",[t._v("With "),o("code",[t._v("@CompileStatic")]),t._v(", Groovy tries to generate byte-code close to what "),o("code",[t._v("javac")]),t._v("\nwould generate.")])])},[],!1,null,null,null);a.default=s.exports}}]);