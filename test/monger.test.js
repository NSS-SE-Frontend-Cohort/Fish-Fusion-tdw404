import { mongerInventory } from "../fishMonger.js";

describe("Fishmonger", () => {
    test("Can view all inventory", () => {
        expect(mongerInventory(10.00))
            .toMatchObject([
                { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 5 },
                { id: 2, species: "Mackerel", weight: 3, price: 4.1, amount: 5 },
                { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 5 },
                { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 5 }
            ])
    })

    test("Can view inventory that cost less than $6 per fish", () => {
        expect(mongerInventory(6))
            .toMatchObject([
                { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 5 },
                { id: 2, species: "Mackerel", weight: 3, price: 4.1, amount: 5 },
                { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 5 }
            ])
    })

    test("Can view inventory that cost less than $4 per fish", () => {
        expect(mongerInventory(4))
            .toMatchObject([
                { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 5 },
                { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 5 }
            ])
    })

})
