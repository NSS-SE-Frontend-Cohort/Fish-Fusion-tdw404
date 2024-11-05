# Array Method Introduction

> 🧨 This chapter is for when you've completed the algorithm in the previous chapters. Once you have the menu being generated, then come back to this chapter.

Up to this point, you've been iterating arrays with `for..of` loops, which are very efficient. In this chapter, you will explore how to do the same with array methods.

Array methods are complex abstractions for beginners because the syntax is not as straightforward and easy to read. You need to understand that iteration happens even though you don't see a `for..of` loop. We encourage you to employ the help of generative AI tools to help guide you to a solution.

## Converting Objects to HTML

Currently, you have `for..of` loop that looks like the code provided below. It's purpose is to covert the raw data into corresponding HTML strings that will eventually end up in a web browser for people to view.

```js
for (const item of todaysIngredients) {
    html += `<h2>${item.species}</h2>
        <section class="menu__item">${item.species} Soup</section>
        <section class="menu__item">${item.species} Sandwich</section>
        <section class="menu__item">Grilled ${item.species}</section>
    `
}
```

Watch a short video that shows the syntax and operation of the `.map()` method on an array and see if you can replace your `for..of` loop in your code.

🎥 [JavaScript Array Map](https://www.youtube.com/watch?v=G3BS3sh3D8Q)
