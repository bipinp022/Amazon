$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/TC_01_CreateAccount.feature");
formatter.feature({
  "name": "amazon - Create Account",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreateAccount"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Launch the application \"https://www.amazon.co.uk/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.launchApplication(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on New Here option",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAccountStepDefs.newHire()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_001 To verify the positive create account functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateAccount"
    },
    {
      "name": "@PositiveCreateAccount"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Fill the Create Account form",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ]
    },
    {
      "cells": [
        "Name",
        "Hari"
      ]
    },
    {
      "cells": [
        "Email",
        "abc"
      ]
    },
    {
      "cells": [
        "Password",
        "Password123"
      ]
    },
    {
      "cells": [
        "RePassword",
        "Password123"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountStepDefs.createAccount(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountStepDefs.signInOption()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/TC_02_AmazonLogin.feature");
formatter.feature({
  "name": "amazon - Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Launch the application \"https://www.amazon.co.uk/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.launchApplication(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicked on Sign option",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.signInOption()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_002 To verify the positive login functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PositiveLogin"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Enter the username \"abc\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.userName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password \"pass123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.login()"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.exceptions.ElementShouldBeEnabledException: Expected enabled element was not enabled\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilEnabled(WebElementFacadeImpl.java:963)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilElementAvailable(WebElementFacadeImpl.java:802)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.click(WebElementFacadeImpl.java:1039)\r\n\tat net.serenitybdd.core.pages.PageObject.clickOn(PageObject.java:867)\r\n\tat pages.LoginPage.clickLogin(LoginPage.java:91)\r\n\tat steps.LoginSteps.clickLoginStep(LoginSteps.java:39)\r\n\tat steps.LoginSteps$$EnhancerByCGLIB$$98e47f3b.CGLIB$clickLoginStep$2(\u003cgenerated\u003e)\r\n\tat steps.LoginSteps$$EnhancerByCGLIB$$98e47f3b$$FastClassByCGLIB$$30037acd.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:449)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:434)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:409)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:150)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:137)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat steps.LoginSteps$$EnhancerByCGLIB$$98e47f3b.clickLoginStep(\u003cgenerated\u003e)\r\n\tat stepDefinition.LoginStepDefs.login(LoginStepDefs.java:38)\r\n\tat ✽.Click Login(src/test/resources/features/TC_02_AmazonLogin.feature:12)\r\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for Proxy element for: LoginPage.loginButton to be enabled (tried for 5 second(s) with 100 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:303)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilEnabled(WebElementFacadeImpl.java:960)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilElementAvailable(WebElementFacadeImpl.java:802)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.click(WebElementFacadeImpl.java:1039)\r\n\tat net.serenitybdd.core.pages.PageObject.clickOn(PageObject.java:867)\r\n\tat pages.LoginPage.clickLogin(LoginPage.java:91)\r\n\tat steps.LoginSteps.clickLoginStep(LoginSteps.java:39)\r\n\tat steps.LoginSteps$$EnhancerByCGLIB$$98e47f3b.CGLIB$clickLoginStep$2(\u003cgenerated\u003e)\r\n\tat steps.LoginSteps$$EnhancerByCGLIB$$98e47f3b$$FastClassByCGLIB$$30037acd.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:449)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:434)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:409)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:150)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:137)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat steps.LoginSteps$$EnhancerByCGLIB$$98e47f3b.clickLoginStep(\u003cgenerated\u003e)\r\n\tat stepDefinition.LoginStepDefs.login(LoginStepDefs.java:38)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:393)\r\n\tat org.apache.maven.surefire.junitcore.pc.InvokerStrategy.schedule(InvokerStrategy.java:54)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler.schedule(Scheduler.java:352)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:393)\r\n\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Timed out after 180 seconds. Element not found\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027L106692\u0027, ip: \u002710.20.80.33\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat net.thucydides.core.annotations.locators.SmartAjaxElementLocator.ajaxFindElement(SmartAjaxElementLocator.java:173)\r\n\tat net.thucydides.core.annotations.locators.SmartAjaxElementLocator.findElement(SmartAjaxElementLocator.java:125)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.getTagName(Unknown Source)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getTagName(WebElementFacadeImpl.java:1107)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations.isAFormElement(WebElementExpectations.java:162)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations.isDisabledField(WebElementExpectations.java:158)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations.access$000(WebElementExpectations.java:10)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations$3.apply(WebElementExpectations.java:64)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations$3.apply(WebElementExpectations.java:55)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\t... 60 more\r\n",
  "status": "failed"
});
});