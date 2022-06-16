window.onload = function(){
    randomDiv1();
    randomDiv2();
    randomDiv3();
    randomDiv4();
    randomDiv5();
    randomDiv6();
    randomDiv7();
}

function randomDiv1(){
    var w = Math.random() * 300 - 100;
    var h = Math.random() * 300 - 100;

    var div = document.createElement("div");
    div.style.cssText = "position: absolute;";
    div.style.fontSize = '1.2rem',
    div.style.opacity = '0',
    div.style.fontWeight = 'bold',
    div.style.letterSpacing = '2px',
    div.style.textTransform = 'uppercase',
    div.style.cursor = 'pointer',
    div.style.padding = '.4rem',
    div.style.transform = 'scale(1)',
    div.style.textShadow = '2px 2px 20px #000000';
    div.style.zIndex = '1',
    div.innerText= 'Imaginación';

    div.style.width = "auto";
    div.style.height = "auto";
    div.style.top  = (Math.random() * window.innerHeight - h) + "px";
    div.style.left = (Math.random() * window.innerWidth - w) + "px";

    if (div.style.left < 0) {
        div.style.left = '1rem';
    }

    document.body.appendChild(div);

    div.onmouseover = ev => {div.style.opacity='1',
                             div.style.transform = 'scale(1.2)',
                             div.style.zIndex = '2',
                             div.style.color = 'rgb(114, 114, 114)',
                             div.style.transition = '.5s ease-in-out all' }
    div.onmouseleave = ev => {div.style.opacity='initial',
                              div.style.zIndex = '1',
                              div.style.color = '#fff',
                              div.style.transform = 'scale(1)'}
}

function randomDiv2(){
    var w = Math.random() * 300 - 100;
    var h = Math.random() * 300 - 100;

    var div = document.createElement("div");
    div.style.cssText = "position: absolute;";
    div.style.fontSize = '1.2rem',
    div.style.opacity = '0',
    div.style.fontWeight = 'bold',
    div.style.letterSpacing = '2px',
    div.style.textTransform = 'uppercase',
    div.style.cursor = 'pointer',
    div.style.padding = '.4rem',
    div.style.transform = 'scale(1)',
    div.style.textShadow = '2px 2px 20px #000000';
    div.style.zIndex = '1',
    div.innerText= 'Creatividad';

    div.style.width = "auto";
    div.style.height = "auto";
    div.style.top  = (Math.random() * window.innerHeight - h) + "px";
    div.style.left = (Math.random() * window.innerWidth - w) + "px";

    if (div.style.left < 0) {
        div.style.left = '1rem';
    }

    document.body.appendChild(div);

    div.onmouseover = ev => {div.style.opacity='1',
                             div.style.transform = 'scale(1.2)',
                             div.style.zIndex = '2',
                             div.style.color = 'rgb(114, 114, 114)',
                             div.style.transition = '.5s ease-in-out all' }
    div.onmouseleave = ev => {div.style.opacity='initial',
                              div.style.zIndex = '1',
                              div.style.color = '#fff',
                              div.style.transform = 'scale(1)'}
}

function randomDiv3(){
    var w = Math.random() * 300 - 100;
    var h = Math.random() * 300 - 100;

    var div = document.createElement("div");
    div.style.cssText = "position: absolute;";
    div.style.fontSize = '1.2rem',
    div.style.opacity = '0',
    div.style.fontWeight = 'bold',
    div.style.letterSpacing = '2px',
    div.style.textTransform = 'uppercase',
    div.style.cursor = 'pointer',
    div.style.padding = '.4rem',
    div.style.transform = 'scale(1)',
    div.style.textShadow = '2px 2px 20px #000000';
    div.style.zIndex = '1',
    div.innerText= 'Profesionalismo';

    div.style.width = "auto";
    div.style.height = "auto";
    div.style.top  = (Math.random() * window.innerHeight - h) + "px";
    div.style.left = (Math.random() * window.innerWidth - w) + "px";

    if (div.style.left < 0) {
        div.style.left = '16px';
    }

    document.body.appendChild(div);

    div.onmouseover = ev => {div.style.opacity='1',
                             div.style.transform = 'scale(1.2)',
                             div.style.zIndex = '2',
                             div.style.color = 'rgb(114, 114, 114)',
                             div.style.transition = '.5s ease-in-out all' }
    div.onmouseleave = ev => {div.style.opacity='initial',
                              div.style.zIndex = '1',
                              div.style.color = '#fff',
                              div.style.transform = 'scale(1)'}
}

