

var imagenORIGINAL = document.getElementById("grande");



function cambiarImagen1(){
    
    var imagenGrande = document.getElementById("grande");
    const imagen=document.getElementById("1")
    imagenGrande.src = imagen.src;
    imagen.src=imagenORIGINAL.src
    
    
}

function cambiarImagen2(){
    var imagenGrandeOrginal = document.getElementById("grande");
    var imagenGrande = document.getElementById("grande");
    const imagen=document.getElementById("2")
    imagenGrande.src = imagen.src;
    imagen.src=imagenGrandeOrginal.src
}

function cambiarImagen3(){
    var imagenGrandeOrginal = document.getElementById("grande");
    var imagenGrande = document.getElementById("grande");
    const imagen=document.getElementById("3")
    imagenGrande.src = imagen.src;
    imagen.src=imagenGrandeOrginal.src
}

function cambiarImagen4(){
    var imagenGrandeOrginal = document.getElementById("grande");
    var imagenGrande = document.getElementById("grande");
    const imagen=document.getElementById("4")
    imagenGrande.src = imagen.src;
    imagen.src=imagenGrandeOrginal.src
}

