class Lampe{
    constructor(scene, player2, gate, gateO,lampFx) {
        this.scene = scene;
        this.player2 = player2;
        this.gate = gate;
        this.gateO = gateO;
        this.lampFx = lampFx;

        const map = this.scene.make.tilemap({key: this.scene.mapKey});

        this.lampe = this.scene.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Lampes').objects.forEach((Lampe) => {
            this.LampeSprite = this.scene.physics.add.sprite(Lampe.x, Lampe.y- Lampe.height, 'Lampe').setOrigin(0);
            this.LampeSprite.name = Lampe.name;
            this.lampe.add(this.LampeSprite);
        });
            //this.scene.physics.add.overlap(this.player2.player2,this.lampe, null, this);
    }


    LampeAct(player2, lampe){
        console.log(this.gate.Gate)
        // for (var i = 0; i < this.gate.Gate.length-1; i++) {
        //     if (lampe.name === this.gate.Gate[i].name) {
        //         this.gate.Gate[i].setvisible = false;
        //         this.gate.Gate[i].body.enable = false;
        //         lampe.visible = false;
        //     }
        // }
        // for (var i = 0; i < this.gateO.GateO.length; i++) {
        //     if (lampe.name === this.gateO.GateO[i].name) {
        //         this.gateO.GateO[i].visible = true;
        //     }
        // }
        // for (var i = 0; i < this.lampFx.LampFx.length; i++) {
        //     if (lampe.name === this.lampFx.LampFx[i].name) {
        //         this.lampFx.LampFx[i].visible = true;
        //     }
        // }
        // //this.scene.lampsfx.play();
        // //this.scene.doorsfx.play()

    }

    LampeDes(player2, lampe){
        console.log(this.gate.Gate)
        // for (var i = 0; i < this.gate.Gate.length; i++) {
        //     if (lampe.name === this.gate.Gate[i].name) {
        //         this.gate.Gate[i].visible = true;
        //         this.gate.Gate[i].body.enable = true;
        //         lampe.visible = true;
        //     }
        // }
        // for (var i = 0; i < this.gateO.GateO.length; i++) {
        //     if (lampe.name === this.gateO.GateO[i].name) {
        //         this.gateO.GateO[i].visible = false;
        //     }
        // }
        // for (var i = 0; i < this.lampFx.LampFx.length; i++) {
        //     if (lampe.name === this.lampFx.LampFx[i].name) {
        //         this.lampFx.LampFx[i].visible = false;
        //     }
        // }
        //this.scene.lampsfx.play();
        //this.scene.doorsfx.play()

    }
    /**update() {

        this.isolap = this.scene.physics.overlap(this.scene.player2.player2, this.lampe) ? true : false;

        switch (true) {
            case this.isolap === true:
                this.LampeAct();
                break;
            case this.isolap === false:
                this.LampeDes();
                break;
        }
    }*/
    }