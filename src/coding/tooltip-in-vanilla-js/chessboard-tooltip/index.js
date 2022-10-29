( function(){
        const data=  [{"id":"sign-up-form","name":"Sign-Up Form","category":"HTML"},{"id":"item-cart","name":"Item Cart","category":"HTML"},{"id":"spaghetti-recipe","name":"Spaghetti Recipe","category":"HTML"},{"id":"blog-post","name":"Blog Post","category":"HTML"},{"id":"rainbow-circles","name":"Rainbow Circles","category":"CSS"},{"id":"navbar","name":"Navbar","category":"CSS"},{"id":"pig-emoji","name":"Pig Emoji","category":"CSS"},{"id":"purchase-form","name":"Purchase Form","category":"CSS"},{"id":"algoexpert-products","name":"AlgoExpert Products","category":"CSS"},]

    function createElement(item){
            console.log(item?.name);
            const square= document.createElement('div');
            square.classList.add('box');
            square.dataset.tooltip=item?.name;
            square.textContent=item?.name;
            return square;
    }
    function addButton(name, clickFunction){
        const button= document.createElement('button');
        button.addEventListener("click",clickFunction);
        button.textContent=name;
        return button;
    }
    function createChessboard(){
        const rootDiv= document.querySelector('#root');
        let platBtn= addButton("start",start);
        rootDiv.append(platBtn);
        let stopBtn= addButton("stop",stop)
            rootDiv.append(stopBtn);
        let tooltipDiv= document.createElement('div');
        tooltipDiv.classList.add('div-tooltip');
        const containerDiv=document.createElement('div');
        containerDiv.classList.add('container');
        containerDiv.addEventListener("click",moveToTarget);
        let box;
        data.forEach((item)=>{
            box=createElement(item);
            containerDiv.append(box);
        })    
        containerDiv.firstChild.classList.add('changeColor');
        containerDiv.append(tooltipDiv);
        rootDiv.append(containerDiv);
    }
    let allBoxes=document.querySelectorAll('box');
    let myInterval;
    let currentBox;
    let tooltipTimer;
    window.play=function(){
        currentBox= document.querySelector('.changeColor');
        if(currentBox===allBoxes[allBoxes.length-1]){
            return;
        }
        else{
            currentBox.classList.remove('changeColor');
            currentBox.nextElementSibling.classList.add('changeColor')
        }
    }
    const start=function (){
        myInterval= setInterval(play,400)
    }
    const stop=function(){
        clearInterval(myInterval);
    }
    window.moveToTarget=function (e){
        clearInterval(myInterval);
        currentBox=document.querySelector('.changeColor');
        currentBox.classList.remove('changeColor');
        e.target.classList.add('changeColor');
    }
    let tooltipDiv,tooltip;
    const setupTooltip= function (){
         tooltip="";
         tooltipDiv= document.querySelector('.div-tooltip');
        let tooltipElements= Array.from(document.querySelectorAll('.box'));
        tooltipElements.forEach((element)=>{
            element.addEventListener("mouseenter",(e)=>{
                tooltipTimer=setTimeout(()=>{
                showTooltip.call(element,e);
                })
                
            });
            element.addEventListener("mouseleave",hideTooltip);
        })
        
        
    }
    const showTooltip= function(event){
        tooltip= this.dataset.tooltip;
        tooltipDiv.innerHTML=tooltip;
        tooltipDiv.style.opacity=1;
        tooltipDiv.style.display='block'
        tooltipDiv.style.left=event.pageX+'px';
        tooltipDiv.style.top=event.pageY+'px';
                    
        let initialOP=0.1;
        let timer= setInterval(()=>{
            tooltipDiv.style.opacity=initialOP;
            if(initialOP>=1){
                clearInterval(timer)
                tooltipDiv.style.opacity=1;
                tooltipDiv.style.display='block';
            }
            else{
                initialOP+=0.1*initialOP;
            }
        },10)
        
        
        
        let tooltipRect= tooltipDiv.getBoundingClientRect()
        let adjustX=0,adjustY=0;
        if((tooltipRect.width+tooltipRect.x)>window.innerWidth){
            adjustX=window.innerWidth-(tooltipRect.width)
            tooltipDiv.style.left=adjustX+'px';

        }
        else if((tooltipRect.height+tooltipRect.y)>window.innerHeight){
            adjustY=window.innerHeight-tooltipRect.height;
            tooltipDiv.style.top=adjustY+'px';
            tooltipDiv.style.top=adjustY+'px';


        }
        
        console.log(tooltipRect);

    }
    const hideTooltip= function(){
        console.log("hide")
        clearTimeout(tooltipTimer);
         tooltipDiv.style.opacity=0;
        tooltipDiv.style.display='none';
    }


    createChessboard();
    setupTooltip();
    })()