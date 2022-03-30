let canvas = document.getElementById("desenho1")
let ctx = canvas.getContext('2d')
let anima
let dx = 1
let px = 0
let py = 10
let l_ret= 50
let a_ret= 25
let l_canvas= 300 
let a_canvas= 500
function desenha(){

// Esse clearRect foi adicionado para limpar o rastro do quadrado
ctx.clearRect(0,0,l_canvas,a_canvas)


//Caso eu queira mudar a posição, basta configurar os eixos x e y
ctx.fillStyle ='#f00'
ctx.fillRect(px,py,l_ret,a_ret)


//Fazendo a movimentação com request
px+=dx
if((px+l_ret>=l_canvas)||(px<=0)) // Reparar no l_canvas, estava dando erro qnd estava no 500.
    dx*=-1

anima=requestAnimationFrame(desenha)

}

desenha()