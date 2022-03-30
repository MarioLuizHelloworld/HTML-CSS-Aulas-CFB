let anima
var px = 0
var py = 0

function desenha(){
var canvas = document.getElementById("desenho1")
var ctx = canvas.getContext('2d')

// Esse clearRect foi adicionado para limpar o rastro do quadrado
ctx.clearRect(0,0,500,500)


//Caso eu queira mudar a posição, basta configurar os eixos x e y
ctx.fillStyle ='#f00'
ctx.fillRect(px,py,50,25)


//Fazendo a movimentação com request
px++
anima=requestAnimationFrame(desenha)


}

desenha()