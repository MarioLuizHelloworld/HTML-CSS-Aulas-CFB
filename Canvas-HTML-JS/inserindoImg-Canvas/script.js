let canvas = document.getElementById("desenho1")
let ctx = canvas.getContext('2d')

function desenha() {

   /*let foguete=new Image()
   foguete.src="img/foguete.png"
   foguete.onload=()=>{
      ctx.drawImage(foguete,0,0,0,0) //eixo x,y, largura altura.
   
   }*/
//Posso usar ao inves de foguete.onload acima, =   foguete.addEventListener('load',()=>{ctx.drawImage(foguete,0,0)})

let cores=new Image()
cores.src="img/cores.jpg"
cores.onload=()=>{

   /*Para selecionar parte da imagem e ampliar se quiser.
   Imagem,XiniRecorte,YiniRecorte,LargRecorte,AltRecorte,posX,posY,Largimagem,Altimagem = os 4 ultimos parametros se referem a posicao e tamanho da imagem. Os 4 primeiros sao referentes ao recorte na imagem.
   */
   ctx.drawImage(cores,40,0,30,10,0,0,25,15) 

   // 0 marrom, 40 vermelho, 80 amarelo, 120 azul, 160 cinza
}


}

desenha()