var navBtn = document.getElementById("nav-btn");
navBtn.addEventListener("click", function(){
    if(this.value == 0){
        document.querySelector(".nav-list").style.display = "inline-block";
        this.value = 1;
    }else{
        document.querySelector(".nav-list").style.display = "none";
        this.value = 0;
    }
});

window.onscroll = function(){
    if(window.scrollY > 100){
        document.getElementById("nav-bar").style.background = "linear-gradient(90deg, var(--color-nav), var(--color-nav), var(--color-light-cyan), var(--color-nav))";
    }else{
        document.getElementById("nav-bar").style.background = "none";
    }
}
// Changing it to check the git status