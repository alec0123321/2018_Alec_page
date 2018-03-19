// var canvas = document.getElementById("mycanvas")
// var ctx = canvas.getContext("2d")
// var blockWidth = 200
// const PI = Math.PI
// const PI2 = Math.PI*2
//
// canvas.width = blockWidth*3
// canvas.height = blockWidth*3
//
// var color={
//   red: "#F74456",
//   white: "#fff",
//   yellow: "#F1DA56",
//   blue: "#036FAF"
// }
// function drawBlock(pos,bgColor,draw,time){
//   ctx.save()
//   ctx.translate(pos.x*(blockWidth),pos.y*(blockWidth-1) )
//   ctx.fillStyle=bgColor
//   ctx.fillRect(pos.x,pos.y,blockWidth+1,blockWidth+1)
//   ctx.translate(100,100)
//   draw()
//
//   ctx.restore()
// }
var percent = 0
var sec = 9

var timer = setInterval(function(){
  $(".bar").css("width",percent+"%")
  percent+=1
  if (percent>=100){
    $(".pageLoading").addClass("complete")
    clearInterval(timer)
  }
},20)
