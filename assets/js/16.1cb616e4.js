(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{241:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http-301-permanent-redirect-filter-for-urls-without-trailing-slash-with-spring-mvc"}},[t._v("HTTP 301 Permanent Redirect Filter For URLs Without Trailing Slash With Spring MVC")]),t._v(" "),a("p",[t._v("By default, Spring MVC is tolerant and accepts requests to URL mappings with request URLs both ending with and without a trailing slash if you do not explicitly define one within your mapping.")]),t._v(" "),a("p",[t._v("However, if you want to be more strict about the trailing slashes for certain URLs, i.e. you want some URLs to always end with a trailing slash for SEO reasons but allow access to your application's internal REST API without the trailing slash as well, you may want to use an "),a("code",[t._v("OncePerRequestFilter")]),t._v(" before the requests actually get through to your Spring MVC handler methods.")]),t._v(" "),a("p",[t._v("In this example, all requests to URIs that do not end with a trailing slash are redirected permanently (i.e. with the HTTP status code 301):")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Order")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ordered"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HIGHEST_PRECEDENCE"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("TrailingSlashRedirectingFilter")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("OncePerRequestFilter")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("doFilterInternal")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    HttpServletRequest request"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    HttpServletResponse response"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    FilterChain filterChain\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" ServletException"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IOException "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getRequestURI")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("endsWith")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ServletUriComponentsBuilder builder "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ServletUriComponentsBuilder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("fromRequest")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replacePath")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("format")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"%s/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getPath")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setStatus")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HttpStatus"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MOVED_PERMANENTLY"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("value")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setHeader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HttpHeaders"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LOCATION"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toUriString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      filterChain"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("doFilter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("In case of URLs without the trailing slash, the filter has to do three things:")]),t._v(" "),a("ul",[a("li",[t._v("Replace the URI's path to end with the trailing slash")]),t._v(" "),a("li",[t._v("Set the HTTP response status to 301 (permanent redirect)")]),t._v(" "),a("li",[t._v("Set the HTTP response location to the new URI (trigger redirect)")])]),t._v(" "),a("p",[t._v("You can change the order of the filter from "),a("code",[t._v("Ordered.HIGHEST_PRECEDENCE")]),t._v(" to something that may be more applicable to your application.")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("If you want all the URLs to match exactly the request mapping you have chosen, you can override the Spring MVC default configuration and set "),a("code",[t._v("useTrailingSlashMatch")]),t._v(" to false using Spring's "),a("code",[t._v("PathMatchConfigurer")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("WebMvcPathMatchConfiguration")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("WebMvcConfigurer")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("configurePathMatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PathMatchConfigurer configurer"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    configurer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setUseTrailingSlashMatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);