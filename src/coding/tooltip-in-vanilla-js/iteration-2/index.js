let setuptooltip= function(){
    console.log("setup tooltip")
    let tooltip="",
    tooltipDiv= document.querySelector('.div-tooltip'),
    tooltipElements= Array.from(document.querySelectorAll('.hover-reveal')),
    fadeOutTimer;
    console.log(tooltipElements);
    
    let displayToolip=function(e){
        tooltip=this.dataset.tooltip;
        tooltipDiv.innerHTML=tooltip;
        tooltipDiv.style.top=e.pageY+'px';
        tooltipDiv.style.left=e.pageX+'px';
        fadeIn(tooltipDiv);
                tooltipDiv.style.display='block';

        console.log("tootlipDiv",tooltipDiv.getBoundingClientRect())
        
        //get bounding rect
        let tooltipcoOrdinates= tooltipDiv.getBoundingClientRect();
        console.log(tooltipcoOrdinates)
        let coOrdinatesX=tooltipcoOrdinates.x;
        let coOrdinatesY=tooltipcoOrdinates.y;
        let adjustX;
        let adjustY;
        console.log(window.innerWidth);
        console.log(window.innerHeight);
        if((tooltipcoOrdinates.width+tooltipcoOrdinates.x)>window.innerWidth){
            console.log("out of x",tooltipcoOrdinates.width+tooltipcoOrdinates.x);
            adjustX= tooltipcoOrdinates.width-50;
            tooltipDiv.style.left= adjustX+'px';
        }
        else if((tooltipcoOrdinates.height+tooltipcoOrdinates.y)>window.innerHeight){
            console.log("out of y");
            adjustY= tooltipcoOrdinates.height-5;
            tooltipDiv.style.top=adjustY+'px';


        }

        // if(coOrdinatesX+pageX.x>window.innerWidth)
        console.log()
    }
    let fadeOut= function(element){
        let op=1;
        //op is closure variable.
        if(!fadeOutTimer){
                let fadeOutTimer=setInterval(function(){
                element.style.opacity=op;
                if(op<=0.1){                 
                clearInterval(fadeOutTimer)
                fadeOutTimer=null;
                element.style.opacity=0;
                element.style.display='none'
                }
                op-=op*0.1;

                },10)
        }
        
    } 
    let fadeIn= function(element){
        let op=0.1;
        //op is closure variable.
        let timer=setInterval(function(){
            element.style.opacity=op;
            if(op>=1){                 
            clearInterval(timer);
            element.style.opacity=1;
            element.style.display='block'
            }
            op+=op*0.1;
        },10)
    } 
    tooltipElements.forEach(function(elem){
        let fadeInTimer;
        elem.addEventListener("mouseenter",function(e){
            // let that=this;
            fadeInTimer=setTimeout(function(){
            // displayToolip(e,this)
            displayToolip.call(elem,e);
            },400)
        })
        elem.addEventListener("mouseleave",function(e){
        clearTimeout(fadeInTimer);
        fadeOut(tooltipDiv);
        })
    })
    
}
setuptooltip();