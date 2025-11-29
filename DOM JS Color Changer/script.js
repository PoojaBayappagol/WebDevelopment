var arr=[
    {
        team:'KKR',
        primary:'purple',
        secondary:'blue'
    },
    {
        team:'MI',
        primary:'blue',
        secondary:'gold'
    },
    {
        team:'RCB',
        primary:'red',
        secondary:'green'
    },
    {
        team:'CSK',
        primary:'yellow',
        secondary:'orange'
    },
    {
        team:'SRH',
        primary:'orange',
        secondary:'grey'
    },
    {
        team:'PKB',
        primary:'purple',
        secondary:'lightgreen'
    },
]

var btn=document.querySelector('button')
var h1=document.querySelector('h1')
var main=document.querySelector('main')

btn.addEventListener('click',function(){
    var num=Math.floor(Math.random()*arr.length)

    h1.innerHTML=arr[num].team
    h1.style.backgroundColor=arr[num].primary
    main.style.backgroundColor=arr[num].secondary
})