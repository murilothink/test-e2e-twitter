#language: pt
Funcionalidade: Vai entrar no twitter
  e vai fazer um tweet

   Esquema do Cenario: enario: Usuario vai entrar no twiiter
    Dado que o usuario abre o twitter para fazer login
    E e coloca o usuario <usuario>
    E a senha <senha>
#    E caso o acesso de erro
    E e entrar
    Entao digitar a <Tweets>
    E realizar o twitte
    Exemplos:

    | Tweets                          |   usuario               | senha            |
    | Ciúme é um dos meus órgãos.     |       zsdasds           |  nelsonbrabo    |
    | Quando o beijo combina, já era. |    patricia__leal       |  nelsonbrabo        |

