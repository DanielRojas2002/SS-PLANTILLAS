 // Boton para agregar contenido
 let btnAgregar = document.getElementById("btnAgregar");
 // Seleccion de la etiqueta main
 let main = document.getElementById("main");
 const texto = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio sequi nemo repudiandae delectus repellendus error dolorem ut quas eum minus maiores modi ducimus harum, facere dolor eligendi deleniti illum."
 let contador = 1;
 btnAgregar.addEventListener("click", ()=>{
   main.innerHTML += `<p>${contador} ${texto}</p><br>`;
   contador += 1;
 });
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