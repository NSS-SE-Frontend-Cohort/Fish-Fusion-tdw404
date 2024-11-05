import { fishMenu } from "../restaurant.js";

describe("Restaurant", () => {

    test("Producing the menu", () => {
        expect(fishMenu(3.49).length)
            .toBe(`<h1>Menu</h1>
<article class="menu">
<h2>Salmon</h2>
    <section class="menu__item">Salmon Soup</section>
    <section class="menu__item">Salmon Sandwich</section>
    <section class="menu__item">Grilled Salmon</section>
</article>`.length)
    })

})
