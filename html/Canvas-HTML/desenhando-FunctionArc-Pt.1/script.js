let canvas = document.getElementById("desenho1")
let ctx = canvas.getContext('2d')
let anima
let dx = 1
let dy = 0
let px = 0
let py = 0
let l_ret = 50
let a_ret = 25
let l_canvas = 300
let a_canvas = 150
function desenha() {

   // posX, posY, raio, angInicial, angFinal, sentido
   // sentido: true=horário / false:anti-horário
   //(PI/180)*ang_grau
   ctx.fillStyle='black'
   ctx.arc(50,50,50,(Math.PI/180)*0,(Math.PI/180)*90,true)
   ctx.fill()
   ctx.beginPath()
   ctx.fillStyle='#f00'
   ctx.arc(50,50,50,(Math.PI/180)*0,(Math.PI/180)*90,false)
   ctx.fill()

   //anima=requestAnimationFrame(desenha)
}
desenha()