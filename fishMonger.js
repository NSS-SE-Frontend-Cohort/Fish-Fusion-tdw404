const {boatInventory} = require("./fishingBoat.js")

const mongerList = []

const mongerInventory = (maxPrice) => {
    //I was trying to write logic to maintain and update lists, since that seemed a little more realistic
    //But it looks like the tests want to start from a static boat list every time
    // const purchaseList = []
    // if (mongerList.length == 0) {
    //     for (var fish of boatInventory()) {
    //         if (fish.price <= 7.5 && fish.amount >= 10) {
    //             fish.amount -= 10;
    //             mongerList.push({
    //                 id: fish.id,
    //                 species: fish.species,
    //                 weight: fish.weight,
    //                 price: fish.price,
    //                 amount: 10})    
    //         }    
    //     }
    // }
    // for (var fish of mongerList) {
    //     if (fish.price <= maxPrice) {
    //         purchaseList.push({
    //             id: fish.id,
    //             species: fish.species,
    //             weight: fish.weight,
    //             price: fish.price,
    //             amount: fish.amount/2})
    //         fish.amount /= 2
    //     }

    // }

    //Since the tests want the boat list to stay static, I'll use much simpler logic:
    const purchaseList = []
    //The original for/of loop:
    // for (var fish of boatInventory()) {
    //     if (fish.price <= 7.5 && fish.amount >= 10) {
    //         var boughtFish = {
    //             id: fish.id,
    //             species: fish.species,
    //             weight: fish.weight,
    //             price: fish.price,
    //             amount: 10}
    //             if (boughtFish.price <= maxPrice) {
    //                 boughtFish.amount = 5
    //                 purchaseList.push(boughtFish)
    //             }
    //     }
    // }

    //Updated to use the map() method
    boatInventory().map(fish => {
        if (fish.price <= 7.5 && fish.amount >= 10) {
            var boughtFish = {
                id: fish.id,
                species: fish.species,
                weight: fish.weight,
                price: fish.price,
                amount: 10}
                if (boughtFish.price <= maxPrice) {
                    boughtFish.amount = 5
                    purchaseList.push(boughtFish)
                }
        }
    })
    return purchaseList
}

module.exports = {mongerInventory}