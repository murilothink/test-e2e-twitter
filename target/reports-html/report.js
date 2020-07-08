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
  "name": "e coloca o usuario \"patricia__leal\"",
  "keyword": "E "
});
formatter.step({
  "line": 8,
  "name": "a senha \"nelsonbrabo\"",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "e entrar",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "digitar a \u003cfrases\u003e",
  "keyword": "Entao "
});
formatter.step({
  "line": 11,
  "name": "realizar o twitte",
  "keyword": "E "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "vai-entrar-no-twitter;enario:-usuario-vai-entrar-no-twiiter;",
  "rows": [
    {
      "cells": [
        "frases"
      ],
      "line": 14,
      "id": "vai-entrar-no-twitter;enario:-usuario-vai-entrar-no-twiiter;;1"
    },
    {
      "cells": [
        "Eu queria que minha unica preocupação na vida fosse ter bastante dinheiro e não saber como gastar."
      ],
      "line": 15,
      "id": "vai-entrar-no-twitter;enario:-usuario-vai-entrar-no-twiiter;;2"
    },
    {
      "cells": [
        "Lei da vida: Gente boazinha só se fode."
      ],
      "line": 16,
      "id": "vai-entrar-no-twitter;enario:-usuario-vai-entrar-no-twiiter;;3"
    },
    {
      "cells": [
        "Certos dias apenas tinha que ter um replay."
      ],
      "line": 17,
      "id": "vai-entrar-no-twitter;enario:-usuario-vai-entrar-no-twiiter;;4"
    },
    {
      "cells": [
        "Algum dia direi: \"Não foi fácil, mas consegui.\""
      ],
      "line": 18,
      "id": "vai-entrar-no-twitter;enario:-usuario-vai-entrar-no-twiiter;;5"
    },
    {
      "cells": [
        "Ciúme é um dos meus órgãos."
      ],
      "line": 19,
      "id": "vai-entrar-no-twitter;enario:-usuario-vai-entrar-no-twiiter;;6"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 15,
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
  "name": "e coloca o usuario \"patricia__leal\"",
  "keyword": "E "
});
formatter.step({
  "line": 8,
  "name": "a senha \"nelsonbrabo\"",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "e entrar",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "digitar a Eu queria que minha unica preocupação na vida fosse ter bastante dinheiro e não saber como gastar.",
  "matchedColumns": [
    0
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 11,
  "name": "realizar o twitte",
  "keyword": "E "
});
formatter.match({
  "location": "bottest.queOUsuarioAbreOTwitter()"
});
formatter.result({
  "duration": 3615982717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patricia__leal",
      "offset": 20
    }
  ],
  "location": "bottest.eColocaOUsuario(String)"
});
formatter.result({
  "duration": 262287885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nelsonbrabo",
      "offset": 9
    }
  ],
  "location": "bottest.aSenha(String)"
});
formatter.result({
  "duration": 210261244,
  "status": "passed"
});
formatter.match({
  "location": "bottest.eEntrar()"
});
formatter.result({
  "duration": 1654030820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Eu queria que minha unica preocupação na vida fosse ter bastante dinheiro e não saber como gastar.",
      "offset": 10
    }
  ],
  "location": "bottest.digitarAOláEuSouUmRobôEEstouSendoControladoPorUmTesteAutomatizadoTesteDeuCerto(String)"
});
formatter.result({
  "duration": 2872835447,
  "status": "passed"
});
formatter.match({
  "location": "bottest.realizarOTwitte()"
});
formatter.result({
  "duration": 139276231,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
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
  "name": "e coloca o usuario \"patricia__leal\"",
  "keyword": "E "
});
formatter.step({
  "line": 8,
  "name": "a senha \"nelsonbrabo\"",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "e entrar",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "digitar a Lei da vida: Gente boazinha só se fode.",
  "matchedColumns": [
    0
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 11,
  "name": "realizar o twitte",
  "keyword": "E "
});
formatter.match({
  "location": "bottest.queOUsuarioAbreOTwitter()"
});
formatter.result({
  "duration": 3740292568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patricia__leal",
      "offset": 20
    }
  ],
  "location": "bottest.eColocaOUsuario(String)"
});
formatter.result({
  "duration": 305698581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nelsonbrabo",
      "offset": 9
    }
  ],
  "location": "bottest.aSenha(String)"
});
formatter.result({
  "duration": 312092689,
  "status": "passed"
});
formatter.match({
  "location": "bottest.eEntrar()"
});
formatter.result({
  "duration": 2210714543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lei da vida: Gente boazinha só se fode.",
      "offset": 10
    }
  ],
  "location": "bottest.digitarAOláEuSouUmRobôEEstouSendoControladoPorUmTesteAutomatizadoTesteDeuCerto(String)"
});
formatter.result({
  "duration": 1245196239,
  "status": "passed"
});
formatter.match({
  "location": "bottest.realizarOTwitte()"
});
formatter.result({
  "duration": 764902598,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "enario: Usuario vai entrar no twiiter",
  "description": "",
  "id": "vai-entrar-no-twitter;enario:-usuario-vai-entrar-no-twiiter;;4",
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
  "name": "e coloca o usuario \"patricia__leal\"",
  "keyword": "E "
});
formatter.step({
  "line": 8,
  "name": "a senha \"nelsonbrabo\"",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "e entrar",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "digitar a Certos dias apenas tinha que ter um replay.",
  "matchedColumns": [
    0
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 11,
  "name": "realizar o twitte",
  "keyword": "E "
});
formatter.match({
  "location": "bottest.queOUsuarioAbreOTwitter()"
});
formatter.result({
  "duration": 20042100365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patricia__leal",
      "offset": 20
    }
  ],
  "location": "bottest.eColocaOUsuario(String)"
});
formatter.result({
  "duration": 375910142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nelsonbrabo",
      "offset": 9
    }
  ],
  "location": "bottest.aSenha(String)"
});
formatter.result({
  "duration": 285782820,
  "status": "passed"
});
formatter.match({
  "location": "bottest.eEntrar()"
});
formatter.result({
  "duration": 2916023002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Certos dias apenas tinha que ter um replay.",
      "offset": 10
    }
  ],
  "location": "bottest.digitarAOláEuSouUmRobôEEstouSendoControladoPorUmTesteAutomatizadoTesteDeuCerto(String)"
});
formatter.result({
  "duration": 2599283880,
  "status": "passed"
});
formatter.match({
  "location": "bottest.realizarOTwitte()"
});
formatter.result({
  "duration": 153072149,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "enario: Usuario vai entrar no twiiter",
  "description": "",
  "id": "vai-entrar-no-twitter;enario:-usuario-vai-entrar-no-twiiter;;5",
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
  "name": "e coloca o usuario \"patricia__leal\"",
  "keyword": "E "
});
formatter.step({
  "line": 8,
  "name": "a senha \"nelsonbrabo\"",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "e entrar",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "digitar a Algum dia direi: \"Não foi fácil, mas consegui.\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 11,
  "name": "realizar o twitte",
  "keyword": "E "
});
formatter.match({
  "location": "bottest.queOUsuarioAbreOTwitter()"
});
formatter.result({
  "duration": 8157427619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patricia__leal",
      "offset": 20
    }
  ],
  "location": "bottest.eColocaOUsuario(String)"
});
formatter.result({
  "duration": 491363653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nelsonbrabo",
      "offset": 9
    }
  ],
  "location": "bottest.aSenha(String)"
});
formatter.result({
  "duration": 383705750,
  "status": "passed"
});
formatter.match({
  "location": "bottest.eEntrar()"
});
formatter.result({
  "duration": 2577766833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Algum dia direi: \"Não foi fácil, mas consegui.\"",
      "offset": 10
    }
  ],
  "location": "bottest.digitarAOláEuSouUmRobôEEstouSendoControladoPorUmTesteAutomatizadoTesteDeuCerto(String)"
});
formatter.result({
  "duration": 3174418919,
  "status": "passed"
});
formatter.match({
  "location": "bottest.realizarOTwitte()"
});
formatter.result({
  "duration": 154056822,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "enario: Usuario vai entrar no twiiter",
  "description": "",
  "id": "vai-entrar-no-twitter;enario:-usuario-vai-entrar-no-twiiter;;6",
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
  "name": "e coloca o usuario \"patricia__leal\"",
  "keyword": "E "
});
formatter.step({
  "line": 8,
  "name": "a senha \"nelsonbrabo\"",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "e entrar",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "digitar a Ciúme é um dos meus órgãos.",
  "matchedColumns": [
    0
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 11,
  "name": "realizar o twitte",
  "keyword": "E "
});
formatter.match({
  "location": "bottest.queOUsuarioAbreOTwitter()"
});
formatter.result({
  "duration": 18224722027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patricia__leal",
      "offset": 20
    }
  ],
  "location": "bottest.eColocaOUsuario(String)"
});
formatter.result({
  "duration": 464588161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nelsonbrabo",
      "offset": 9
    }
  ],
  "location": "bottest.aSenha(String)"
});
formatter.result({
  "duration": 383149763,
  "status": "passed"
});
formatter.match({
  "location": "bottest.eEntrar()"
});
formatter.result({
  "duration": 16834327942,
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
  "duration": 1395041969,
  "status": "passed"
});
formatter.match({
  "location": "bottest.realizarOTwitte()"
});
formatter.result({
  "duration": 69235038,
  "status": "passed"
});
});