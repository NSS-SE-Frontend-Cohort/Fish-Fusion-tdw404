const {mongerInventory} = require("./fishMonger.js")

const fishMenu = (maxPrice) => {
    var result = '<h1>Menu</h1>' + `\n` + `<article class="menu">`
    console.log("result")

    //The original for/of loop:
    // for (const fish of mongerInventory(maxPrice)) {
    //     result = result + `\n` + `   <h2>${fish.species}</h2>`
    //     result = result + `\n` + `   <section class="menu__item">${fish.species} Soup</section>`
    //     result = result + `\n` + `   <section class="menu__item">${fish.species} Sandwich</section>`
    //     result = result + `\n` + `   <section class="menu__item">Grilled ${fish.species}</section>`
    // }

    //Updated using the map() method
    mongerInventory(maxPrice).map(fish => {
        result = result + `\n` + `   <h2>${fish.species}</h2>`
        result = result + `\n` + `   <section class="menu__item">${fish.species} Soup</section>`
        result = result + `\n` + `   <section class="menu__item">${fish.species} Sandwich</section>`
        result = result + `\n` + `   <section class="menu__item">Grilled ${fish.species}</section>`
    })
    result = result + `\n` + `</article>`
    return result;
}

module.exports = {fishMenu}