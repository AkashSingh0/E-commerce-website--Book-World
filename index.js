let mainPage = document.querySelector(".mainPage");
let blogContent = document.querySelector(".blogContent");
let cardNovel = document.querySelector(".cardNovel");
let cardTechi = document.querySelector(".cardTechi");
let aboutPage = document.querySelector(".about");
let contactus = document.querySelector(".contact");


function home() {
   mainPage.style.display = "flex";
   cardNovel.style.display = "block";
   cardTechi.style.display = "block";
   blogContent.style.display = "block"
   contactus.style.display = "none"

   document.getElementById("blog").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("home").style.color = "rgb(1, 190, 190)";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color = "black";

}

const logo = document.querySelector(".logo");
logo.addEventListener('click', function() {
    window.location.reload();
});


const button = document.getElementById("btn-explr");
button.addEventListener('click', function () {
   window.scrollTo({
      top: 2000,
      behavior: 'smooth'
   });
});

//toggle button nav
let isMenuChecked = false;
let navButton = document.querySelector("#check");
let menuList = document.querySelector(".list");
navButton.addEventListener("click", function () {
  if (isMenuChecked == false) {
    menuList.style.left = "0%";
    isMenuChecked = true;
  }
  else {
    menuList.style.left = "-100%";
    isMenuChecked = false;
  }
})

menuList.addEventListener("click", (event) => {
  if (event.target.localName == "a" && isMenuChecked == true) {
    menuList.style.left = "-100%";
    isMenuChecked = false;
  }
})

function shop() {
   cardNovel.style.display = "block";
   cardTechi.style.display = "block";
   mainPage.style.display = "none"
   blogContent.style.display = "none";
   aboutPage.style.display = "none";
   contactus.style.display = "none"

   document.getElementById("blog").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("shop").style.color = "rgb(1, 190, 190)"
   document.getElementById("home").style.color = "black"
   document.getElementById("contact").style.color = "black";

}


function blog() {

   cardNovel.style.display = "none";
   cardTechi.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "block"
   aboutPage.style.display = "none";
   contactus.style.display = "none"

   document.getElementById("blog").style.color = "rgb(1, 190, 190)";
   document.getElementById("home").style.color = "black"
   document.getElementById("shop").style.color = "black"
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color = "black";


}


function about() {
   aboutPage.style.display = "block";
   cardNovel.style.display = "none";
   cardTechi.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none";
   contactus.style.display = "none";

   document.getElementById("blog").style.color = "black";
   document.getElementById("home").style.color = "black"
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "rgb(1, 190, 190)"
   document.getElementById("contact").style.color = "black";

}

function Explore() {
   window.location.href = "https://akashsingh0.github.io/Portfolio_NEW/"
}
document.getElementById("abt-btn").addEventListener("click", Explore);


function contact() {
   contactus.style.display = "block";
   aboutPage.style.display = "none";
   cardNovel.style.display = "none";
   cardTechi.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"
   document.getElementById("blog").style.color = "black";
   document.getElementById("home").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color = "rgb(1, 190, 190)"

}
function map() {
   let url = `https://www.google.com/maps/@13.0063875,77.6497415,18.57z?entry=ttu`
   window.open(url, '_blank');
}
document.getElementById("mapclick").addEventListener("click", map);;


function showCard(img) {
   let newImg = document.getElementById("cartImg");
   newImg.src = img.src;
   document.querySelector(".fullPage").style.display = "flex";
   contactus.style.display = "none";
   aboutPage.style.display = "none";
   cardNovel.style.display = "none";
   cardTechi.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"

}

// Add to Cart

function addItem() {
   document.querySelector(".addCart").style.display = "block";
   contactus.style.display = "none";
   aboutPage.style.display = "none";
   cardNovel.style.display = "none";
   cardTechi.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"


}

function addToCart() {
   alert("Added To Cart");
   location.reload();
}


function Dark() {
   // Toggle dark-mode class on the body
   document.body.classList.toggle('dark-mode');

   // Check if dark-mode class is present
   if (document.body.classList.contains('dark-mode')) {
      // Set mode to dark in localStorage
      localStorage.setItem('mode', 'dark');
      // Change icon to sun
      document.getElementById('dark-mode-toggle').classList.remove('ri-moon-line');
      document.getElementById('dark-mode-toggle').classList.add('ri-sun-line');
   } else {
      // Set mode to light in localStorage
      localStorage.setItem('mode', 'light');
      // Change icon back to moon
      document.getElementById('dark-mode-toggle').classList.remove('ri-sun-line');
      document.getElementById('dark-mode-toggle').classList.add('ri-moon-line');
   }
}

window.onload = function () {
   const savedMode = localStorage.getItem('mode');
   if (savedMode && savedMode === 'dark') {
      document.body.classList.add('dark-mode');
   }
}


