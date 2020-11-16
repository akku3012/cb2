class CrumbledPaper {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          restitution:0.1,
          friction:0.8
      }
      this.image=loadImage("paper.png");
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      imageMode(CENTER);
      fill("yellow");
      image(this.image,0, 0, 40, 40);
      pop();
    }
  };