function randomDiv4(){
    var w = Math.random() * 300 - 100;
    var h = Math.random() * 300 - 100;

    var div = document.createElement("div");
    div.style.cssText = "position: absolute;";
    div.style.fontSize = '1.2rem',
    div.style.opacity = '0',
    div.style.fontWeight = 'bold',
    div.style.letterSpacing = '2px',
    div.style.textTransform = 'uppercase',
    div.style.cursor = 'pointer',
    div.style.padding = '.4rem',
    div.style.transform = 'scale(1)',
    div.style.textShadow = '2px 2px 20px #000000';
    div.style.zIndex = '1',
    div.innerText= 'Innovación';

    div.style.width = "auto";
    div.style.height = "auto";
    div.style.top  = (Math.random() * window.innerHeight - h) + "px";
    div.style.left = (Math.random() * window.innerWidth - w) + "px";

    if (div.style.left < 0) {
        div.style.left = '1rem';
    }

    document.body.appendChild(div);

    div.onmouseover = ev => {div.style.opacity='1',
                             div.style.transform = 'scale(1.2)',
                             div.style.zIndex = '2',
                             div.style.color = 'rgb(114, 114, 114)',
                             div.style.transition = '.5s ease-in-out all' }
    div.onmouseleave = ev => {div.style.opacity='initial',
                              div.style.zIndex = '1',
                              div.style.color = '#fff',
                              div.style.transform = 'scale(1)'}
}

function randomDiv5(){
    var w = Math.random() * 300 - 100;
    var h = Math.random() * 300 - 100;

    var div = document.createElement("div");
    div.style.cssText = "position: absolute;";
    div.style.fontSize = '1.2rem',
    div.style.opacity = '0',
    div.style.fontWeight = 'bold',
    div.style.letterSpacing = '2px',
    div.style.textTransform = 'uppercase',
    div.style.cursor = 'pointer',
    div.style.padding = '.4rem',
    div.style.transform = 'scale(1)',
    div.style.textShadow = '2px 2px 20px #000000';
    div.style.zIndex = '1',
    div.innerText= 'La idea no es vivir para siempre, es crear algo que sí lo haga';

    div.style.width = "auto";
    div.style.height = "auto";
    div.style.top  = (Math.random() * window.innerHeight - h) + "px";
    div.style.left = (Math.random() * window.innerWidth - w) + "px";

    if (div.style.left < 0) {
        div.style.left = '1rem';
    }

    document.body.appendChild(div);

    div.onmouseover = ev => {div.style.opacity='1',
                             div.style.transform = 'scale(1.2)',
                             div.style.zIndex = '2',
                             div.style.color = 'rgb(114, 114, 114)',
                             div.style.transition = '.5s ease-in-out all' }
    div.onmouseleave = ev => {div.style.opacity='initial',
                              div.style.zIndex = '1',
                              div.style.color = '#fff',
                              div.style.transform = 'scale(1)'}
}

function randomDiv6(){
    var w = Math.random() * 300 - 100;
    var h = Math.random() * 300 - 100;

    var div = document.createElement("div");
    div.style.cssText = "position: absolute;";
    div.style.fontSize = '1.2rem',
    div.style.opacity = '0',
    div.style.fontWeight = 'bold',
    div.style.letterSpacing = '2px',
    div.style.textTransform = 'uppercase',
    div.style.cursor = 'pointer',
    div.style.padding = '.4rem',
    div.style.transform = 'scale(1)',
    div.style.textShadow = '2px 2px 20px #000000';
    div.style.zIndex = '1',
    div.innerText= 'Comunicación';

    div.style.width = "auto";
    div.style.height = "auto";
    div.style.top  = (Math.random() * window.innerHeight - h) + "px";
    div.style.left = (Math.random() * window.innerWidth - w) + "px";

    if (div.style.left < 0) {
        div.style.left = '1rem';
    }

    document.body.appendChild(div);

    div.onmouseover = ev => {div.style.opacity='1',
                             div.style.transform = 'scale(1.2)',
                             div.style.zIndex = '2',
                             div.style.color = 'rgb(114, 114, 114)',
                             div.style.transition = '.5s ease-in-out all' }
    div.onmouseleave = ev => {div.style.opacity='initial',
                              div.style.zIndex = '1',
                              div.style.color = '#fff',
                              div.style.transform = 'scale(1)'}
}

function randomDiv7(){
    var w = Math.random() * 300 - 100;
    var h = Math.random() * 300 - 100;

    var div = document.createElement("div");
    div.style.cssText = "position: absolute;";
    div.style.fontSize = '1.2rem',
    div.style.opacity = '0',
    div.style.fontWeight = 'bold',
    div.style.letterSpacing = '2px',
    div.style.textTransform = 'uppercase',
    div.style.cursor = 'pointer',
    div.style.padding = '.4rem',
    div.style.transform = 'scale(1)',
    div.style.textShadow = '2px 2px 20px #000000';
    div.style.zIndex = '1',
    div.innerText= 'Desafíos';

    div.style.width = "auto";
    div.style.height = "auto";
    div.style.top  = (Math.random() * window.innerHeight - h) + "px";
    div.style.left = (Math.random() * window.innerWidth - w) + "px";

    if (div.style.left < 0) {
        div.style.left = '1rem';
    }

    document.body.appendChild(div);

    div.onmouseover = ev => {div.style.opacity='1',
                             div.style.transform = 'scale(1.2)',
                             div.style.zIndex = '2',
                             div.style.color = 'rgb(114, 114, 114)',
                             div.style.transition = '.5s ease-in-out all' }
    div.onmouseleave = ev => {div.style.opacity='initial',
                              div.style.zIndex = '1',
                              div.style.color = '#fff',
                              div.style.transform = 'scale(1)'}
}