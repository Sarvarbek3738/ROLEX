const oyquyosh = document.querySelector(".oyquyosh")
const body = document.querySelector("body")
oyquyosh.addEventListener("click" ,()=>{
    body.classList.toggle("temp")
})

const madaloynalar = document.querySelector(".madaloynalar")
const chiqish = document.querySelector(".chiqish")
chiqish.addEventListener("click",()=>{
    madaloynalar.classList.remove("active")
})


const madal = document.querySelector(".madal")
madal.addEventListener("click", ()=>{
    madaloynalar.classList.add("active")
   
})