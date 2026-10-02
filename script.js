import { Particula } from "./particula.js";

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let sistema = [];

function init(){
    for(let i =0;i< 400;i++){
        sistema.push(new Particula(Math.random()*canvas.width,Math.random()*canvas.height,200+Math.random()*430));
    }
}

function animate(){
    ctx.fillStyle = "rgba(245,245,220,0.5)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    for(let i = 0; i< sistema.length; i++){
        sistema[i].update();
        sistema[i].draw();
    }
    requestAnimationFrame(animate);
}


init()
animate()
