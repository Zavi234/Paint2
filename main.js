Canvas=document.getElementById("myCanvas");
var ctx=Canvas.getContext("2d")

var color="black";

var wl=2;

var mouseevent="empty";

var lpofmx, lpofmy 

Canvas.addEventListener("mousedown", mymousedown)

    function mymousedown(e){
        wl=document.getElementById("number_input").value;
        color=document.getElementById("color_box").value;
        mouseevent="MouseDown"
    }

Canvas.addEventListener("mouseup", mymouseup)

function mymouseup(e){
    mouseevent="MouseUp"
}

Canvas.addEventListener("mouseleave", mymouseleave)

function mymouseleave(e){
    mouseevent="MouseLeave"
}


Canvas.addEventListener("mousemove", mymousemove)

function mymousemove(p){
var cpx=p.clientX-Canvas.offsetLeft
var cpy=p.clientY-Canvas.offsetTop
if(mouseevent=="MouseDown"){
    ctx.beginPath()
    ctx.strokeStyle=color 
    ctx.lineWidth=wl
    ctx.moveTo(lpofmx,lpofmy)
    ctx.lineTo(cpx,cpy)
    ctx.stroke()
}
lpofmx=cpx
lpofmy=cpy
}