//You are homeless now
var moralScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'moralScene'});
    },

    preload: function ()
    {
        this.load.image('background', 'assets/BackgroundStreet.png');
        this.load.image('text21', 'assets/text21.png');
        this.load.image('moral1', 'assets/moral_one.png');
        this.load.image('moral2', 'assets/moral_two.png');


    },

    create: function ()
    {


        console.log("moralScene");
        currentScene = 101;
        this.background = this.add.sprite(0,0, 'background');
        this.background.setOrigin(0,0);
        this.background.setScale(0.65);

        this.moral1 = this.add.sprite(300, 200, 'moral1');	
        this.moral1.setScale(0.7);

    },

    update: function (time, delta)
    {
        if (!timeStarted){
            this.startTime=time;
            timeStarted = true;
        }
        if ((time - this.startTime) > 5000) {
            timeStarted = false;
            this.moral1.visible=false;
            this.moral2 = this.add.sprite(300, 200, 'moral2');	
            this.moral2.setScale(0.7);
        }
    },
});
