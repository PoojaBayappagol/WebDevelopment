
var grow=0

var btn=document.querySelector('button')

var h2=document.querySelector('h2')

var inner=document.querySelector('.inner')

var num=50+Math.floor(Math.random()*50)


btn.addEventListener('click',function(){
    var int=setInterval(function(){
        grow++
        h2.innerHTML=grow +'%'
        inner.style.width=grow+'%'
        

    },num);

    setTimeout(function(){
        clearInterval(int)
        
        btn.innerHTML='Downleded'
        btn.style.opacity=0.6
        console.log("Downloaded in ",num/10,' seconds.')

    },num*100);
})