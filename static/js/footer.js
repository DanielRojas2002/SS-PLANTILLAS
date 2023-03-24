
 // Cambiar la orientacion de la flecha
 let btnFooter = document.querySelector(".btnFooter");
 let simboloFlecha = document.querySelector(".simboloFlecha");
 let flechaActual = "bi-caret-up-fill";
 let flechaVieja = "bi-caret-up-fill";
 
 btnFooter.addEventListener("click", ()=>{
   flechaActual = (flechaActual == "bi-caret-up-fill") ? "bi-caret-down-fill" : (flechaActual == "bi-caret-down-fill") ? "bi-caret-up-fill" : "";
   simboloFlecha.classList.remove(flechaVieja);
   simboloFlecha.classList.add(flechaActual);
   flechaVieja = flechaActual;
 });