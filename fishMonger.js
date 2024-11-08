const {boatInventory} = require("./fishingBoat.js")

const mongerInventory = (maxPrice) => {
    return boatInventory()
            .filter(fish => (fish.price <= 7.5 && fish.price < maxPrice && fish.amount >= 10))
            .map(fish => { 
                            return {
                                id: fish.id,
                                species: fish.species,
                                weight: fish.weight,
                                price: fish.price,
                                amount: 5
                            }
                        })

}

module.exports = {mongerInventory}