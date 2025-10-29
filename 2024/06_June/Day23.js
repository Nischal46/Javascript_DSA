// higher order array

const stName = ['ramesh', 'laxman', 'hari', 'suman'];

stName.forEach((cl, ind) => {
    console.log(`Student no ${ind + 1}:-> ${cl}`);
});

//constructor function and its prototypal inheritence


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
    