class Bin {
    constructor(x, y, width, height) {
     var options = {
       //  'restitution':0.8,
          isStatic:true,
          'friction':0.3,
          'density':1.0
      }
      this.bin=loadImage("dustbin.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position
     
      push();
      image(this.bin)
      translate(pos.x,pos.y)
     
      rectMode(CENTER);
      strokeWeight(3);
      
      fill("darkblue");
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  