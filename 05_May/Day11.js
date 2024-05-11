class Songs{
    constructor(songName, songDuration, songType){
        this.songName = songName;
        this.songDuration = songDuration;
        this.songType = songType;
    }

    parentclassMethod(){
        console.log('This is the parent class method');
    }
}

class SongsPrototype extends Songs{
    constructor(songName, songDuration, songType){
        super(songName, songDuration, songType)
    }

    getDetails(){
        console.log(
            `
            song Name: ${this.songName}
            song Duration: ${this.songDuration}
            song Type: ${this.songType}
            `
        );
    }

}

const obj = new SongsPrototype('Breathless', 3, 'Classical-Rock');
obj.getDetails();
obj.parentclassMethod();