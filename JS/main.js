

class Game {
    constructor(){
        this.time = 0;
        this.player = null; // will store an instance of the class Player
        this.obstacleArr = []; // will store multiple instances of the class Obstacle
    }
    start(){
        this.player = new Player();
        this.attachEventListeners();

        setInterval(() => {

            // create new obstacle
            if(this.time % 60 === 0){
                const newObstacle = new Obstacle();
                this.obstacleArr.push(newObstacle);
            }

            // move all obstacles
            this.obstacleArr.forEach((obstacleInstance) => {
                obstacleInstance.moveDown();
            });

            // detect collision

            this.obstacleArr.forEach((obstacleInstance) => {
                // horizontal pos of the player
                if(this.player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
                    this.player.positionX + this.player.width > obstacleInstance.positionX &&
                    this.player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
                    this.player.height + this.player.positionY > obstacleInstance.positionY){
                        //collision detected !!
                        console.log("collision detected !!")
                }
            });


            this.time++;

        }, 50);

    }
    attachEventListeners(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft"){
                this.player.moveLeft();
            } else if(event.key === "ArrowRight"){
                this.player.moveRight();
            }
        });
    }
}


class Player {
    constructor(){
        this.positionX = 45;
        this.positionY = 0;
        this.height = 20;
        this.width = 10;

        this.domElement = this.createDomElement();

    }
    createDomElement(){
        // create dom element
        const newElm = document.createElement('div');

        // set id and css 
        newElm.id = "player";
        newElm.style.left = this.positionX + "vw";
        newElm.style.bottom = this.positionY + "vh";
        newElm.style.width = this.width + "vw";
        newElm.style.height = this.height + "vh";

        // append to the dom
        const boardElm = document.getElementById("board"); //
        boardElm.appendChild(newElm);

        return newElm;
    }
    moveLeft(){
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw";
    }
    moveRight(){
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw";
    }
}


class Obstacle {
    constructor(){
        this.positionX = 45;
        this.positionY = 90;
        this.width = 10;
        this.height = 10;

        this.domElement = this.createDomElement();

    }
    createDomElement(){
        // create dom element
        const newElm = document.createElement('div');

        // set id and css 
        newElm.className = "obstacle";
        newElm.style.left = this.positionX + "vw";
        newElm.style.bottom = this.positionY + "vh";
        newElm.style.width = this.width + "vw";
        newElm.style.height = this.height + "vh";

        // append to the dom
        const boardElm = document.getElementById("board"); //
        boardElm.appendChild(newElm);

        return newElm;
    }
    moveDown(){
        this.positionY--;
        this.domElement.style.bottom = this.positionY + "vh";
    }
}



const game = new Game();
game.start();


