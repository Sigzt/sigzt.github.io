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
        this.vx = Math.random()*0.1;
        this.vy = Math.random()*0.1;
    }
    
    f(x,y,vx,vy,span){
        const k = 2000,c = 0.0001, mu = 100/span;
        const cx = canvas.width*0.33, cy = canvas.height*0.5;
        const L = Math.max(canvas.width,canvas.height);
        const N = 2;
        let fy = 0, fx = 0;
        for(let i = -N; i<=N; i++){
            for(let j= -N; j<=N; j++){
                
                const dx = x - cx - i*L, dy = y - cy - j*L;
                const d = Math.hypot(dx,dy);
                let si = Math.sign(d-230);
                if (d>210 && d<250) si = 0;
                const dcub = d**3;
                fx -= k*dx/dcub*si;
                fy -= k*dy/dcub*si;
            }
        }
        const modv = Math.hypot(vx,vy);
        const drag = modv**2*span*c;
        fx -= drag*vx;
        fy -= drag*vy;
        
        return [fx*mu,fy*mu]
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