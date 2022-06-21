<?php 
    session_start();

    function test_info($datos) {
        $datos = trim($datos);
        $datos = stripcslashes($datos);
        $datos = htmlspecialchars($datos);
        
        return($datos);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $nombre = test_info($_POST['nombre']);
        $asunto = test_info($_POST['asunto']);
        $mail = test_info($_POST['mail']);
        $mensaje = test_info($_POST['mensaje']);
        $recapt = test_info($_POST['g-recaptcha-response']);
        $name_pattern = '/[a-zA-Z]\w+/';
        
        ( empty($recapt) ) ? $error = '* Complete el captcha' : false;
        ( empty($mensaje) ) ? $error = '* El mensaje no puede estar vacío' : false;
        ( empty($asunto) || strtolower($asunto) === 'asunto' ) ? $error = '* Por favor, incluya un asunto' : false;
        ( !filter_var($mail, FILTER_VALIDATE_EMAIL) ) ? $error = '* Formato inválido de e-mail' : false;
        ( empty($mail) ) ? $error = '* Debe completar el mail' : false;
        ( empty($nombre) ) ? $error = '* No ha incluído su nombre' : false;
        ( !preg_match($name_pattern, $nombre) ) ? $error = '* Solo letras admitidas' : false;

        if (!isset($error)) {

            /* send email to mfgweb */
            // $mailDestino = 'contacto@mfgweb.com.ar';
            $mailDestino = 'javiergamboa91@gmail.com';
            
            // if ($asunto === 'Presupuesto') {
            //     // $mailDestino = 'contacto@mfgweb.com.ar';
            //     $mailDestino = 'javiergamboa91@gmail.com';
            // }
            // else if ($asunto === 'Hosting') {
            //     // $mailDestino = 'contacto@mfgweb.com.ar';
            //     $mailDestino = 'javiergamboa91@gmail.com';
            // }

            $mensaje = wordwrap($mensaje, 120);
            $mensaje_presentado = 'De:  ' . $nombre . "\r\n" . 'Asunto:  ' . $asunto . "\r\n" . 'E-Mail:  ' . $mail . "\r\n" . 'Mensaje:' . "\r\n" . $mensaje;

            $cabeceras = 'From: Usuario MFGWeb' . "\r\n";
            $cabeceras.= 'Reply-To: ' . $mail . "\r\n";
            $cabeceras.= 'X-Mailer: PHP/' . phpversion() .  "\r\n";
            $cabeceras.= 'Content-Type: text/html; charset=ISO-8859-1' . "\r\n";

            // $cabeceras = 'From: Usuario MFGWeb' . "\r\n" . 'Reply-To: ' . $mail . "\r\n" . 'X-Mailer: PHP/' . phpversion();
            
            $sendEmailToMfg = mail($mailDestino, $nombre . ', ' . $asunto, $mensaje_presentado, $cabeceras);
            ( !$sendEmailToMfg ) ? $error = '* Se encontraron problemas enviando el mensaje' : false;

            /* send email to user */
            $cabecerasUsuario = 'From: MFG Web <contacto@mfgweb.com.ar>' . "\r\n";
            $cabecerasUsuario.= 'Reply-To: contacto@mfgweb.com.ar' . "\r\n";
            $cabecerasUsuario.= 'X-Mailer: PHP/' . phpversion();
            $cabecerasUsuario.= 'Content-Type: text/html; charset=ISO-8859-1' . "\r\n";
            
            $mensaje_usuario = '<html>';
            $mensaje_usuario.= '<style> * { padding: 0; margin: 0; font-family: arial, sans-serif; font-size: 16px; box-sizing: border-box; }</style>';
            $mensaje_usuario.= '<body style="color: #333;">';
            $mensaje_usuario.= '<div style="width: 100%; background-color: #1a1a1a;"><img src="http://www.mfgweb.com.ar/imgs/mail/logo-sm.png" style="width: 100%; max-width: 300px;"/></div>';
            $mensaje_usuario.= '<h2 style="width: 100%; padding: 20px; background-color: rgb(80, 122, 69); color: #fff; font-weight: bold; ">Su mensaje ha sido recibido.</h2>';
            $mensaje_usuario.= '<div style="width: 100%; padding: 20px;">';
            $mensaje_usuario.= '<p style="margin: 10px 0;">¡Gracias por contactarse con nosotros! Le brindaremos la respuesta a la brevedad.</p>';
            $mensaje_usuario.= '<p style="margin: 10px 0;">Si ha recibido este mail y no ha sido quien lo envi&oacute;, le pedimos tenga la amabilidad de reenviarlo a nuestra casilla: <span style="text-decoration: none; border: none; color: rgb(80, 122, 69);">contacto@mfgweb.com.ar</span></p>';
            $mensaje_usuario.= '<p style="margin: 10px 0;">Por favor, no responda a este mail. Para más información lo invitamos a visitar nuestra web <a href="http://www.mfgweb.com.ar" style="text-decoration: none; border: none; color: rgb(80, 122, 69);">www.mfgweb.com.ar</a></p>';
            $mensaje_usuario.= '</div>';
            $mensaje_usuario.= '</body>';
            $mensaje_usuario.= '</html>';
            
            $sendEmailToUser = mail($mail, 'Mensaje recibido', $mensaje_usuario, $cabecerasUsuario);
            ( !$sendEmailToUser ) ? $error = '* Se encontraron problemas enviando el mensaje de recibido' : false;

            if ( !isset($error) ) {
                
                $_SESSION['exito'] = 'Se ha enviado su mensaje. ¡Gracias por contactarse!';
                header('Location: contacto.php');
                
                die();
                
            }
        }
    }
   
    $titulo = 'Contacto || MFG Web';
    $contenido = 'Contactános por cualquier consulta que tengas';
    $keywords = 'contacto web, paginas web, servicios web pilar';


    include '../header.php';
