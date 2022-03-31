let canvas = document.getElementById("desenho1")
let ctx = canvas.getContext('2d')

function desenha() {

   let bird = new Image()
   let posIniX = 0
   let numSprite = 0
   let Limagem = 0
   let largSprite = 0
   let numSpries = 4
   let posX = 0
   let posY = 0
   let velocidade=5
   let cima = false, baixo = false, esquerda = false, direita = false

   bird.src = "img/bird.png"
   bird.onload = () => {
      largSprite = bird.width / numSpries
      altSprite = bird.height / numSpries
      posIniX = largSprite * numSprite
      /*Para selecionar parte da imagem e ampliar se quiser.
      Imagem,XiniRecorte,YiniRecorte,LargRecorte,AltRecorte,posX,posY,Largimagem,Altimagem = os 4 ultimos parametros se referem a posicao e tamanho da imagem. Os 4 primeiros sao referentes ao recorte na imagem.
      */
      ctx.drawImage(bird, posIniX, 0, largSprite, altSprite, posX, posY, largSprite, altSprite)

   }

   /*let anima = setInterval(() => {
      ctx.clearRect(0, 0, 300, 00)
      numSprite++
      if (numSprite > 6)
         numSprite = 0
      posIniX = largSprite * numSprite
      ctx.drawImage(bird, posIniX, 0, largSprite, altSprite, posX, posY, largSprite, altSprite)
   }, 250);*/

   const desenha = () => {
      ctx.clearRect(0, 0, 300, 00)
      ctx.drawImage(bird, posIniX, 0, largSprite, altSprite, posX, posY, largSprite, altSprite)
   }

   //[Ta dando ERRO]
   
   window.addEventListener('keydown', (event) => {
      if (event.keycode == 37) { // Esquerda
         esquerda = true
      } else if (event.keycode == 39) { // Direita
         direita = true
      }
      if (event.keycode == 38) { // Cima
         cima = true
      } else if (event.keycode == 40) { // Baixo
         baixo = true
      }
   })

   /* NAO ESTA MOVENDO COM AS TECLAS, VERIFICAR*/
   window.addEventListener('keyup', (event) => {
      if (event.keycode == 37) { // Esquerda
         esquerda = false
      } else if (event.keycode == 39) { // Direita
         direita = false
      }
      if (event.keycode == 38) { // Cima
         cima = false
      } else if (event.keycode == 40) { // Baixo
         baixo = false
      }
   })

   const game = () => {
      if (cima) {
         posY -= velocidade
      }
      if (baixo) {
         posY += velocidade
      }
      if (esquerda) {
         posX -= velocidade
      }
      if (direita) {
         posX += velocidade
      }
      requestAnimationFrame(game)
      desenha()
   }
   requestAnimationFrame(game)


}

desenha()