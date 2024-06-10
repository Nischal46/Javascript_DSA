//constructor function

function Categories(name, type){
this.name = name;
this.type = type;
}

Categories.prototype.details = function(){
    if(this.type === "mp3") console.log('This is the music file of the songs');
    else if(this.type === "mp4") console.log('This is the video file of the songs');
}

const obj = new Categories('Hukka mero', 'mp3');
console.log(obj);
obj.details();

//same logic using OOPs class and objects

class MusicTypes{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    getDetails(){
        if(this.type === "mp3") console.log('Music songs file');
        else if(this.type === 'mp4') console.log("Video file containing");
    }
}

const obj1 = new MusicTypes('Din', 'mp4');
console.log(obj1);
obj1.getDetails();

let numArray = [21, 32, 44, 12, 26];

for(let i = 0; i < numArray.length - 1; i++){
    for(let j = 0; j < numArray.length - 1; j++){
        if(numArray[j] > numArray[j+1]){
            let temp = numArray[j];
            numArray[j] = numArray[j+1];
            numArray[j+1] = temp 
        }
    }
}

console.log('Ascending order ', numArray); 