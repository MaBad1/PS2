class Player {


    constructor(scene,tuto) {
        this.scene=scene;
        this.tuto=tuto;
        this.player = this.scene.physics.add.sprite(100, 488, 'player');
        this.player.setDisplaySize(63,100);
        this.player.setBounce(0.1);
        this.player.setCollideWorldBounds(false);
        this.scene.physics.add.collider(this.player, this.scene.platforms);
        this.player.compteur = 0;
        this.player.back = true;

       this.scene.anims.create({
            key: 'walk',
            frames: this.scene.anims.generateFrameNames('walk', {
                start: 0,
                end: 8,
            }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'idle',
            frames: this.scene.anims.generateFrameNames('idle', {
                start: 0,
                end: 4,
            }),
            frameRate: 6,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'jump',
            frames: this.scene.anims.generateFrameNames('jump', {
                start: 0,
                end: 6,
            }),
            frameRate: 10,
            repeat:0,
        });
        this.scene.anims.create({
            key: 'brandir',
            frames: this.scene.anims.generateFrameNames('brandir', {
                start: 0,
                end: 4,
            }),
            frameRate: 6,
            repeat: -1
        });
    }

    getKey(player,FF){
        this.player.player.compteur+=1
        FF.body.enable=false
        FF.visible=false
    }

    jump(){
        this.player.setVelocityY(-420);
       this.player.play('jump', true);
    }
    moveRight(){
        this.player.setVelocityX(300);
        this.player.setFlipX(false);
        if (this.player.body.onFloor()) {
            this.player.play('walk', true)}
    }
    moveLeft(){
        this.player.setVelocityX(-300);
        if (this.player.body.onFloor()) {
            this.player.play('walk', true)}
        this.player.setFlipX(true);
    }
    stop(){
        this.player.setVelocityX(0);
        if (this.player.body.onFloor()) {
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
                this.player.play('brandir',true)
                break;
            default:
                this.stop();
        }

    }

    }