?>


<body class="contacto_page">

    <!-- <section class="cuerpo cuerpo-contacto"> -->
    <section class="container-flex container">

        <h1>Contáctenos</h1>
    
        <!-- <div class="base-H1"></div> -->

        <div id="base-H1" class="base-H1">
            <span id="span_base" class="span_base"></span>
        </div>

        <p class="contacto-p">Estamos atentos a todos los mensajes. Si desea conocer más acerca de algún producto, necesita un presupuesto, desea obtener su página web o sistema, o bien tiene alguna sugerencia o reclamo, puede contactarse con nosotros a través de este medio.</p>
            
        <div id="formulario-contacto">
            <form id="formulario" name="formulario" class="formulario" method="POST"  action="<?php echo htmlentities($_SERVER['PHP_SELF']) ?>">
                <?php
                    if(isset($error) || isset($_SESSION['exito'])) :
                        
                        if (isset($error)) :
                            $estilo = 'error';
                            $resultado = $error;
                        else :
                            $estilo = 'exito';
                            $resultado = $_SESSION['exito'];
                        endif;
                ?>
                        <div id="resultado">
                            <div class="<?php echo $estilo; ?>"><?php echo $resultado; ?></div>
                        </div>
                <?php
                        unset($_SESSION['exito']);

                    endif;
                ?>
                
                <!-- GRUPO NOMBRE -->
                <div class="formulario_grupo" id="div_nombre">
                    <div class="formulario__grupo-input">
                        <input class="formulario_label formulario_input" type="text" id="nombre" name="nombre" size="40" value="<?php
                                        
                                isset($nombre) && print $nombre;
                            
                            ?>" placeholder="Nombre"/>
                    
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <!-- <p class="formulario__input-error">El nombre solo puede contener letras (con o sin acentos), números y espacios hasta 20 caracteres.</p> -->
                </div>
                
                
                <!-- GRUPO CORREO ELECTRONICO -->
                <div class="formulario_grupo" id="div_correo">
                    <div class="formulario__grupo-input">
                        <input class="formulario_label formulario_input" type="text" id="mail" name="mail" size="40" value="<?php
                        
                            isset($mail) && print $mail;

                        ?>" placeholder="E-mail"/>
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <!-- <p class="formulario__input-error">El correo solo puede contener letras, números, puntos, guiones y guión bajo hasta un máximo de 30 caracteres.</p> -->
                </div>
                
                <!-- GRUPO ASUNTO -->
                <div class="formulario_grupo" id="div_asunto">
                    <div class="formulario__grupo-input">
                        <select class="formulario_label formulario_input" id="asunto" name="asunto">
                                <?php
                                $opts = ['Elegir asunto...', 'Presupuesto', 'Reclamo', 'Consulta', 'Otros'];
                            
                                foreach ($opts as $key) :
                                
                                ( isset($asunto) && $asunto === $key ) ? $selected = 'selected' : $selected = '';
                                ?>
                                <option value="<?php echo $key; ?>" <?php echo $selected; ?>><?php echo $key; ?></option>
                                <?php
                                endforeach;
                                ?>
                        </select>
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">Se debe elegir un tipo de asunto.</p>
                </div>

                <!-- GRUPO TEXTAREA -->
                <div class="formulario_grupo" id="div_textarea">
                    <div class="formulario__grupo-input">
                        <textarea class="formulario_label formulario_input" id="mensaje" name="mensaje" maxlength="600" rows="5" cols="45" placeholder="Escriba aquí su mensaje"><?php
                            
                            isset($mensaje) && print $mensaje;
                            
                        ?></textarea>
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        
                    </div>
                    <!-- <p class="formulario__input-error">El área del texto no puede estar vacía y puede contener hasta 600 caracteres.</p> -->
                </div>
                    
                <div id="captcha_inputs-error">
                    
                    <div id="validaciones">
                        <div id="div_nombre" class="validaciones">
                            <p class="formulario__input-error">~ El nombre solo puede contener letras (con o sin acentos), números y espacios hasta 20 caracteres.</p>
                        </div>
                        
                        <div id="div_correo" class="validaciones">
                            <p class="formulario__input-error">~ El correo solo puede contener letras, números, puntos, guiones y guión bajo hasta un máximo de 30 caracteres.</p>
                        </div>
                        
                        <div id="div_textarea" class="validaciones">
                            <p class="formulario__input-error">~ El área del texto no puede estar vacía y puede contener hasta 600 caracteres.</p>
                        </div>
                    </div>
                    
                    <div id="captcha">
                        <div class="g-recaptcha" data-sitekey="6LeAwEwUAAAAAPLV0cRPC7LhGfNYRa52A9YxSXzs" data-theme="dark"></div>
                    </div>
                    
                </div>
                <button type="submit">Enviar consulta</button>
            </form>
		</div>
    </section>

<?php include '../whatsapp.php'; ?>

<?php include '../footer.php'; ?>
    