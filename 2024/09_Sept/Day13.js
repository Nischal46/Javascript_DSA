let roomAvailability = [
    {roomno: 101, availability: true},
    {roomno: 102, availability: false},
    {roomno: 103, availability: false},
    {roomno: 104, availability: true},
    {roomno: 105, availability: false},
]

function bookRoom(){

    for(let i=0; i<roomAvailability.length; i++){
        if(roomAvailability[i].availability === true){
            console.log(`Room ${roomAvailability[i].roomno} is available`);
            roomAvailability[i].availability = false;
            roomAvailability[i].checkindate = new Date();
            break;
        }

        if(i === roomAvailability.length - 1) console.log("All rooms are booked");
    }

    return roomAvailability;

}

// console.log(bookRoom());

// console.log(bookRoom());

// bookRoom()


let inventory = [
    { name: 'Apple', quantity: 10 },
    { name: 'Banana', quantity: 5 },
    { name: 'Orange', quantity: 8 },
  ];

function sellingItem(item, quantity){

    for (const element of inventory) {
        if(item === element.name){

            element.quantity = element.quantity - quantity;
            console.log(`Your apple stock is decreased by ${quantity} and available stock is ${element.quantity}`);
        }
    }

    return inventory;
}

console.log(sellingItem('Apple', 4));