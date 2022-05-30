class cutBoss extends Phaser.Scene {
    constructor() {
        super('cutscene2');
    }

    preload(){

        this.load.video('CBoss', 'assets/VideoImgs/CutsceneBoss.mp4','loadeddata', false, true);
        this.load.image('Skip', 'assets/images/UI/Skip.png');
        this.load.audio('MainTheme', 'assets/sounds/LevelMusic.mp3')
        this.load.image('Line', 'assets/images/UI/Line.png');;

    }

    create() {

        this.video1 = this.add.video(1000, 400, 'CBoss');
        this.video1.setScale(1, 1);
        this.video1.play();

        this.mainTheme = this.sound.add('MainTheme',{volume: 0.3});
        this.mainTheme.loop = true;
        this.mainTheme.play();

        this.buttonSkipSprite = this.add.image(770, 800, 'Skip')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(0.7)

        const line=this.add.image(900, 850, 'Line')
            .setOrigin(0, 0)
            .setScale(1)
            .setVisible(false)

        this.buttonSkip = this.add.rectangle(this.buttonSkipSprite.x, this.buttonSkipSprite.y,350,150,0xffffff,0)
            .setOrigin(0,0)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.mainTheme.stop();
                this.scene.start('Boss')
            })
            .on('pointerover',function(){
                line.setVisible(true);
            })
            .on('pointerout',function(){
                line.setVisible(false);
            })

    }
}