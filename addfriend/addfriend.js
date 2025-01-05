var btn = document.querySelector('button')
var img = document.querySelector('img')



btn.addEventListener('click',function(){

     btn.innerHTML = 'Request Sending...'
     btn.style.backgroundColor = 'yellow'
     img.style.borderColor = 'yellow'

     setTimeout(() => {

        btn.innerHTML = 'Remove Friend'
        btn.style.backgroundColor = 'red'
        img.style.borderColor = 'green'
        
     }, 3000);


})