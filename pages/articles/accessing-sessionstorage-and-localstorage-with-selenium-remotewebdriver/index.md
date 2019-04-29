---
title: Accessing SessionStorage and LocalStorage with Selenium RemoteWebDriver
lang: en
date: 2018-04-17
meta:
  - name: description
    content: 'The RemoteWebDriver does not directly implement Selenium’s role interfaces such as WebStorage and LocationContext. To access that functionality, your driver needs to be augmented.'
  - name: keywords
    content: [JavaScript, SessionStorage, LocalStorage, Selenium, RemoteWebDriver]
---

# Accessing SessionStorage and LocalStorage with Selenium RemoteWebDriver

The `RemoteWebDriver` does not directly implement Selenium’s role interfaces
such as `WebStorage` and `LocationContext`.

To access that functionality, your driver needs to be augmented with an
`Augmenter` and then cast to the appropriate interface:

```java
WebStorage webStorage = (WebStorage) new Augmenter().augment(driver);

LocalStorage localStorage = webStorage.getLocalStorage();

SessionStorage sessionStorage = webStorage.getSessionStorage();
```

I recommend to provide access in a test base class. This is an example I am
using for [Groovy end-to-end browser tests with Geb](http://www.gebish.org/):

```groovy
abstract class EndToEndTest extends GebReportingSpec {

  LocalStorage localStorage() {
    webStorage().localStorage
  }
  SessionStorage sessionStorage() {
    webStorage().sessionStorage
  }
  private WebStorage webStorage() {
    new Augmenter().augment(driver) as WebStorage
  }
}
```
