var box = document.querySelector('#box')
var body  = document.querySelector('body')
var h1 = document.querySelector('h1')

body.addEventListener('mousemove' , function(dets){

    box.style.left = dets.x + 'px'
    box.style.top = dets.y + 'px'
    
})

h1.addEventListener('mouseenter', function(){
    box.style.scale = 2
})

h1.addEventListener('mouseleave' , function(){
    box.style.scale = 1
})