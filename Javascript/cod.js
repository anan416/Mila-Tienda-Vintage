var imagen = document.querySelector(".cambio");

function abrir1(){
    if (document.querySelector(".contenido1").style.display == "none"){
        document.querySelector(".contenido1").style.display = "inline";
        document.querySelector(".contenido1").style.height = "190px";
    }
    else{
        document.querySelector(".contenido1").style.display = "none";
        document.querySelector(".contenido1").style.height = "0px";
    }
}

function abrir0(){
    if (document.querySelector(".contenido0").style.display == "none"){
        document.querySelector(".contenido0").style.display = "inline";
        document.querySelector(".contenido0").style.height = "190px";
    }
    else{
        document.querySelector(".contenido0").style.display = "none";
        document.querySelector(".contenido0").style.height = "0px";
    }
}

function responsivo(){
    if (document.querySelector(".responsive").style.display == "flex"){
        document.querySelector(".responsive").style.display = "none";
    }
    else{
        document.querySelector(".responsive").style.display = "flex";
    }
}

function imagen1(){
    imagen.src = "../Imagenes/saconaturalm1.jpeg";
}

function imagen2(){
    imagen.src = "../Imagenes/saconaturalm2.jpeg";
}

function imagen3(){
    imagen.src = "../Imagenes/saconaturalm3.jpeg";
}