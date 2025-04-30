let images=document.querySelectorAll('img')
let difference=0
let main=true
requestAnimationFrame(reset)
function reset(){
    const angle=0.628319
    const r=200
    images.forEach((img,i)=>{
        img.style.top=Math.sin(angle*(i+difference))*r+((window.innerHeight/2)-(img.height/4)-25)+"px"
        img.style.left=Math.cos(angle*(i+difference))*r+((window.innerWidth/2)-(img.width/4)-25)+"px"
    })
    difference+=0.005
    if(main){
    requestAnimationFrame(reset)
    }
}