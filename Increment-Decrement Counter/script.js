// var h1=document.querySelector('h1')

// h1.addEventListener('click',function(){
//     h1.innerHTML="Let's Go!!!"
//     h1.style.color='red'
//     h1.style.background='royalblue'
// })


var inc=document.querySelector('#inc')
var dec=document.querySelector('#dec')
var h1=document.querySelector('h1')

var a=0

inc.addEventListener('click',function(){
    a++
    h1.innerHTML=a
}
)

dec.addEventListener('click',function(){
    a--
    h1.innerHTML=a
})