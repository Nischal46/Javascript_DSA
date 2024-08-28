let newArray = [
    {id: 123, product: 'mouse', price: 1500},
    {id: 234, product: 'keyboard', price: 5000},
    {id: 231, product: 'mousepad', price: 500},
    {id: 345, product: 'cooler', price: 2500},
    {id: 787, product: 'laptop', price: 78000}
]

newArray = newArray.reduce((acc, cur) => {
    if(cur.price > 1000) acc.push(cur)
        return acc
}, [])

console.log(newArray);
