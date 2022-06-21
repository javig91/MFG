<?php include '../header.php'; ?>

<body class="proyectos_page">
    <section class="proyectos_page_section container container-flex">

        <h1>Proyectos</h1>

        <div id="base-H1" class="base-H1">
            <span id="span_base" class="span_base"></span>
        </div>

        <p class="section-p">Durante nuestra trayectoria hemos considerado la confianza como un eslabón fundamental en el crecimiento del proyecto, lo que nos lleva  que cada vez más individuos, emprendedores y empresas depositen su confianza en MFG Web. Desde el comienzo le brindaremos un trato personalizado y constante, acompañandolo en cada etapa y llevando finalmente el producto que espera.</p>

        <div class="section_index">

            <div class="webs-globos">

                <div class="webs-globos-titulo">

                    <div class="orden-imgs">
                        <h3><span id="maquina-Escribir1">Compatibilidad</span></h3>
                        <img src="../imgs/index/svgs/webs-compatibilidad.svg" alt="compatibilidad">
                    </div>

                    <div class="orden-imgs">
                        <h3><span id="maquina-Escribir2">Elegancia</span></h3>
                        <img src="../imgs/index/svgs/webs-elegancia.svg" alt="elegancia">
                    </div>

                    <div class="orden-imgs">
                        <h3><span id="maquina-Escribir3">Detalle</span></h3>    
                        <img src="../imgs/index/svgs/webs-detalle.svg" alt="detalle">
                    </div>
                    
                </div>

                <p>El impacto estético y funcional de la página lo consideramos un aspecto clave para una buena experiencia de usuario, por eso, junto a una buena práctica de compatibilidad y usabilidad en todos los dispositivos electrónicos que existen hoy en día, sumamos nuestro trabajo que ofrece todas las características necesarias para una navegación sólida y agradable.<br>
                Creemos firmemente que los detalles son los que hacen la diferencia y, es por eso, que nos tomamos en serio cada trabajo, propuesta o pedido del cliente y, así, poder entregarle un producto final acorde a lo esperado y requerido.</p>

            </div>

        </div>

        <div class="contenedor_padre-proyectos">
            <div class="div-proyectos">
                <h2 class="h2-proyectos p_hosting">Seguridad La Unión</h2>
                <figure class="proyectos">
                    <img src="../imgs/trabajos/seguridadunion.jpg" alt="sample20" />
                    <figcaption>
                        <div class="left">
                            <h3>Ver Página</h3>
                        </div>
                    </figcaption>
                    <div class="center">
                        <i class="icon icon-forward"></i>
                    </div>
                    <a href="http://www.seguridadunion.com.ar/" target="_blank"></a>
                </figure>
            </div>
                
            <div class="div-proyectos">    
                <h2 class="h2-proyectos">Yanina de Martino</h2>
                <figure class="proyectos">
                    <img src="../imgs/trabajos/ydm.jpg" alt="Página web Yanina de Martino" />
                    <figcaption>
                        <div class="left">
                            <h3>Ver Página</h3>
                        </div>
                    </figcaption>
                    <div class="center">
                        <i class="icon icon-forward"></i>
                    </div>
                    <a href="http://www.ydemartino.com/" target="_blank"></a>
                </figure>
            </div>

            <div class="div-proyectos"> 
                <h2 class="h2-proyectos">Urban Design</h2>
                <figure class="proyectos">
                    <img src="../imgs/trabajos/urban.jpg" alt="Página web Urban Design" />
                    <figcaption>
                        <div class="left">
                            <h3>Ver Página</h3>
                        </div>
                    </figcaption>
                    <div class="center">
                        <i class="icon icon-forward"></i>
                    </div>
                    <a href="http://www.urbandesign.com.ar/" target="_blank"></a>
                </figure>
            </div>

            <div class="div-proyectos"> 
                <h2 class="h2-proyectos">Copistore</h2>
                <figure class="proyectos">
                    <img src="../imgs/trabajos/copistore.jpg" alt="Página web Copistore" />
                    <figcaption>
                        <div class="left">
                            <h3>Ver Página</h3>
                        </div>
                    </figcaption>
                    <div class="center">
                        <i class="icon icon-forward"></i>
                    </div>
                    <a href="http://www.copistore.com.ar/" target="_blank"></a>
                </figure>
            </div>

            <div class="div-proyectos">     
                <h2 class="h2-proyectos">Sistema Web Copistore</h2>
                <figure class="proyectos">
                    <img src="../imgs/trabajos/sistcopi.jpg" alt="Aplicación Copistore" />
                    <figcaption>
                        <div class="left">
                            <h3>Ver Página</h3>
                        </div>
                    </figcaption>
                    <div class="center">
                        <i class="icon icon-forward"></i>
                    </div>
                    <a href="#"></a>
                </figure>
            </div>
            
            <div class="div-proyectos"> 
                <h2 class="h2-proyectos">Ciudadanía Sefardí</h2>
                <figure class="proyectos">
                    <img src="../imgs/trabajos/ciudadania.jpg" alt="Página web Ciudadanía sefardí" />
                    <figcaption>
                        <div class="left">
                            <h3>Ver Página</h3>
                        </div>
                    </figcaption>
                    <div class="center">
                        <i class="icon icon-forward"></i>
                    </div>
                    <a href="http://www.ciudadaniasefaradi.com.ar/" target="_blank"></a>
                </figure>
            </div>
        </div>

    </section>

    <?php include '../whatsapp.php'; ?>

    <script>
    
        const texto_compatibilidad = document.getElementById('maquina-Escribir1');
        const texto_elegancia = document.getElementById('maquina-Escribir2');
        const texto_detalle = document.getElementById('maquina-Escribir3');
        
        const maquinaEscribir1 = (text = '', tiempo = 200, etiqueta = '') => {
            let arrayDeCaracteres = text.split('');
            etiqueta.innerHTML = '';
            let i = 0;
            let j = text.length;
            let escribir = setInterval(function() {
                if ( i === arrayDeCaracteres.length) {
                    etiqueta.innerHTML = text.substring(0, j); // subtring = muestra una parte de texto, desde la posicion 0 hasta 'j'
                    j--;
                    if ( j === 0 ) {
                        etiqueta.innerHTML = '';
                        i = 0;
                        j = text.length;
                    }
                } else {
                    etiqueta.innerHTML += arrayDeCaracteres[i];
                    i++;
                }
            }, tiempo)
        }
        
        const maquinaEscribir2 = (text = '', tiempo = 200, etiqueta = '') => {
            let arrayDeCaracteres = text.split('');
            etiqueta.innerHTML = '';
            let i = 0;
            let j = text.length;
            let escribir = setInterval(function() {
                if ( i === arrayDeCaracteres.length) {
                    etiqueta.innerHTML = text.substring(0, j); // subtring = muestra una parte de texto, desde la posicion 0 hasta 'j'
                    j--;
                    if ( j === 0 ) {
                        etiqueta.innerHTML = '';
                        i = 0;
                        j = text.length;
                    }
                } else {
                    etiqueta.innerHTML += arrayDeCaracteres[i];
                    i++;
                }
            }, tiempo)
        }
        
        const maquinaEscribir3 = (text = '', tiempo = 200, etiqueta = '') => {
            let arrayDeCaracteres = text.split('');
            etiqueta.innerHTML = '';
            let i = 0;
            let j = text.length;
            let escribir = setInterval(function() {
                if ( i === arrayDeCaracteres.length) {
                    etiqueta.innerHTML = text.substring(0, j); // subtring = muestra una parte de texto, desde la posicion 0 hasta 'j'
                    j--;
                    if ( j === 0 ) {
                        etiqueta.innerHTML = '';
                        i = 0;
                        j = text.length;
                    }
                } else {
                    etiqueta.innerHTML += arrayDeCaracteres[i];
                    i++;
                }
            }, tiempo)
        }
        
        maquinaEscribir1("  Compatibilidad  ", 350, texto_compatibilidad);
        maquinaEscribir2("  Elegancia  ", 350, texto_elegancia);
        maquinaEscribir3("  Detalle  ", 350, texto_detalle);
    
    </script>

    <?php include '../footer.php'; ?>