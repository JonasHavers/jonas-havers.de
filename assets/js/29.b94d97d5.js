(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{254:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"accessing-sessionstorage-and-localstorage-with-selenium-remotewebdriver"}},[t._v("Accessing SessionStorage and LocalStorage with Selenium RemoteWebDriver")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("RemoteWebDriver")]),t._v(" does not directly implement Selenium’s role interfaces\nsuch as "),a("code",[t._v("WebStorage")]),t._v(" and "),a("code",[t._v("LocationContext")]),t._v(".")]),t._v(" "),a("p",[t._v("To access that functionality, your driver needs to be augmented with an\n"),a("code",[t._v("Augmenter")]),t._v(" and then cast to the appropriate interface:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("WebStorage webStorage "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WebStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Augmenter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("augment")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("driver"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nLocalStorage localStorage "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" webStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getLocalStorage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nSessionStorage sessionStorage "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" webStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getSessionStorage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("I recommend to provide access in a test base class. This is an example I am\nusing for "),a("a",{attrs:{href:"http://www.gebish.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Groovy end-to-end browser tests with Geb"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("EndToEndTest")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("GebReportingSpec")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  LocalStorage "),a("span",{attrs:{class:"token function"}},[t._v("localStorage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("webStorage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("localStorage\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  SessionStorage "),a("span",{attrs:{class:"token function"}},[t._v("sessionStorage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("webStorage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("sessionStorage\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" WebStorage "),a("span",{attrs:{class:"token function"}},[t._v("webStorage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Augmenter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("augment")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("driver"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" WebStorage\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);