---
title: Returning TIFF Image Data with Spring MVC
lang: en-US
date: 2018-04-12
meta:
  - name: description
    content: 'In cases where you do not want to handle unique constraint violation errors that are caused by duplicate entries, an UPSERT would be useful to have with PostgreSQL.'
  - name: keywords
    content: [TIFF, 'Spring MVC', 'Spring Boot', 'Byte Array', 'Image Response']
---

# Returning TIFF Image Data with Spring MVC

The [Tagged Image File Format](https://en.wikipedia.org/wiki/TIFF) (TIFF or TIF) is a computer file format for storing raster graphics images. If you want to deliver TIFF data with Spring MVC, you basically return the bytes you receive from an input stream to the client.

When the client sends a request with an `image/tiff` accept header, you send a response back with the content length, the expected content type and the bytes of the TIFF. You can use the following handler method as a reference.

```java
@GetMapping(value="/your-tiff-mapping", headers="accept=image/tiff",produces="image/tiff")
public ResponseEntity getTiffImage() {
// [...] call some use case and get the output data [...]
  return ResponseEntity
    .ok()
    .contentLength(outputData.getContentLength())
    .contentType(MediaType.valueOf("image/tiff"))
    .body(outputData.getBytes());
}
```

For caching purposes you may also want to set the `Cache-Control`, `Pragma`, `Expires` headers.

Furthermore, you need to provide a `ByteArrayHttpMessageConverter` that can handle byte array response data. Create a configuration that implements the `WebMvcConfigurer` interface and overrides the `configureMessageConverters`method to register your converter for the `image/tiff` media type.

```java
@Configuration
public class WebMvcMessageConvertersConfiguration implements WebMvcConfigurer {

  @Override
  public void configureMessageConverters(
    List<HttpMessageConverter<?>> messageConverters
  ) {
    ByteArrayHttpMessageConverter byteArrayConverter =
      new ByteArrayHttpMessageConverter();
    byteArrayConverter.setSupportedMediaTypes(
      Collections.*singletonList*(MediaType.valueOf("image/tiff"))
    );
    messageConverters.add(byteArrayConverter);
  }
}
```

s
That's it. You are done. It is basically the same for other image formats. Have a look [at another article](http://www.baeldung.com/spring-mvc-image-media-data) for an alternative implementation.
