(function(){
    "use strict";

    const ballsArr = [];

    const windowWidth = document.body.clientWidth;
    const windowHeight = document.body.clientHeight;
    const container = document.querySelector("#container");

    class Ball {
        constructor () {

            this.element = document.createElement("div");
            this.element.classList.add("rec");

            this.redVal = Math.floor(Math.random() * 255);
            this.greenVal = Math.floor(Math.random() * 255);
            this.blueVal = Math.floor(Math.random() * 255);
            this.element.style.backgroundColor = `rgb(${this.redVal}, ${this.greenVal}, ${this.blueVal})`;
            container.appendChild(this.element);

            this.xSpeed = Math.random() * 20;
            this.xOffset = Math.random() * (windowWidth - 40);

            this.ySpeed = Math.random() * 20;
            this.yOffset = Math.random() * (windowHeight - 40);
        }

        move () {
            if(this.xOffset > (windowWidth - this.element.clientWidth) || this.xOffset < 0){
                this.xSpeed = this.xSpeed * -1;
            }

            if(this.yOffset > (windowHeight - this.element.clientHeight) || this.yOffset < 0){
                this.ySpeed = this.ySpeed * -1;
            }

            this.xOffset += this.xSpeed;
            this.yOffset += this.ySpeed;

            this.element.style.transform = `translate(${this.xOffset}px, ${this.yOffset}px)`;
        }
    }

    function generateBalls(){
        for(let i = 0; i < 150; i++){
            ballsArr.push(new Ball());
        }
    }

    function onTick(){
        for(let j = ballsArr.length - 1; j >= 0; j--){
            let ball = ballsArr[j];
            ball.move();
        }

        requestAnimationFrame(onTick);
    }

    generateBalls();
    requestAnimationFrame(onTick);
}());