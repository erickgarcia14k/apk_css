const caja = document.querySelector("#caja");
const texto2 = document.querySelector("#texto2");
const tamaño = document.querySelector("#tamaño");
const tipo = document.querySelector("#tipo");
const image = document.querySelector("#image");

//creando un evento clic
//cambiarColor es una funcion
caja.addEventListener("click" , cambiarColor);
texto2.addEventListener("click" , colorTexto);
tamaño.addEventListener("click" , tamañoLetra);
image.addEventListener("click" , tipoImage);

/*metodo toggle , cambia entre otros metodos como remove o add*/
function cambiarColor(){
    caja.classList.toggle("bg-success");
    caja.classList.toggle("bg-danger");
}
function colorTexto(){  
    texto2.classList.toggle("text-danger");  
    
}
function tamañoLetra(){  
    tamaño.classList.toggle("fs-4");  
    tamaño.classList.toggle("text-danger");      
}

function tipoImage(){  
    image.classList.toggle("w-75");  
      
}



