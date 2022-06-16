let menu = document.getElementById ('nav-barJS');
let icon = document.getElementById('btnMenu');
let img_logo = document.getElementById('img_logo');

icon.addEventListener('click', ()=> {
    menu.classList.toggle('mostrar_nav-bar');
})