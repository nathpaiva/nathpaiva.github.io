---
layout: post
title:  "var, const e let"
date:   2017-12-04 22:02:40
author: Nath Paiva
categories: Javascript
tags:
- "javascript"
cover:  "/assets/instacode.jpg"
---

# Operadores em Javascript

Estou de volta para escrever mais sobre o JS! Quando tava estudando o curso do Daciuk cai no conteúdo sobre operadores, cara o impressionante é que nunca parei para pensar em operadores, eu simplesmente só saía usando eles sem entender as diferenças, os seus nomes e o entendimento de para que realmente serve!

Gente isso é tão ruim, não façam isso! Mas voltando... vou falar dos operadores em Javascript e bom, temos alguns tipos de operadores, vou listar todos e tentar explicar um pouco sobre cada um.

Os operadores são:
- Operador de atribuição
- Operador de comparação
- Operador aritmético
- Operadores lógicos
- Operadores de string
- Operadores condicionais
- Operador vírgula
- Operador unário

## Operador de atribuição

Esse é o mais fácil e eu nunca tinha parado para pensar que ele era um operador, esse operador é o `=`.

Com esse operador você consegue dizer que o valor que está à direita terá o mesmo valor que está sendo setado.

{% highlight javascript %}
x = 1 // valor de x é 1
{% endhighlight %}

## Operador de comparação

Esse operador como o nome diz faz a comparação dos valores para gente. Quando usamos ele a resposta que é retornada como verdadeiro ou falso o famoso boolean true ou false.

{% highlight javascript %}
3 == 3 // true
3 == 4 // false
{% endhighlight %}

Mas ainda podemos comparar se o primeiro valor é maior ou menor.

{% highlight javascript %}
3 > 2 // true
3 < 4 // true
{% endhighlight %}

Podemos usar dois operadores também, para saber se ele é maior ou igual ou menor ou igual.

{% highlight javascript %}
3 >= 2 // true
3 <= 4 // true
{% endhighlight %}

Esse operador no dia a dia ajuda muito a gente além de fazer essas comparações que eu citei ele ajuda a ver se além de ser o que precisamos se ele é do mesmo tipo ou não.

Como assim? No javascript temos vário tipos de
Então se quisermos saber se dois elementos são iguais podemos fazer assim:

{% highlight javascript %}
1 === '1' // false
{% endhighlight %}

😱 como assim? Bom basicamente no javascript o primeiro valor é um tipo número e o segundo valor é um tipo string, por mais que os dois sejam 1 o tipo deles é diferente, então quando fazemos essa comparação estamos vendo também se eles têm o mesmo tipo!

## Operador aritmético

Esse tipo de operador tornam dois ou mais valores um único resultado, sendo ele `string` ou `number`, sendo possível até mesmo `string` e `number`.
Os principais operadores aritméticos são `+`, `-`, `*` e `/`. Esse operadores funcionam como na matemática, adição, subtração, multiplicação e divisão.

{% highlight javascript %}
2 + 2 // retorna 4
'oi pessoal' + 4 // retorna oi pessoal4
3 * 3 // retorna 9
4 / 2 // retorna 2
{% endhighlight %}

Quando usamos o operador de adição para string chamamos isso de concatenação no javascript, nada mais é do que juntar valores.

Também temos o operador `%`, que é o módulo, esse operador retorna o resto de uma divisão.

{% highlight javascript %}
12 % 5 // retorna 2
{% endhighlight %}

## Operador lógico

Esse tipo de operador é usado com valores Boolean que retornam um valor Boolean verdadeiro. O operador lógico compara dois ou mais valores e vê se eles são verdadeiros. Temos como operador lógico o `&&` e o `||`.

O `&&` vê se as duas expressões comparadas são verdadeiras, já o `||` vê se uma das expressões são verdadeiras.

{% highlight javascript %}
1 === 1 && 2 === 2
{% endhighlight %}

Nesse caso estamos vendo se a primeira expressão temos um número e se ele é do valor 1, o que é verdadeiro e no segundo vemos se a expressão temos um numero e se ele é do valor 2 o que também é verdadeiro. Sendo assim essa comparação lógica `&&` é true.

{% highlight javascript %}
1 === 2 || 3 === 3
{% endhighlight %}

Nesse caso estamos vendo se a primeira expressão temos um número e se ele é do valor 2, o que é falso e no segundo vemos se a expressão temos um numero e se ele é do valor 3 o que é verdadeiro. Sendo assim essa comparação lógica `||` é true, pois uma das expressões comparadas é verdadeira.

Ainda temos como expressão lógica o `!` que negativa a nossa pergunta.

{% highlight javascript %}
!(1 === 2) ou
1 !== 2
{% endhighlight %}

Essa duas negações nos retorna true pois a comparação não é verdadeira mais transforma para true

Operador de string

Como já mencionamos no operador aritmético, podemos “somar” número com string, ou até mesmo string com string e como falei lá isso se chama concatenar.

Mas também podemos concatenar de uma outra forma sem ser como já foi feito.

{% highlight javascript %}
var minhaString = "alfa";
minhaString += "beto"; // É avaliada como "alfabeto" e atribui este valor a minhastring.
{% endhighlight %}

## Operador condicional

O operador condicional utiliza três operandos. Ele faz primeiro uma verificação para depois mostrar um resultado ou o outro.

{% highlight javascript %}
var status = (idade >= 18) ? 'Adulto' : 'Menor';
{% endhighlight %}

Nesse caso, se idade for maior ou igual a 18, ele fala que o status é adulto, se não ele é menor.

## Operador vírgula

Esse operador eu nunca tinha pensando que seria um operador, rsrs, ele serve para poder setar varias variáveis declarando uma única vexa palavra `var`. Isso é muito utilizado dentro de `for`.

{% highlight javascript %}
var a = 1,
b = 'ola',
c = 3;
{% endhighlight %}

Ou ainda no `for`...

for (var i = 0, j = 9; i <= 9; i++, j--) {
  console.log("a[" + i + "][" + j + "]= " + a[i][j]);
}

## Operador unário

O operador unário é uma operação com um operador.

Temos alguns operadores do tipo unário:

`delete`
Ele apaga um objeto, uma propriedade de um objeto ou um elemento no índice especificado de um array.

{% highlight javascript %}
var pessoa = {
	nome: ‘Nath’,
	idade: 30
};

delete pessoa.idade;

var pessoa = [{
	nome: ‘Nath’,
	idade: 30
},
{
	nome: ‘Tag’,
	idade: 28
}];

delete pessoa[1];

{% endhighlight %}

`typeof`

Ele retorna uma string indicando o tipo do operando.

{% highlight javascript %}
const name = “Nath”;
const idade = 30;

typeof name;  // retorna “string”
typeof idade;     // retorna “number”
{% endhighlight %}

`void`

Ele especifica que uma expressão deve ser avaliada sem retorno de valor.

{% highlight javascript %}
<a href="javascript:void(document.form.submit())">
Enviar</a>
{% endhighlight %}

## Fim...

Esses são os operadores que existem, além deles ainda temos o relacional e operador bit a bit, que ainda preciso entender de verdade como funciona. Muitas das coisas que li e aprendi estudando sobre operador é que usava muito todos eles e alguns não sabia que era um tipo de operador. Foi bem bacana ler e aprender sobre esse assunto.

Vou voltar a escrever sobre operadores assim que tiver uma compreensão maior sobre os que faltaram… rsrs

### Referencia:
- [Operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators)
