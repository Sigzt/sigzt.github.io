document.getElementById('title').addEventListener('click', () => {
    const ratio = window.innerHeight/window.innerWidth;
    
    let listaHRef = document.getElementsByClassName('radioHref');
    const left = 33;
    const top = 50;
    const r = 15*1920/window.innerWidth;
    const alpha = 3*Math.PI/5;
    //let repartirPorcentajesX = 15 / listaHRef.length;
    //let repartirPorcentajesY = 30 / listaHRef.length;
    for (let i = 0; i < listaHRef.length; i++) {
        let x = left + r*Math.cos(-Math.PI/4+alpha*i/4);
        let y =  top + r*Math.sin(-Math.PI/4+alpha*i/4)/ratio;

        listaHRef[i].style.setProperty('--x', x + '%');
        listaHRef[i].style.setProperty('--y', y + '%');
        listaHRef[i].classList.toggle('linksDesplegados');
        listaHRef[i].toggleAttribute('inert');
    }
    console.log('hola');
    
    

})