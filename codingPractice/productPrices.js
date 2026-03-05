let productPrices=[25,70,45,32,124,56]
let discountPrices=productPrices.map(val=>val*0.9)

console.log(discountPrices)

let affordablePrice=discountPrices.filter(val=>val<50)
console.log(affordablePrice)

let affordableProducts=affordablePrice.reduce((total,affordablePrice)=>total+affordablePrice,0)
console.log(affordableProducts)