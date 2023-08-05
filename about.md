---
layout: page
title: About
permalink: /about/
---

<img src="https://github.com/nathpaiva.png" title="Profile Picture" class="profile" />

# Hi, I'm Nath (nat) 👋!

- Staff Software Engineer - 👩‍💻
- Living in Surrey - BC 🇨🇦
- From Santos - 🇧🇷 to the world 🌎

# What I have been doing?

- Building fun stuff at [@thejibe](https://github.com/thejibe), with an amazing dev team. Which I'm really proud of.
  - creating eCom with [NextJs](https://nextjs.org/)
  - testing with [cypress](https://www.cypress.io/), [rtl](https://testing-library.com/)
  - creating API with [NodeJS](https://nodejs.org/docs/latest-v16.x/api/)
  - CSS in JS is my thing
- Mentoring peeps in the tech career, [contact me if want to know more or wanna some help](mailto:hello@nathpaiva.com.br).
- Hiking in summer 🥾.
- Learning how to ride a snowboard 🏂 in winter.
- Creating new connections in a different country.

# How about my goals?

- Travel much more and have a world experience 🛫.
- Share more about code, and learn more about it 👩‍💻.
- Have really nice moments with my parents and friends from Brazil.

# Where you can find me?

{% for social in site.social %}
- [{{ social.name }}]({{ social.url }}){:target="_blank"}
{% endfor %}
