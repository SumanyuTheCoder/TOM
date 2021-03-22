class Tom {
    constructor(x, y, width, height) {
        this.body = Bodies.rectangle(x, y,20, height);
        this.width = 20;
        this.height = height;
        this.image = loadImage("images/cat1.png");
        World.add(world, this.body);


    }

        display(){
            //var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
          }
    

};
