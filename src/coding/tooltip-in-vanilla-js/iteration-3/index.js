// Add your javascript here
let setupTooltip=()=>{
    console.log("setting up tooltip");
    let tooltip="",
    tooltipElements= Array.from(document.querySelectorAll('.hover-reveal')),
    tooltipDiv=document.querySelector('.div-tooltip');
    
    let displayTooltip = function(event){
        tooltip=this.dataset.tooltip;
        tooltipDiv.innerHTML=tooltip;

        tooltipDiv.style.left= event.pageX+'px';
        tooltipDiv.style.top= event.pageY+'px';

        tooltipDiv.style.opactiy=1;
        tooltipDiv.style.display='block';
        
        let toolttipRect= tooltipDiv.getBoundingClientRect()
        let adjustX=0,adjiustY=0;
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