var img=document.querySelector('img')
var msg=document.querySelector('h2 span')

var body=document.body



img.addEventListener('mouseenter',function(){
    msg.innerHTML='Chutki se door ho jaan 🤬🤬 '

    body.style.backgroundColor='purple'
    
})

img.addEventListener('mouseleave',function(){
    msg.innerHTML='Good! ab door hi rehana 😤😤'
    body.style.backgroundColor='brown'
})