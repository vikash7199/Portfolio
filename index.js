
// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
function show(){
    // document.getElementById("result").innerHTML = document.write("thank you")
    alert("Thank you for submiting form . I will get in touch within 24 hours")
    
}
function progres(){
    alert("Currently in progess I will upload soon after completion")
}

 
