var btn=document.querySelector('button')
var h1=document.querySelector("h1")

btn.addEventListener('click',function(){
    console.log("Button clicked");

    setTimeout(function(){
        h1.innerHTML='Hello I am Harsh!'
        console.log(h1.innerHTML)
        console.log("Hellloo")
    },1000)
})


var a=0
var int=setInterval(function(){
    a++
    console.log(a);
},500)


setTimeout(() => {
    clearInterval(int)
}, 5000);