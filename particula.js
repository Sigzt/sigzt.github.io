const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
export class Particula {
    constructor(x,y,span){
        this.x = x;
        this.y = y;
        this.ox = x;
        this.oy = y;
        this.size = 10;
        this.mass = 1;
        this.span = span;
        this.vx = Math.random()*0.5;
        this.vy = Math.random()*0.5;
    }

    f(x,y,vx,vy,span){
        let k = 2000;
        let c = 0.00001;
        let mu = 100/span;
        let dx = x-canvas.width*0.33;
        let dy = y-canvas.height*0.5;
        let d = Math.sqrt(dx**2+dy**2);
        let si = Math.sign(d-250);
        if((d<270)&(d>230)){
            si = 0;
        }
        if(d<20){
            d = 0.1;   
        }
        let modv = Math.sqrt(vx**2+vy**2);
        let drag = modv*span*c;
        let dcub = d**3
        let fx = -k/(dcub)*si*dx-drag*vx;
        let fy = -k/(dcub)*si*dy-drag*vy;
        return [fx*(mu),fy*(mu)]
    }

    update(){
        let a = this.f(this.x,this.y,this.vx, this.vy,this.span);
        this.x += this.vx;
        this.y += this.vy;
        this.vx += a[0];
        this.vy += a[1];
        this.span -= .015;
        if (this.span < 200){
            this.x= this.ox;
            this.y = this.oy;
            this.span = 200+Math.random()*430;
        }

        if (this.x > canvas.width){
            this.x = 0;
        }
        if (this.x < 0){
            this.x = canvas.width;
        }
        if (this.y > canvas.height){
            this.y = 0;
        }
        if (this.y < 0){
            this.y = canvas.height;
        }
    }


    draw(){        
        ctx.fillStyle = "rgb(30, 121, 224)";
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.span/100,0,2*Math.PI);
        ctx.closePath();
        ctx.fill();
    }
}