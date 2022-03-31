let canvas = document.getElementById("desenho1")
let ctx = canvas.getContext('2d')
let anima
// Definição tam maximo, minimo e quantidade de circulos.
let tamMax = 20
let tamMin = 10
let maxCirculos = 30

//Angulo do circulo preto no meio
let angIni = 0
let angFim = 0

function desenha() {


   ctx.clearRect(0, 0, 500, 500) //Referente ao anima ali no final, para so desenhar os 30 circulos, e depois apagar.

   // posX, posY, raio, angInicial, angFinal, sentido
   // sentido: true=horário / false:anti-horário
   //(PI/180)*ang_grau
   for (let i = 0; i < maxCirculos; i++) {
      ctx.beginPath()

      ctx.fillStyle = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')'

      ctx.arc(Math.random() * 300, Math.random() * 200, Math.random() * tamMax + tamMin, (Math.PI / 180) * 0, (Math.PI / 180) * 360, true)
      ctx.fill()
   }

   // o AngIni e Fim, fazem o circulo preto ser desenhado.
   ctx.beginPath()
   ctx.fillStyle = 'black'
   ctx.arc(150, 80, 30, (Math.PI / 180) * angIni, (Math.PI / 180) * angFim, false)
   ctx.fill()

   // Para o circulo preto ser desenhado toda vez q estiver completo.
   angFim++
   if (angFim > 360)
      angFim = 0
   anima = requestAnimationFrame(desenha)
}
desenha()