const canvas = document.getElementById("canvas2");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const width = canvas.width;
const height = canvas.height;

let tipo = 1;

function main(){
const imageData = ctx.createImageData(width, height);
const data = imageData.data;


function iter (cx,cy,itmax){
    let zx = 0.0;
    let zy = 0.0;
    let i = 0
    if (tipo == 1){
    while( (i< itmax) && (zx**2+zy**2 < 5)){
        let a = zx**2 - zy**2 + cx;
        zy = 2*zx*zy + cy;
        zx = a;
        i++
    }
    }  
     if (tipo == 0 ){
    while( (i< itmax) && (zx**2+zy**2 < 5)){
        let a = zx**2 - zy**2 + cx;
        zy = 2*Math.abs(zx*zy) + cy;
        zx = a;
        i++
    }
    } 
    if (tipo == 2 ){
    while( (i< itmax) && (zx**2+zy**2 < 5)){
        let a = zx**2 + zy**2 ;
        if (a == 0) a= 0.0000001;
        zx = zx/a + cx;
        zy = -zy/a + cy;
        i++
    }
    }
    return i
}

let itmax = 100;
let index = 0;
for (let y = 0; y < height; y++) {
for (let x = 0; x < width; x++) {
    nx = (x/width-0.7)*4;
    ny = (y/height-0.5)*4;
    res = iter(nx,ny,itmax);

    data[index]     = res*7;   
    data[index + 1] = res;     
    data[index + 2] = 1;  
    data[index + 3] = 255;   

    index += 4; 
}
}


ctx.putImageData(imageData, 0, 0);
}

main();

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left, y = event.clientY - rect.top;
    const cx = (x/width-0.7)*4, cy = (y/width-0.5)*4;
    let rx = x,ry = y;
    let sx = cx,sy = cy;
    for(let i = 0; i< 20;i++){
        ctx.strokeStyle = "Blue";
        ctx.beginPath();
        ctx.moveTo(rx,ry)
        let a = sx**2 - sy**2 + cx;
        sy = 2*sx*sy + cy;
        sx = a;
        rx = width*(sx/4+0.7);
        ry = height*(sy/4+0.5)
        ctx.lineTo(rx,ry);
        
        ctx.stroke();
    }
}




document.getElementById('cambio').addEventListener('click', () => {
    tipo = (tipo +1)%3;
    main();
    

})