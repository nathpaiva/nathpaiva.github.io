---
layout: post
title:  Answering an interview question - 01
date:   2023-09-07 18:49:00
author: Nath Paiva
categories:
- javascript
tags:
- javascript
- interview
cover:  "/assets/instacode.jpg"
---

# Post summary

- [Answering an interview question - 01](#answering-an-interview-question---01)
- [The challenge](#the-challenge)
  - [Audio API](#audio-api)
  - [Loop](#loop)
  - [Promise](#what-the-promise-does-for-us)
- [That's all](#thats-all)
- [Link references](#link-references)

# Answering an interview question - 01

Hey there, in this post I want to share about [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise){:target="_blank"} and [`Audio API`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio){:target="_blank"}.

A few years ago, I did a technical interview where the interviewer asked me to play a song from an array. Well, I miserably failed, and it wasn’t because I didn’t know about `Promise` or the `Audio API`.

I’ve failed because when I’m being tested by someone, my brain can’t process as I wish 🫠. This is an issue I have in my life in many situations. So, regarding code, this blog is a safe place to develop my confidence and share what I love to do. Maybe in the future, I will be more prepared for those “silly” questions _(I hate an interview process. Who doesn’t?)_.

Anyway, let’s start talking about code. Because this is what we love to do, at least I do love hahahahaha. 😂

## The challenge

So basically, the challenge is to create a `function` that receives an `array` of song paths (`string`) and play each song sequentially. The next song must be played only after the previous one has finished. To resolve this challenge, we must know about, `Audio API`, `loops` and asynchronous functions (`Promise`).

### Audio API

First of all, we have to know that the latest browsers don't let us play media automatically after the page renders. [We got this exception](https://developer.chrome.com/blog/autoplay/){:target="_blank"}:

> [(index):245 Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.](https://developer.chrome.com/blog/autoplay/){:target="_blank"}

The user must do some interaction with the page before the script starts the song, in our case. So to make this work first we need to make this interaction happen.

In our HTML file, we can just create a `button`, and then create the action to start.

```html
<button type="button">Play</button>
```

On the JS side, we can add a listener for the button element.

```js
(() => {
  // first get the button from the DOM
  const buttonElement = document.querySelector('button')

  // with this element we can add the addEventListener for the `click` type.
  buttonElement.addEventListener('click', () => {
    console.log('this message will show after click')
  })
})()
```

Inside the button action, we can trigger the function to load each file and then play the song. Therefore we can start the function creation which will receive the array and play each song. For this stage, we want only to log the file name.

```js
function autoPlaylist(audioList) {
  for (let index = 0; index < audioList.length; index++) {
    const song = audioList[index]
    console.log('🚀 song:', song)
  }
}

const buttonElement = document.querySelector('button')

buttonElement.addEventListener('click', () => {
  const audioList = ['/samples/sample-01.mp3', '/samples/sample-02.mp3', '/samples/sample-03.mp3']
  autoPlaylist(audioList)
})
```

### Loop

As we can see on the code above, the loop chosen to log each value is the [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration){:target="_blank"}, we could also use `while` or any functional array method such as `map`, `reduce` or `filter,` but not **`forEach`**.

First, we didn't choose any functional array method because after playing the song, we won't need any new array.

So why are we not using `forEach`? Basically, in the next step, we have to play our audio, and we can't play all at the same time. We have to run it asynchronously. The `forEach` method has a different behaviour for async, and instead of waiting to finish the async code and run the next item, the `forEach` resolves all at once.

If we just use the `Audio API` and call the `play` method without changing our function to run as async, all songs will play at the same time. Let's take a look at the following code:

```js
function autoPlaylist(audioList) {
  for (let index = 0; index < audioList.length; index++) {
    const song = audioList[index]
    // start a new instance of Audio with the song path as param
    const track = new Audio(song)
    // play the track
    track.play()
  }
}
```

With this code, the result we will have is all songs playing together. Because the loop doesn't know whether the song has finished or not, nor the content which is running inside it. And well, we don't want it, right? So now it's time to use the `Promise`, and let our loop know if should go to the next song or not. The question now is:

### What the `Promise` does for us?

[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) is an object that gives us methods which we can call whether an `async` action finishes successfully or not. Therefore if we have to execute something that takes a while to complete and after completion, we have to run the next action, we have to use `Promise`. With the `.resolve()` and `.reject()` methods our code will understand exactly when the execution has finished. So let's take a look at how it works with our songs.

Previously our code was playing all songs at the same time, so we need to control it. The first thing to do is declare our `autoPlaylist` function as `async`. With this declaration, we are able to wait for an async function to finish to call the next action.

Now we will use [`async` / `await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function){:target="_blank"} and `new Promise()`


```js
// declare it is an async function
async function autoPlaylist(audioList) {
  for (let index = 0; index < audioList.length; index++) {
    const song = audioList[index]

    /**
     * create a new Promise instance and wait for the resolution
     * the Promise constructor gives an executor function.
     * And it receives two functions as params the `resolve` and `reject`.
     * Which we will define that the audio finished.
     *
     * Now inside the executor function we can start the audio
     * */
    await new Promise((resolve, _reject) => {
      /**
       * start the new instance of Audio:
       * As we are using before this instance give some methods in order to work
       * properly with the audio
       * */
      const track = new Audio(song)
      // with the instance we can play the song
      track.play()

      // and we can add a listener check when its ends
      track.addEventListener('ended', () => {
        /**
         * when the song has finished we can use the `resolve` function
         * from the Promise executor to finish the asynchronous code
         * and move on to the next action
         * */
        resolve()
      })
    })
  }
}
```

## That's all

Phew... Ya, it's a lot. But now we have our `autoPlaylist` playing each song sequentially and not all at the same time. Of course, we can break down the code above to have a better organization, but after all the main concept is that.

To conclude in this article we saw about `loop`, `Promise` and `Audio API`. Sometimes working with `Promise` in run time while we have to wait for something else to continue could not be easy, nevertheless, now we can understand a bit more how it works. Following I'm adding the list of documentation I used to create it, and also the demo with the example created here.

## Link references

- [Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API){:target="_blank"}
- [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector){:target="_blank"}
- [loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration){:target="_blank"}
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map){:target="_blank"}
- [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce){:target="_blank"}
- [filer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter){:target="_blank"}
- [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach){:target="_blank"}
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise){:target="_blank"}
- [async await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function){:target="_blank"}
- [Do not use forEach with async-await](https://gist.github.com/joeytwiddle/37d2085425c049629b80956d3c618971){:target="_blank"}
- [Demo](https://codesandbox.io/s/autoplaylist-x36jc3?file=/src/index.mjs){:target="_blank"}

Thanks, see you 👋.
