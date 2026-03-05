let fruit=["banana","mango","pomegranate","apple"]
fruit.sort()
console.log(fruit)
fruit=fruit.sort((a,b)=>a.localeCompare(b))
console.log(fruit)
