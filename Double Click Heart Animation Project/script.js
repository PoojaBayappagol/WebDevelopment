var img = document.querySelector('img')
var love = document.querySelector('#love')


img.addEventListener('dblclick', function () {
   love.style.opacity = 1;
   love.style.transform = 'translate(-50%,-50%) scale(2) rotate(0)'
   setTimeout(function () {
      console.log('hello guys time out chal gya')
      love.style.transform = 'translate(-50%,-550%) scale(2) rotate(0)'
   }, 800)

   setTimeout(function () {
      love.style.opacity = 0;

   }, 1000)

   setTimeout(function () {
      love.style.transform = 'translate(-50%,-50%) scale(2) rotate(-60deg)'

   }, 1200)
})