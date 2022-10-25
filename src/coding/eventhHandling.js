// demonstrate event bubbling and capturing
//propogation cycle starts from top for capturing and bottom for bubbling

document.getElementById('grandparent').addEventListener('click',(e)=>{
    console.log('this is grandpa')
},true)

document.getElementById('parent').addEventListener('click',(e)=>{
    console.log('this is parent')

},false)
document.getElementById('child').addEventListener('click',(e)=>{
    console.log('this is child')

},true)

// use e.stopPropagation() to start stopPropagation
//if clicked on child it prints grandpa->child->parent