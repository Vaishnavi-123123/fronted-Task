var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var growth = document.querySelector('#growth')
var message = document.querySelector('h2')
 var grow = 0

 var num = Math.floor(Math.random()*100)
 
 
btn.addEventListener('click', function(){

   var growinterval = setInterval(() => {
        
        grow++;
        h1.innerHTML = grow + '%'
        growth.style.width = grow + '%'
        
    }, num)
    
    setTimeout(() => {
        clearInterval(growinterval)

        btn.innerHTML = 'Downloded'
        btn.style.opacity = 0.4
        btn.style.pointerEvents = 'none'
        message.innerHTML = `Your file is downloaded in ${num/10} seconds`
        
    },num*100);
    
})