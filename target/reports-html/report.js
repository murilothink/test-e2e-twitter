$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("testebot.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Vai entrar no twitter",
  "description": "e vai fazer um tweet",
  "id": "vai-entrar-no-twitter",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "enario: Usuario vai entrar no twiiter",
  "description": "",
  "id": "vai-entrar-no-twitter;enario:-usuario-vai-entrar-no-twiiter",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 6,
  "name": "que o usuario abre o twitter para fazer login",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "e coloca o usuario \u003cusuario\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 8,
  "name": "a senha \u003csenha\u003e",
  "keyword": "E "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#    E caso o acesso de erro"
    }
  ],
  "line": 10,
  "name": "e entrar",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "digitar a \u003cTweets\u003e",
  "keyword": "Entao "
});
formatter.step({
  "line": 12,
  "name": "realizar o twitte",
  "keyword": "E "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "vai-entrar-no-twitter;enario:-usuario-vai-entrar-no-twiiter;",
  "rows": [
    {
      "cells": [
        "Tweets",
        "usuario",
        "senha"
      ],
      "line": 15,
      "id": "vai-entrar-no-twitter;enario:-usuario-vai-entrar-no-twiiter;;1"
    },
    {
      "cells": [
        "Ciúme é um dos meus órgãos.",
        "zsdasds",
        "nelsonbrabo"
      ],
      "line": 16,
      "id": "vai-entrar-no-twitter;enario:-usuario-vai-entrar-no-twiiter;;2"
    },
    {
      "cells": [
        "Quando o beijo combina, já era.",
        "patricia__leal",
        "nelsonbrabo"
      ],
      "line": 17,
      "id": "vai-entrar-no-twitter;enario:-usuario-vai-entrar-no-twiiter;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 16,
  "name": "enario: Usuario vai entrar no twiiter",
  "description": "",
  "id": "vai-entrar-no-twitter;enario:-usuario-vai-entrar-no-twiiter;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 6,
  "name": "que o usuario abre o twitter para fazer login",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "e coloca o usuario zsdasds",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 8,
  "name": "a senha nelsonbrabo",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#    E caso o acesso de erro"
    }
  ],
  "line": 10,
  "name": "e entrar",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "digitar a Ciúme é um dos meus órgãos.",
  "matchedColumns": [
    0
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 12,
  "name": "realizar o twitte",
  "keyword": "E "
});
formatter.match({
  "location": "bottest.queOUsuarioAbreOTwitter()"
});
formatter.result({
  "duration": 2814506252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zsdasds",
      "offset": 19
    }
  ],
  "location": "bottest.eColocaOUsuario(String)"
});
formatter.result({
  "duration": 154760605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nelsonbrabo",
      "offset": 8
    }
  ],
  "location": "bottest.aSenha(String)"
});
formatter.result({
  "duration": 185241445,
  "status": "passed"
});
formatter.match({
  "location": "bottest.eEntrar()"
});
formatter.result({
  "duration": 928784025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ciúme é um dos meus órgãos.",
      "offset": 10
    }
  ],
  "location": "bottest.digitarAOláEuSouUmRobôEEstouSendoControladoPorUmTesteAutomatizadoTesteDeuCerto(String)"
});
formatter.result({
  "duration": 36471338,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div/div/div/div[2]/main/div/div/div/div/div/div[2]/div/div[2]/div[1]/div/div/div/div[2]/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div/div[2]/div/div/div/div\"}\n  (Session info: chrome\u003d81.0.4044.92)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027lnb024429cps\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.3.0-62-generic\u0027, java.version: \u00271.8.0_252\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.92, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: /tmp/.com.google.Chrome.2NYFKH}, goog:chromeOptions: {debuggerAddress: localhost:44041}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 393ad8926555165de00ec3e715ab3535\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div/div/div[2]/main/div/div/div/div/div/div[2]/div/div[2]/div[1]/div/div/div/div[2]/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div/div[2]/div/div/div/div}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat bottest.digitarAOláEuSouUmRobôEEstouSendoControladoPorUmTesteAutomatizadoTesteDeuCerto(bottest.java:53)\n\tat ✽.Entao digitar a Ciúme é um dos meus órgãos.(testebot.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "location": "bottest.realizarOTwitte()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "enario: Usuario vai entrar no twiiter",
  "description": "",
  "id": "vai-entrar-no-twitter;enario:-usuario-vai-entrar-no-twiiter;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 6,
  "name": "que o usuario abre o twitter para fazer login",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "e coloca o usuario patricia__leal",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 8,
  "name": "a senha nelsonbrabo",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#    E caso o acesso de erro"
    }
  ],
  "line": 10,
  "name": "e entrar",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "digitar a Quando o beijo combina, já era.",
  "matchedColumns": [
    0
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 12,
  "name": "realizar o twitte",
  "keyword": "E "
});
formatter.match({
  "location": "bottest.queOUsuarioAbreOTwitter()"
});
formatter.result({
  "duration": 3330174134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patricia__leal",
      "offset": 19
    }
  ],
  "location": "bottest.eColocaOUsuario(String)"
});
formatter.result({
  "duration": 220458420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nelsonbrabo",
      "offset": 8
    }
  ],
  "location": "bottest.aSenha(String)"
});
formatter.result({
  "duration": 200565327,
  "status": "passed"
});
formatter.match({
  "location": "bottest.eEntrar()"
});
formatter.result({
  "duration": 6210065527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Quando o beijo combina, já era.",
      "offset": 10
    }
  ],
  "location": "bottest.digitarAOláEuSouUmRobôEEstouSendoControladoPorUmTesteAutomatizadoTesteDeuCerto(String)"
});
formatter.result({
  "duration": 764111234,
  "status": "passed"
});
formatter.match({
  "location": "bottest.realizarOTwitte()"
});
formatter.result({
  "duration": 136095649,
  "status": "passed"
});
});