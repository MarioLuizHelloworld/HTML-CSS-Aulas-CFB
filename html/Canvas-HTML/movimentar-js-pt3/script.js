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

    // Esse clearRect foi adicionado para limpar o rastro do quadrado
    ctx.clearRect(0, 0, l_canvas, a_canvas)


    //Caso eu queira mudar a posição, basta configurar os eixos x e y
    ctx.fillStyle = '#f00'
    ctx.fillRect(px, py, l_ret, a_ret)


    //Contorno do objeto (Na realidade esse contorno é um novo quadrado, só desenhado em volta. Por isso, as coordenadas precisam ser as mesmas para se moverem juntos)
    ctx.lineWidth = 3
    ctx.stokeStyle = 'black'
    ctx.strokeRect(px, py, l_ret, a_ret)

    
    //Fazendo a movimentação com request
    px += dx
    py += dy
    
    if ((px <= 0) && (py <= 0)){
        dx = 1
        dy = 0
    }

    if ((px + l_ret >= l_canvas) && (py <= 0)){
        dx= 0
        dy= 1
    }

    if ((px + l_ret >= l_canvas) && (py + a_ret >= a_canvas)){
        dx= -1
        dy= 0
    }

    if ((px <=0) && (py + a_ret >= a_canvas)){
        dx= 0
        dy= -1
    }

    anima = requestAnimationFrame(desenha)

}


/* Segunda maneira a ser testada
if (px>249 && py==0) {
    dy=3
    dx=0
} else if (px<0 && py<1) {
    dx=3
    dy=0
} else if (py>249 && px>248) {
    dx=-3
    dy=0
} else if (px<0 && py>248) {
    dy=-3
    dx=0
}*/

desenha()