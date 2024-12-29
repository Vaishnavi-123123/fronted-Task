
var btn = document.querySelector('button')
var body = document.querySelector('body')


btn.addEventListener('click', function(){
    
    var valuex= Math.random()*90
    var valuey = Math.random()*95
    var rotate = Math.random()*360
    
    var img = document.createElement('img')


    img.setAttribute('src', 'https://th.bing.com/th/id/OIP._98y-S8yevEDlAG4Tc1tywHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain')
     img.style.height = '100px';
     img.style.position = 'absolute'
     img.style.left = valuex + '%'
     img.style.top = valuey + '%'
     img.style.rotate = rotate + 'deg'
          body.appendChild(img)


}
)


