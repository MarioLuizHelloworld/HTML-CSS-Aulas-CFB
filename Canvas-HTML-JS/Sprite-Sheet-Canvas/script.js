let canvas = document.getElementById("desenho1")
let ctx = canvas.getContext('2d')

function desenha() {

   let cores = new Image()
   let posIniX = 0
   let numSprite = 0
   let Limagem = 0
   let largSprite = 0
   let numSpries = 5

   cores.src = "img/cores.jpg"
   cores.onload = () => {
      Limagem = cores.width
      largSprite = Limagem / numSpries
      posIniX = largSprite * numSprite
      /*Para selecionar parte da imagem e ampliar se quiser.
      Imagem,XiniRecorte,YiniRecorte,LargRecorte,AltRecorte,posX,posY,Largimagem,Altimagem = os 4 ultimos parametros se referem a posicao e tamanho da imagem. Os 4 primeiros sao referentes ao recorte na imagem.
      */
      ctx.drawImage(cores, posIniX, 0, largSprite, 10, 0, 0, 25, 15)


      let anima = setInterval(() => {
         numSprite++
         if (numSprite > 4)
            numSprite = 0
         posIniX = largSprite * numSprite
         ctx.drawImage(cores, posIniX, 0, largSprite, 10, 0, 0, 25, 15)

      }, 1000);
      // 0 marrom, 40 vermelho, 80 amarelo, 120 azul, 160 cinza
   }


}

desenha()