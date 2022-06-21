// let progress = document.getElementById('progress');

window.addEventListener('load', ()=> {
    const progress = document.getElementById('progress');
    requestAnimationFrame(update);
})

function update() {
    progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame(update);
}

// ${((window.scrollY) ---> Cantidad de px scrolleados
// (document.body.scrollHeight ---> Alto total del body
// window.innerHeight) ---> Alto total de la ventana del buscador