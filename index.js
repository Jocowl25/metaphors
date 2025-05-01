let images=document.querySelectorAll('.image')
let para=document.querySelectorAll('p')
let question=document.querySelector(".question")
let fetus=document.querySelector(".fetus")
let gradient=document.querySelector(".gradient")
let difference=0
let main=true
let hover=-1;
requestAnimationFrame(reset)
function reset(){
    if(main){
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
    requestAnimationFrame(reset)
    }
}
images.forEach((img,i)=>{
    img.addEventListener("click",()=>{
        ///wdertyui
    })
    img.addEventListener("mouseover",()=>{
        img.style.opacity=0
        if(main){
        hover=i
        fetus.style.display="block"
        fetus.style.maskSize=img.width+"px"
        fetus.style.maskImage=`url(${img.src})`
        fetus.style.maskPosition=`${img.style.left} ${img.style.top}`
        fetus.style.maskRepeat="no-repeat"
        }else{
        gradient.style.opacity=100;
        gradient.style.maskSize=img.width+"px"
        gradient.style.maskImage=`url(${img.src})`
        gradient.style.maskPosition=`${img.getBoundingClientRect().left}px ${img.getBoundingClientRect().top}px`
        gradient.style.maskRepeat="no-repeat"
        }
    })
    img.addEventListener("mouseout",()=>{
        fetus.style.display="none"
        img.style.opacity="100"
        gradient.style.opacity=0
    })

    img.addEventListener("click",()=>{
        gradient.style.opacity=0
        gradient.style.maskImage=``
        if(main){
        main=false;
        question.style.display="none"
        images.forEach((imge)=>imge.style.display="none")
        img.style.display="block"
        para[i].style.display="block"
        img.style.position="static";
        img.style.filter="invert(100%)";
        document.body.style.background="url('fetus.png') top/cover no-repeat"
        document.body.querySelector('h1').style.display="none"
        }else{
            document.body.querySelector('h1').style.display="block"
            document.body.style.background="linear-gradient(145deg, rgba(115, 191, 125, 1) 0%, rgba(186, 227, 184, 1) 100%)"
            main=true;
            question.style.display="block"
            img.style.position="absolute";
            img.style.filter="invert(0)";
            images.forEach((imge)=>imge.style.display="block")
            para[i].style.display="none"
            reset()
        }
    })
})


question.addEventListener("mouseover",()=>{
    if(main){
    hover=-1
    question.style.opacity=0;
    fetus.style.display="block"
    fetus.style.maskImage=`url(${question.src})`
    fetus.style.maskSize=question.width+"px"
    fetus.style.maskPosition="center"
    fetus.style.maskRepeat="no-repeat"
    }else{
        question.style.opacity=0
        gradient.style.opacity=100;
        gradient.style.maskSize=question.width+"px"
        gradient.style.maskImage=`url(${question.src})`
       gradient.style.maskPosition=`${question.getBoundingClientRect().left}px ${question.getBoundingClientRect().top}px`
        gradient.style.maskRepeat="no-repeat"
    }
})
question.addEventListener("mouseout",()=>{
    fetus.style.display="none"
    question.style.opacity=100;
    gradient.style.opacity=0
})

question.addEventListener("click",()=>{
    let i=10
    gradient.style.opacity=0
    gradient.style.maskImage=``
    if(main){
    main=false;
    images.forEach((imge)=>imge.style.display="none")
    para[i].style.display="block"
    question.style.filter="invert(100%)";
    document.body.style.background="url('fetus.png') top/cover no-repeat"
    document.body.querySelector('h1').style.display="none"
    fetus.style.display="none"
    question.style.opacity=0
        gradient.style.opacity=100;
        gradient.style.maskSize=question.width+"px"
        gradient.style.maskImage=`url(${question.src})`
       gradient.style.maskPosition=`${question.getBoundingClientRect().left}px ${question.getBoundingClientRect().top}px`
        gradient.style.maskRepeat="no-repeat"
    }else{
        document.body.querySelector('h1').style.display="block"
        document.body.style.background="linear-gradient(145deg, rgba(115, 191, 125, 1) 0%, rgba(186, 227, 184, 1) 100%)"
        main=true;
        question.style.display="block"
        question.style.filter="invert(0)";
        images.forEach((imge)=>imge.style.display="block")
        para[i].style.display="none"
        gradient.style.opacity="0"
        fetus.style.maskPosition=`${question.getBoundingClientRect().left}px ${question.getBoundingClientRect().top}px`
        hover=-1
    question.style.opacity=0;
    fetus.style.display="block"
    fetus.style.maskImage=`url(${question.src})`
    fetus.style.maskSize=question.width+"px"
    fetus.style.maskPosition="center"
    fetus.style.maskRepeat="no-repeat"
        reset()
}
})