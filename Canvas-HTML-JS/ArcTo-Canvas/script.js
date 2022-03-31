let canvas = document.getElementById("desenho1")
let ctx = canvas.getContext('2d')
let anima

function desenha() {

   ctx.clearRect(0, 0, 500, 500)

   //x1, y1, y2, raio   
   ctx.beginPath()
   ctx.moveTo(0, 0)
   ctx.lineTo(100, 50)
   ctx.arcTo(250,180,300,0,120)
   ctx.lineTo(300,0)
   ctx.closePath()
   ctx.stroke()

}
desenha()



//ctx.moveTo(0,0)
//ctx.lineTo(150,100)
//ctx.lineTo(300,0)
//ctx.stroke()