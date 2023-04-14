let Numero1 = Math.floor(Math.random()*10 + 1);
let userInput = 0;
let intentos = 0;
let salidas = "Genial";

function playGame(){
    userInput = parseInt(document.getElementById("text1").value);

    if(userInput !== Numero1){
        salidas= `${userInput} No es el numero a adivinar  `;
         intentos++;
    }

    if(userInput == Numero1){
        salidas= `${userInput} Geniaaaal, Haz acertadoo!! `;
        document.getElementById("display-numero").innerHTML = Numero1;
   }
     
   document.getElementById("display-resultado").innerHTML = `${salidas}. Este es el intento numero: ${intentos}`;
   document.getElementById("text1").select();
}

function resetGame(){
   Numero1= Math.floor(Math.random()*10 + 1);
   document.getElementById("display-numero").innerHTML = "?";
   document.getElementById("display-resultado").innerHTML = "A jugar!";
   document.getElementById("text1").focus();
   document.getElementById("text1").value= "";
   
}