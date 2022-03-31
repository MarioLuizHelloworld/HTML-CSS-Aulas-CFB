let canvas = document.getElementById("desenho1")
let ctx = canvas.getContext('2d')

function desenha() {

   let bird = new Image()
   let posIniX = 0
   let numSprite = 0
   let Limagem = 0
   let largSprite = 0
   let numSpries = 4

   bird.src = "img/bird.png"
   bird.onload = () => {
      largSprite= bird.width/numSpries
      altSprite=bird.height/numSpries
      posIniX=largSprite*numSprite
      /*Para selecionar parte da imagem e ampliar se quiser.
      Imagem,XiniRecorte,YiniRecorte,LargRecorte,AltRecorte,posX,posY,Largimagem,Altimagem = os 4 ultimos parametros se referem a posicao e tamanho da imagem. Os 4 primeiros sao referentes ao recorte na imagem.
      */
      ctx.drawImage(bird, posIniX, 0, largSprite, altSprite, 0, 0, largSprite, altSprite)

      let anima=setInterval(() => {
         ctx.clearRect(0,0,300,00)
         numSprite++
         if (numSprite > 6)
            numSprite = 0
         posIniX = largSprite * numSprite
         ctx.drawImage(bird, posIniX, 0, largSprite, altSprite, 0, 0, largSprite, altSprite)

      }, 250);
      // 0 marrom, 40 vermelho, 80 amarelo, 120 azul, 160 cinza
   }


}

desenha()