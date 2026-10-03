const canvas = document.getElementById("canvas2");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const width = canvas.width;
const height = canvas.height;


const imageData = ctx.createImageData(width, height);
const data = imageData.data;
function iter (cx,cy,itmax){

    let zx = 0.0;
    let zy = 0;
    let i = 0
    while( (i< itmax) && (zx**2+zy**2 < 5)){
        let a = zx**2 - zy**2 + cx;
        zy = 2*zx*zy + cy;
        zx = a;
        i++
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

    data[index]     = res*7;   // R
    data[index + 1] = res;     // G
    data[index + 2] = 1;  // B
    data[index + 3] = 255;   // A (Opaco)

    index += 4; // Avanzar al siguiente píxel
}
}


ctx.putImageData(imageData, 0, 0);
