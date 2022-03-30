var i=0;
var txt="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, ipsa molestiae optio modi nulla iste. Perferendis voluptate doloribus eos odio nihil ducimus fuga deserunt facere atque? Laboriosam adipisci asperiores labore totam magni voluptatem incidunt sint magnam eos?";
// Var eu posso modificar, é a velocidade do escrito.
var vel=20;

function digitacao(){
    if(i<txt.length){
        document.getElementById("texto").innerHTML+=txt.charAt(i);
        i++;
        setTimeout(digitacao,vel);
        
        // É opcional para efeito de velocidade variavel (como se fosse uma pessoa digitando).
        vel=Math.floor(Math.random()*100);
    }
}