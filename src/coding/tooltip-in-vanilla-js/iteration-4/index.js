// Add your javascript here
(()=>{
   let setupTooltip=()=>{
    console.log("setting up tooltip");
    let tooltip="",
    tooltipElements= Array.from(document.querySelectorAll('.box')),
    tooltipDiv=document.querySelector('.div-tooltip');
    
    let displayTooltip = function(event){
        tooltip=this.dataset.tooltip;
        tooltipDiv.innerHTML=tooltip;

        tooltipDiv.style.left= event.pageX+'px';
        tooltipDiv.style.top= event.pageY+'px';

        tooltipDiv.style.opactiy=1;
        tooltipDiv.style.display='block';
        
        let toolttipRect= tooltipDiv.getBoundingClientRect()
        let adjustX=0,adjustY=0;
        console.log(toolttipRect)
         if((toolttipRect.x+toolttipRect.width)>window.innerWidth){
             adjustX=window.innerWidth-toolttipRect.width;
             tooltipDiv.style.left=adjustX+'px';
         }
        else if((toolttipRect.y+toolttipRect.height)>window.innerHeight){
            adjustY=window.innerHeight-toolttipRect.height;         }
            tooltipDiv.style.top=adjustY+'px';

    }
    let hideTooltip=()=>{
        tooltipDiv.style.opactiy=0;
        tooltipDiv.style.display='none';
    }
    tooltipElements.forEach((elem)=>{
        elem.addEventListener("mouseenter",(e)=>{
            displayTooltip.call(elem,e);
           
        })
        elem.addEventListener("mouseleave",()=>{
            hideTooltip();
        })
    })
    
}
setupTooltip();
console.log("setup button")
let interval;
let allBoxes= Array.from(document.querySelectorAll('.box'))
let currentBox;


 window.start=function(){
           currentBox=document.querySelector('.pawn')

     console.log("start clicked")
     if(currentBox===allBoxes[allBoxes.length-1]){
         return;
     }
     else{
         currentBox.classList.remove('pawn');
         currentBox.nextElementSibling.classList.add('pawn');
     }
 }
 window.play=function(){
     interval=setInterval(start,400);
 }
 window.myStop=function(){
     console.log("stop")
     clearInterval(interval)
 }
 window.moveToTarget=function(e){
     console.log(e)
     currentBox=document.querySelector('.pawn')
     clearInterval(interval)
     currentBox.classList.remove('pawn')
     e.target.classList.add('pawn')
 }
 
 


})()
