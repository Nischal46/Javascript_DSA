//js forEach method

const instruments = [
    {name: 'guitar', price: 7500},
    {name: 'ukulele', price: 3000},
    {name: 'flute', price: 500},
    {name: 'Drum', price: 25000},
    {name: 'Casion', price: 15000},
    {name: 'Bass guitar', price: 12000}
]

let newArray = []
instruments.forEach(items => newArray.push(items.name));

console.table(newArray);

const newinstruments = instruments.reduce((acc, item) => {
    return acc.concat(item.name); // or using spread operator: return [...acc, item.name];
  }, []);

console.log('This is from reduce method', newinstruments);

const compare = instruments.sort((a, b) => a.name.localeCompare(b.name));
console.log(compare);