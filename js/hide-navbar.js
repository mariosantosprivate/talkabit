window.addEventListener('scroll', function (e) {


    if (window.pageYOffset === 0)
    {
        document.getElementById("navbar").classList.remove("fadeIn");
        document.getElementById("navbar").classList.add("hide");
        document.getElementById("navbarBrandImg").classList.add("hide");
    }
    else if (window.pageYOffset > 10)
    {
        document.getElementById("navbar").classList.add("fadeIn");
        document.getElementById("navbar").classList.remove("hide");
        document.getElementById("navbarBrandImg").classList.remove("hide");
    }
});