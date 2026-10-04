document.getElementById('title').addEventListener('click', () => {
    let listaHRef = document.getElementsByClassName('radioHref');
    let left = 35;
    let top = 32;
    let repartirPorcentajesX = 15 / listaHRef.length;
    let repartirPorcentajesY = 30 / listaHRef.length;
    for (let i = 0; i < listaHRef.length; i++) {
        if (i == listaHRef.length / 2) {
            
        } else if (i >= listaHRef.length / 2) {
            left -= repartirPorcentajesX;
            
        } else {
            left += repartirPorcentajesX;
        }

        top += repartirPorcentajesY;

        listaHRef[i].style.setProperty('--x', left + '%');
        listaHRef[i].style.setProperty('--y', top + '%');
        listaHRef[i].classList.toggle('linksDesplegados');
        listaHRef[i].toggleAttribute('inert');
    }
    console.log('hola');
    
    

})