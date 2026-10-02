const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const n = 100;
let sistema = [];

class Particula {
    constructor(x,y,span){
        this.x = x;
        this.y = y;
        this.ox = x;
        this.oy = y;
        this.size = 10;
        this.mass = 1;
        this.span = span;
        this.vx = 0;
        this.vy = 0;
    }
    update(){
        let a = f(this.x,this.y,this.vx, this.vy,this.span);
        this.x += this.vx;
        this.y += this.vy;
        this.vx += a[0];
        this.vy += a[1];
        this.span -= .005;
        if (this.span < 200){
            this.x= this.ox;
            this.y = this.oy;
            this.span = 200+Math.random()*430;
        }
    }
    draw(){
        ctx.fillStyle = "Blue";
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.span/100,0,2*Math.PI);
        ctx.closePath();
        ctx.fill();
    }
}
function f(x,y,vx,vy,span){
    let k = 2000;
    let c = 0.00001;
    let mu = 100/span;
    dx = x-700;
    dy = y-500;
    d = Math.sqrt(dx**2+dy**2);
    si = Math.sign(d-250);
    if((d<270)&(d>230)){
        si = 0;
    }
    if(d<20){
        d = 0.1;   
    }
    modv = Math.sqrt(vx**2+vy**2);
    drag = modv*span*c;
    fx = -k/(d**3)*si*dx-drag*vx;
    fy = -k/(d**3)*si*dy-drag*vy;
    return [fx*(mu),fy*(mu)]
}

function init(){
    for(let i =0;i< 1500;i++){
        sistema.push(new Particula(Math.random()*canvas.width,Math.random()*canvas.height,200+Math.random()*430));
    }
}
function animate(){
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    for(let i = 0; i< sistema.length; i++){
        sistema[i].update();
        sistema[i].draw();
    }
    requestAnimationFrame(animate);
}


init()
animate()
