class Game {
    constructor(){
        this.player = null
    }
    start () {
        this.player = new Player();
        this.attachEventListeners();
    }
    attachEventListeners () {
        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") {
                this.player.moveLeft();
            } else if (event.key === "ArrowRight") {
                this.player.moveRight();
            } else {
                console.log('you pressed any other key my friend')
            }
        })
    }
}

class Player {
    constructor(){
        this.positionX = 45;
        this.positionY = 0;
        // this.domElement = null;
        // this.createDomElement();
        this.domElement = this.createDomElement();
    }
    createDomElement () {
        //step 1: create element
        const newElm = document.createElement('div');

        //step 2: set up attributes
        newElm.id = "player";
        newElm.style.left = this.positionX + 'vw';
        newElm.style.bottom = this.positionY;

        //step 3: append to the parent
        const boardElm = document.getElementById("board");
        boardElm.appendChild(newElm);

        return newElm;
    }
    moveLeft(){
        this.positionX--;
        this.domElement.style.left = this.positionX + 'vw';        

    }
    moveRight(){
        this.positionX++;
        this.domElement.style.left = this.positionX + 'vw';
    }
}


const game = new Game();
game.start();
