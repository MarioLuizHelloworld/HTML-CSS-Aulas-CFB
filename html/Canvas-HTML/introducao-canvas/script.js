var canvas = document.getElementById("desenho1")
var ctx = canvas.getContext('2d')
var px = 50
var py = 50

/*ctx.fillStyle = '#0f0'
ctx.fillRect(0, 0, 100, 100)

ctx.fillStyle = "rgba(255,0,0,0.5)"
ctx.fillRect(50, 50, 100, 100)*/

//fillrect desenha um quadrado/retangulo preenchido.

//rect é o comando pra desenhar só a borda, não aparece só inserindo um fill() Assim:

/*ctx.fillStyle = "rgba(0,0,0,0.8)"
ctx.rect(50, 50, 200, 10)
ctx.fill()*/

//Se colocar um fill e tiver dois comandos rect, ele irá colorir tudo com a cor do ultimo filstyle, msm q sejam cores diferentes.


//clearRect limpa um determinado espaço e tbm move meu desenho, basta colocar coordenadas para isso. EX:

ctx.fillStyle ="#00f"
ctx.rect(px,py,200,200)
ctx.fill()
ctx.clearRect(50,50,100,100)