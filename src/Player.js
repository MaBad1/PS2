class Player {


    constructor(scene,tuto) {
        this.scene=scene;
        this.tuto=tuto;
        this.player = this.scene.physics.add.sprite(100, 445, 'player');
        this.player.setDisplaySize(63,100);
        this.player.setBounce(0.1);
        this.player.setCollideWorldBounds(false);
        this.scene.physics.add.collider(this.player, this.scene.platforms);
        this.player.compteur = 0;
        this.player.death = 0;
        this.player.back = true;

        this.isPlayed1 = false;
        this.isPlayed2 = false;

       this.scene.anims.create({
            key: 'walk',
            frames: this.scene.anims.generateFrameNames('walk', {
                start: 0,
                end: 7,
            }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'idle',
            frames: this.scene.anims.generateFrameNames('idle', {
                start: 0,
                end: 3,
            }),
            frameRate: 6,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'jump',
            frames: this.scene.anims.generateFrameNames('jump', {
                start: 0,
                end: 5,
            }),
            frameRate: 10,
            repeat:0,
        });
        this.scene.anims.create({
            key: 'brandir',
            frames: this.scene.anims.generateFrameNames('brandir', {
                start: 0,
                end: 3,
            }),
            frameRate: 6,
            repeat: -1
        });
    }

    /**getKey(player,FF){
        window.compteur+=1
        FF.body.enable=false
        FF.visible=false
        this.FFsfx.play();
    }*/

    jump(){
        this.player.setVelocityY(-420);
        this.player.play('jump', true);
        this.scene.walksfx.setVolume(0);
        this.scene.brandirsfx.setVolume(0);
    }
    moveRight(){
        this.player.setVelocityX(300);
        this.player.setFlipX(false);
        if (this.player.body.onFloor()) {
            this.scene.brandirsfx.setVolume(0);
            this.scene.walksfx.setVolume(2);
            this.player.play('walk', true)}
    }
    moveLeft(){
        this.player.setVelocityX(-300);
        if (this.player.body.onFloor()) {
            this.scene.brandirsfx.setVolume(0);
            this.scene.walksfx.setVolume(2);
            this.player.play('walk', true)}
        this.player.setFlipX(true);
    }
    stop(){
        this.player.setVelocityX(0);
        if (this.player.body.onFloor()) {
            this.scene.walksfx.setVolume(0);
            this.scene.brandirsfx.setVolume(0);
            this.player.play('idle',true)
        }
    }

    move(){

        switch (true) {
            case this.scene.cursors.space.isUp && this.scene.cursors.up.isDown && this.player.body.onFloor():
                this.jump()
                break;
            case this.scene.cursors.space.isUp && this.scene.cursors.left.isDown:
                this.moveLeft()
                break;
            case this.scene.cursors.space.isUp && this.scene.cursors.right.isDown:
                this.moveRight();
                break;
            case this.scene.cursors.space.isDown:
                this.player.setVelocityX(0);
                this.scene.walksfx.setVolume(0);
                this.scene.brandirsfx.setVolume(0.2);
                this.player.play('brandir',true)
                break;
            default:
                this.stop();
        }

    }

    }



