class Box extends BaseClass {
    constructor(x, y, width, height){
        super(x,y,width,height);
        this.visibility = 225;
    }

    score(){
        if(this.visibility<0 && this.visibility>105) {
            score++;
        }
    }

    display() {
        if(this.body.speed<3) {
            super.display();
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visibility = this.Visibility-5;
            tint(255,this.Visiblity);
            pop();
        }
    }    
  };
  