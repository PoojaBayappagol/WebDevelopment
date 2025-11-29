var arr = [
  {
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=870&auto=format&fit=crop",
    name: "Aarvi Kumar",
    role: "Frontend Developer",
    desc: "Passionate about crafting beautiful UI experiences."
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=870&auto=format&fit=crop",
    name: "Mira Shah",
    role: "Backend Developer",
    desc: "Enjoys solving complex problems and building APIs."
  },
  {
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=870&auto=format&fit=crop",
    name: "Roshani Patil",
    role: "Full Stack Developer",
    desc: "Loves working across the stack to build scalable apps."
  }
  
];


var sum=''
arr.forEach(function(elem){
    sum=sum+`<div class="card">
            <img src="${elem.img}"
                alt="">
            <h3>${elem.name}</h3>
            <h4>${elem.role}</h4>
            <p>${elem.desc}</p>
        </div>`
})

var main=document.querySelector('main')

main.innerHTML=sum
