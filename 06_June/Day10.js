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