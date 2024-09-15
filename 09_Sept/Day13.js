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

console.log(bookRoom());

console.log(bookRoom());

bookRoom()
