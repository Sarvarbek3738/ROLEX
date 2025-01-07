const oyquyoshEL = document.querySelector(".oyquyosh")
const body = document.querySelector("body")

var mode = localStorage.getItem("mode") ? localStorage.getItem("mode") : "quyosh";


const oyquyosh = () => {
    if (mode == "temp") {
        body.classList.add("temp")
    } else {
        body.classList.remove("temp")
    }
}
oyquyosh();
oyquyoshEL.addEventListener("click", () => {
    if(mode == "quyosh"){
        mode = "temp"
    }else{
        mode = "quyosh"
    }
    localStorage.setItem("mode" , mode )
    oyquyosh()
})


// Elementlarni olish
const menu = document.getElementById("menu");
const toggleButton = document.getElementById("toggle-menu");
const closeButton = document.getElementById("close-menu");

// Lokal storage'dagi qiymatni o'qish
const isMenuVisible = localStorage.getItem("menuVisible");

// Sahifa yuklanganda menyuni holatini tekshirish
if (isMenuVisible === "true") {
  menu.classList.remove("hidden");
} else {
  menu.classList.add("hidden");
}

// Menyu tugmasini bosganda holatni o'zgartirish
toggleButton.addEventListener("click", () => {
  menu.classList.remove("hidden");
  localStorage.setItem("menuVisible", "true");
});

// Menyuni yopish tugmasi
closeButton.addEventListener("click", () => {
  menu.classList.add("hidden");
  localStorage.setItem("menuVisible", "false");
});







