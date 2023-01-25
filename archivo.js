var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar=document.querySelector("btn-copiar");
var muñeco = document.querySelector(".contenedor-muñeco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");


botonEncriptar.onclick=encriptar1;
botonDesencriptar.onclick=desencriptar1;
botonCopiar.onclick=copiarTexto(resultado.value);


function encriptar(){
    ocultarAdelante()
    resultado.textContent = encriptarTexto(recuperarTexto());
    document.querySelector(".area").value="";
}

function desencriptar(){
    ocultarAdelante()
    resultado.textContent = desencriptarTexto(recuperarTexto());
    document.querySelector(".area").value="";
}

function encriptar1() {
    // Obtener la frase  del textarea proporcionada por el usuario
    let frase = document.querySelector(".area").value;
    var frase2=frase;
    var frase3=frase;

    if(frase === "") {
      alert("No hay nada para Encriptar!");
      return;
    
    }
    frase2 = frase2.replace(/ai/g, "a");
    frase2 = frase2.replace(/enter/g, "e");
    frase2 = frase2.replace(/imes/g, "i");              
    frase2 = frase2.replace(/ober/g, "o");
    frase2 = frase2.replace(/ufat/g, "u");

    frase3 = frase3.replace(/a/g, "ai"   );
    frase3 = frase3.replace(/e/g, "enter");
    frase3 = frase3.replace(/i/g, "imes" );
    frase3 = frase3.replace(/o/g, "ober" );
    frase3 = frase3.replace(/u/g, "ufat" );


  
    
    if(frase === frase2){
           // Validar si la frase contiene letras mayúsculas, números, acento "´" y caracteres especiales.
          
           if (/[A-ZÁÉÍÓÚáéíóú0-9]/.test(frase)) {
            alert("No se permite letras Mayúsculas \nNúmeros  y el uso del Acento");
            document.getElementById("frase").value="";
            return;
          }

          // Valida si la frase tiene caracteres especiales ignorando los siguientes  
          if (/[^a-zA-Z0-9,\ ;\ !\ ñ\ \n . ]/g.test(frase)) {
            alert("No se permite Caracteres Especiales");
            document.getElementById("frase").value="";
            console.log("La frase tiene caracteres especiales");
            return;
          } 
          
          
          // Reemplazar las letras con las "llaves" de encriptación
          
          
          frase = frase.replace(/e/g, "enter");
          frase = frase.replace(/i/g, "imes" );
          frase = frase.replace(/a/g, "ai"   );
          frase = frase.replace(/o/g, "ober" );
          frase = frase.replace(/u/g, "ufat" );

          // Mostrar la frase encriptada en el textarea "fraseEncriptada"
          resultado.textContent = frase;
         
    }else{
          if(frase2!==frase3){
            alert("Texto ya ENCRIPTADO!");
            return;
          }
         }  
    
         ocultarAdelante();
         document.querySelector(".area").value="";
  }

  function desencriptar1() {
        
    // Obtener la frase encriptada del textarea "frase"
    let frase = document.querySelector(".area").value;
    var frase2=frase;

   
    // Reemplazar las "llaves" de encriptación con las letras originales
    
    frase = frase.replace(/enter/g, "e");
    frase = frase.replace(/imes/g, "i");
    frase = frase.replace(/ai/g, "a");              
    frase = frase.replace(/ober/g, "o");
    frase = frase.replace(/ufat/g, "u");

    // Mostrar la frase desencriptada en el textarea de "fraseEncriptada" si se cumple la condición
    if (frase2===frase){
      return;
    }else{               
        resultado.textContent = frase;
    }
  
    ocultarAdelante();
    document.querySelector(".area").value="";
}

function copiarTexto(fraseEncriptada) { 
    let textArea = document.getElementById(fraseEncriptada);
    let texto=textArea.value;           
    //document.getElementById("frase").value = "";

    
    
    if(textArea.value === "") {
            alert("No hay nada para copiar");

          
      } else {                                      
                textArea.select();
                navigator.clipboard.writeText(texto)   
                                
               
                            .then(() => {
                              document.querySelector(".area").value = texto;
                              resultado.textContent = "";
                              //document.getElementById("fraseEncriptada").value = "";
                              //alert('Texto copiado \ny a un click de DESENCRIPTAR!');
                            })
                            /*.catch(err => {
                                alert('Error al copiar texto al portapapeles: ', err);
                            });*/
             }
  }   

function recuperarTexto(){
    var area = document.querySelector(".area");
    
    return area.value;
}


function ocultarAdelante(){
    muñeco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
    
}

function encriptarTexto(mensaje){
    var texto=mensaje;
    var textoFinal="";
    

    for(var i=0; i < texto.length; i++){

        if(texto[i] =="a"){

            textoFinal= textoFinal + "ai"
        }
        else if(texto[i] =="e"){

            textoFinal=textoFinal+"enter"
        }
        else if(texto[i] =="i"){

            textoFinal=textoFinal+"imes"
        }
        else if(texto[i] =="o"){

            textoFinal=textoFinal+"ober"
        }
        else if(texto[i] =="u"){

            textoFinal=textoFinal+"ufat"
        }
        else{
            textoFinal=textoFinal+texto[i];
        }
    }
    
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto=mensaje;
    var textoFinal="";

    for(var i=0; i < texto.length; i++){

        if(texto[i] =="a"){

            textoFinal= textoFinal + "a"
            i=i+1;
        }
        else if(texto[i] =="e"){

            textoFinal=textoFinal+"e"
            i=i+4;
        }
        else if(texto[i] =="i"){

            textoFinal=textoFinal+"i"
            i=i+3;
        }
        else if(texto[i] =="o"){

            textoFinal=textoFinal+"o"
            i=i+3;
        }
        else if(texto[i] =="u"){

            textoFinal=textoFinal+"u"
            i=i+3;
        }
        else{
            textoFinal=textoFinal+texto[i];
        }
    }
    return textoFinal;
}