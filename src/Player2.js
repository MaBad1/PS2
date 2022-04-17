class Player2 {


    constructor(scene) {
        this.scene=scene;
        this.cameras=scene;
        this.player2 = this.scene.physics.add.sprite(100, 300, 'FeuF');
        this.player2.setDisplaySize(40,40);
        this.player2.setCollideWorldBounds(true);
        this.scene.physics.add.collider(this.player2, this.scene.platforms);
        this.player2.body.setAllowGravity(false);

    }

    jump(){
        this.player2.setVelocityY(-420);
        this.player2.play('jump', true);
    }
    moveRight(){
        this.player2.setVelocityX(300);
        this.player2.setFlipX(false);
        if (this.player2.body.onFloor()) {
            this.player2.play('walk', true)}
    }
    moveLeft(){
        this.player2.setVelocityX(-300);
        if (this.player2.body.onFloor()) {
            this.player2.play('walk', true)}
        this.player2.setFlipX(true);
    }
    stop(){
        this.player2.setVelocityX(0);
        if (this.player2.body.onFloor()) {
            this.player2.play('idle',true)
        }
    }

    }



