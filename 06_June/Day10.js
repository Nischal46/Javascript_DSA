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