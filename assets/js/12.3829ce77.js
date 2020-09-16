(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{237:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"returning-tiff-image-data-with-spring-mvc"}},[t._v("Returning TIFF Image Data with Spring MVC")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/TIFF",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tagged Image File Format"),s("OutboundLink")],1),t._v(" (TIFF or TIF) is a computer file format for storing raster graphics images. If you want to deliver TIFF data with Spring MVC, you basically return the bytes you receive from an input stream to the client.")]),t._v(" "),s("p",[t._v("When the client sends a request with an "),s("code",[t._v("image/tiff")]),t._v(" accept header, you send a response back with the content length, the expected content type and the bytes of the TIFF. You can use the following handler method as a reference.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"/your-tiff-mapping"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headers"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"accept=image/tiff"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("produces"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"image/tiff"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" ResponseEntity "),s("span",{attrs:{class:"token function"}},[t._v("getTiffImage")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// [...] call some use case and get the output data [...]")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ResponseEntity\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("ok")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("contentLength")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outputData"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getContentLength")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("contentType")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MediaType"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("valueOf")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"image/tiff"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outputData"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getBytes")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("For caching purposes you may also want to set the "),s("code",[t._v("Cache-Control")]),t._v(", "),s("code",[t._v("Pragma")]),t._v(", "),s("code",[t._v("Expires")]),t._v(" headers.")]),t._v(" "),s("p",[t._v("Furthermore, you need to provide a "),s("code",[t._v("ByteArrayHttpMessageConverter")]),t._v(" that can handle byte array response data. Create a configuration that implements the "),s("code",[t._v("WebMvcConfigurer")]),t._v(" interface and overrides the "),s("code",[t._v("configureMessageConverters")]),t._v("method to register your converter for the "),s("code",[t._v("image/tiff")]),t._v(" media type.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("WebMvcMessageConvertersConfiguration")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("WebMvcConfigurer")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("configureMessageConverters")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    List"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("HttpMessageConverter"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" messageConverters\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ByteArrayHttpMessageConverter byteArrayConverter "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ByteArrayHttpMessageConverter")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    byteArrayConverter"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setSupportedMediaTypes")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      Collections"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*singletonList"),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MediaType"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("valueOf")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"image/tiff"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    messageConverters"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("add")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("byteArrayConverter"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("That's it. You are done. It is basically the same for other image formats. Have a look "),s("a",{attrs:{href:"http://www.baeldung.com/spring-mvc-image-media-data",target:"_blank",rel:"noopener noreferrer"}},[t._v("at another article"),s("OutboundLink")],1),t._v(" for an alternative implementation.")])])},[],!1,null,null,null);a.default=e.exports}}]);