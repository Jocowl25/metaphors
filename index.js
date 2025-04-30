let images=document.querySelectorAll('.image')
let question=document.querySelector(".question")
let fetus=document.querySelector(".fetus")
let difference=0
let main=true
let hover=-1;
requestAnimationFrame(reset)
function reset(){
    const angle=0.628319
    const r=250
    images.forEach((img,i)=>{
        img.style.top=Math.sin(angle*(i+difference))*r+((window.innerHeight/2)-(img.height/4)-35)+"px"
        img.style.left=Math.cos(angle*(i+difference))*r+((window.innerWidth/2)-(img.width/4)-35)+"px"
        if(i==hover){
            fetus.style.maskPosition=`${img.style.left} ${img.style.top}`
        }
    })
    difference+=0.005
    if(main){
    requestAnimationFrame(reset)
    }
}
images.forEach((img,i)=>{
    img.addEventListener("click",()=>{
        ///wdertyui
    })
    img.addEventListener("mouseover",()=>{
        hover=i
        img.style.opacity=0;
        fetus.style.display="block"
        fetus.style.maskImage=`url(${img.src})`
        fetus.style.maskSize=img.width+"px"
        fetus.style.maskPosition=`${img.style.left} ${img.style.top}`
        fetus.style.maskRepeat="no-repeat"
    })
    img.addEventListener("mouseout",()=>{
        fetus.style.display="none"
        img.style.opacity=100;
    })
})


question.addEventListener("mouseover",()=>{
    hover=-1
    question.style.opacity=0;
    fetus.style.display="block"
    fetus.style.maskImage=`url(${question.src})`
    fetus.style.maskSize=question.width+"px"
    fetus.style.maskPosition="center"
    fetus.style.maskRepeat="no-repeat"
})
question.addEventListener("mouseout",()=>{
    fetus.style.display="none"
    question.style.opacity=100;
})