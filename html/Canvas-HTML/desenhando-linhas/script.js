var canvas = document.getElementById("desenho1")
var ctx = canvas.getContext('2d')
var px = 50
var py = 50

//ctx.fillRect() Essas 3 sao as que conheço
//ctx.fill()
//ctx.clearRect(50,50,100,100)

//PARA DESENHAR UMA LINHA, EU DEFINO PRIMEIRO A POSIÇÃO INICIAL COM MOVETO, DEPOIS DEFINO PARA ONDE QUERO QUE A LINHA VÁ COM LINETO, POR FIM COLOCO STROKE PARA A LINHA APARECER.

ctx.moveTo(0,0)
ctx.lineTo(250,5)
ctx.lineTo(100,25)
ctx.lineTo(300,100)
ctx.moveTo(250,5)
ctx.lineTo(200,100)
ctx.stroke()

// O SEGUNDO MOVETO E O LINETO DELE, INDICAM UMA NOVA COORDENADA DE INICIO.