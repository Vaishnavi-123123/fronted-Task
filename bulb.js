var btn = document.querySelector('button')
var box = document.querySelector('#box')


var flag = 1


btn.addEventListener('click', function(){
     if(flag===1){

     
    box.style.backgroundColor = 'yellow'

     flag = 0
     }
     else{
        box.style.backgroundColor = 'white'
        flag = 1
     }
    
})