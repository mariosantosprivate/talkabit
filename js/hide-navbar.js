window.addEventListener('scroll', function (e) {


    if (window.pageYOffset === 0)
    {
        document.getElementById("navbar").classList.add("hide");
        setTimeout(function(){ document.getElementById("navbar").classList.add("hide-first"); }, 700 - 700*0.1);
    }
    else if (window.pageYOffset > 10)
    {
        document.getElementById("navbar").classList.remove("hide-first");
        document.getElementById("navbar").classList.remove("hide");
    }
});