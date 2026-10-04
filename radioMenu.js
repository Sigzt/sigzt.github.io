document.getElementById('title').addEventListener('click', () => {
    const ratio = window.screen.height/window.screen.width;
    
    let listaHRef = document.getElementsByClassName('radioHref');
    const left = 33;
    const top = 50;
    const r = 16;
    const alpha = 2*Math.PI/3+1;
    //let repartirPorcentajesX = 15 / listaHRef.length;
    //let repartirPorcentajesY = 30 / listaHRef.length;
    for (let i = 0; i < listaHRef.length; i++) {
        let x = left + r*Math.cos(-Math.PI/3+alpha*i/4);
        let y =  top + r*Math.sin(-Math.PI/3+alpha*i/4)/ratio;

        listaHRef[i].style.setProperty('--x', x + '%');
        listaHRef[i].style.setProperty('--y', y + '%');
        listaHRef[i].classList.toggle('linksDesplegados');
        listaHRef[i].toggleAttribute('inert');
    }
    console.log('hola');
    
    

})