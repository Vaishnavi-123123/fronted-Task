var btn = document.querySelector('button')

btn.addEventListener('click', function(){

    btn.innerHTML  = 'Sending...'
    btn.style.color = 'yellow'

    setTimeout(function(){
        btn.innerHTML = 'Friend'
        btn.style.color = 'green'
    },3000)
    

})
