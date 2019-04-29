---
title: HTTP 301 Permanent Redirect Filter For URLs Without Trailing Slash With Spring MVC
lang: en
date: 2018-04-10
meta:
  - name: description
    content: 'By default, Spring MVC is tolerant and accepts requests to URL mappings with request URLs both ending with and without a trailing slash if you do not explicitly define one within your mapping.'
  - name: keywords
    content: ['Spring MVC', 'Permanent Redirect', OncePerRequestFilter, 'URL Redirect', 'Spring Boot']
---

# HTTP 301 Permanent Redirect Filter For URLs Without Trailing Slash With Spring MVC

By default, Spring MVC is tolerant and accepts requests to URL mappings with request URLs both ending with and without a trailing slash if you do not explicitly define one within your mapping.

However, if you want to be more strict about the trailing slashes for certain URLs, i.e. you want some URLs to always end with a trailing slash for SEO reasons but allow access to your application's internal REST API without the trailing slash as well, you may want to use an `OncePerRequestFilter` before the requests actually get through to your Spring MVC handler methods.

In this example, all requests to URIs that do not end with a trailing slash are redirected permanently (i.e. with the HTTP status code 301):

```java
@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class TrailingSlashRedirectingFilter extends OncePerRequestFilter {

  @Override
  protected void doFilterInternal(
    HttpServletRequest request,
    HttpServletResponse response,
    FilterChain filterChain
  ) throws ServletException, IOException {
    if (!request.getRequestURI().endsWith("/")) {
      ServletUriComponentsBuilder builder = ServletUriComponentsBuilder.fromRequest(request);
      builder.replacePath(String.format("%s/", builder.build().getPath()));
      response.setStatus(HttpStatus.MOVED_PERMANENTLY.value());
      response.setHeader(HttpHeaders.LOCATION, builder.toUriString());
    } else {
      filterChain.doFilter(request, response);
    }
  }
}
```

In case of URLs without the trailing slash, the filter has to do three things:

* Replace the URI's path to end with the trailing slash
* Set the HTTP response status to 301 (permanent redirect)
* Set the HTTP response location to the new URI (trigger redirect)

You can change the order of the filter from `Ordered.HIGHEST_PRECEDENCE` to something that may be more applicable to your application.

---

If you want all the URLs to match exactly the request mapping you have chosen, you can override the Spring MVC default configuration and set `useTrailingSlashMatch` to false using Spring's `PathMatchConfigurer`:

```java
@Configuration
public class WebMvcPathMatchConfiguration implements WebMvcConfigurer {

  @Override
  public void configurePathMatch(PathMatchConfigurer configurer) {
    configurer.setUseTrailingSlashMatch(false);
  }
}
```
