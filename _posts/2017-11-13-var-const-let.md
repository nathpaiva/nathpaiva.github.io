---
layout: post
title:  "var, const e let"
date:   2017-11-13 21:39:40
author: Nath Paiva
categories: javascript
tags:
- "javascript"
cover:  "/assets/instacode.jpg"
---

Primeiro post vou falar de variável e mostrar uma pequena (bem pequena mesmo) diferença entre `const` e `let`. Depois vou fazer outro post para abordar bem a diferença entre eles.

Como tudo no javascript, variável pode ser explicado com a matemática...

Na matemática quando temos que resolver um problema atribuímos o dado do problema a uma nomenclatura, para ajudar na resolução (ao menos eu fazia isso rsrs).

Ex. Maria tem 10 balas e quer dividir com suas 2 amigas, quantas balas cada amiga vai receber?

{% highlight javascript %}
quantidade de balas = 10
quantidade de amigas = 2
quantidade de balas por amiga = 10 / 2 = 5 (passamos um pouco adiaente já fazendo o cálculo).
{% endhighlight %}

Como que ficaria isso se fosse no JS?

É muito simples, bastaria a gente colocar a chave que denomina que é uma variável, a palavra `var`, no lugar de `quantidade de`:

{% highlight javascript %}
var balas = 2;
var amigas = 10;
var quantidadeDeBalasPorAmigas = balas / amigas; // 5 balas por amiga
{% endhighlight %}

Sim, podemos calcular as variáveis 🙃.

Sendo assim nós colocamos a palavra `var` para lembrar que ela é um elemento do nosso código que vamos utilizar em breve para fazer alguma ação, como no exemplo. Guardamos a quantidade de balas, depois a quantidade de amigas para depois calcular e guardar em uma próxima variável o valor total esperado.

Beleza, `var` é tranquilo já sabemos usar maaas o ES6 está ai e queremos saber, qual a diferença dela com `const` e `let`?

Nossa querida `var` tem alguns problemas que vou abordar em posts mais pra frente e alguns dos problemas conseguimos resolver usando as novas atribuições. Por que?

Começando com o `const`, basicamente se nós quisermos acessar a `var balas` e trocar o valor dela a qualquer momento, no JS nós podemos fazer isso. Nem sempre isso é bom pode acarretar alguns problemas, podemos esquecer que já usamos uma `var` no script e podemos reescrever e bom, o `const` ele veio para nos ajudar com isso.

Quando usamos `const` nós podemos escrever ele somente uma vez e assim garantimos que o valor dele sempre será o mesmo.

Já o `let` ele pode ser reescrito, porém ele garante que no mesmo script só existe um único valor declarado.

Sim pessoal, ainda temos muitas diferenças com o `const` e `let` além de saber mais sobre como é o comportamento de `var` dentro do script. Acredito que para começar está bacana! 😬 Comentem! 😜😘
