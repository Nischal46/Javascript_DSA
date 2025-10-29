// reduce method

let item = [
    {
        id: 12,
        itemName: 'headset',
        itemPrice: 2500,
        itemBrand: 'fantech'
    },

    {
        id: 14,
        itemName: 'mouse',
        itemPrice: 1500,
        itemBrand: 'fantech'
    },

    {
        id: 32,
        itemName: 'keyboard',
        itemPrice: 5200,
        itemBrand: 'eyoso'
    },

    {
        id: 43,
        itemName: 'mousepad',
        itemPrice: 250,
        itemBrand: 'fantech'
    }
]

let filteritem = item.reduce((acc, cur) => {
    if (cur.itemPrice > 2000) {
        acc.push(cur);
        // console.log(cur)
    }
    return acc;
}, [])

console.log(filteritem);

//filter array related the brand

let filterbrand = item.filter((cl) => cl.itemBrand === 'fantech');
console.log('The brand filter is ', filterbrand);

//calculte the sum of whole product

let totalsum = item.reduce((acc, cur) => {
    return acc + cur.itemPrice;
}, 0)

console.log('The total sum of the item is', totalsum);

//check if the item is above certain price

let checkisAvailability = item.some((i) => i.itemPrice > 5000);
//it return in true or false boolean value

console.log(checkisAvailability);

//soting item in ascending order

let sortedItem = item.sort((a, b) => a.itemPrice - b.itemPrice);
console.log('sorted items are ', sortedItem);


