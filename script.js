
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
    var toggler = document.querySelector(".navbar-toggler");
    
    window.addEventListener("resize", function () {
        if (window.innerWidth < 768) {
            navbar.classList.add("bg-primary");
        } else {
            navbar.classList.remove("bg-primary");
        }
    });
});
