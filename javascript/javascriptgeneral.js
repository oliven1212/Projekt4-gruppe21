function pcheader(){
    document.getElementById("header").innerHTML  = '<a href="index.html" class="highlight"><p>Forside</p></a>';
    document.getElementById("header").innerHTML += '<a href="effort.html" class="highlight"><p>Indsats</p></a>';
    document.getElementById("header").innerHTML += '<a href="index.html" class="headerpicture"><img src="pictures/general/logo.png" alt="logo"></a>';
    document.getElementById("header").innerHTML += '<a href="events.html" class="highlight"><p>Begivenheder</p></a>';
    document.getElementById("header").innerHTML += '<a href="about.html" class="highlight"><p>Om os</p></a>';
}
function phoneheader(){  
    document.getElementById("header").innerHTML = '<a href="index.html" class="burperpic"><img src="pictures/general/logo.png" alt="logo"></a>';
    document.getElementById("header").innerHTML+= '<a href="javascript:void(0);" onclick="onresize()" class="navbarbutton"><i class="fa fa-bars"></i></a>';

}

function onresize () {
    console.log(window.innerWidth);
    if(window.innerWidth > 1500){
        pcheader();
    }else{
        phoneheader();
    }
 }


 onresize();
 window.addEventListener("resize", onresize);




document.getElementById("footer").innerHTML  = '<div><h2>Kontakt information</h2><p>Email: info@dinstilderessmil.com</p><p>Telefon: +45 23 42 45 21</p></div>';
document.getElementById("footer").innerHTML += '<div><h2>Kontakt åbningstider</h2><p>Mandag-fredag: 9:00 - 17:00</p><p>Lørdag-søndag: Lukket</p></div>';
document.getElementById("footer").innerHTML += '<div><h2>Følg os på sociale medier</h2><a href="https://www.google.com/"><i class="fa-brands fa-facebook"></i></a><a href="https://www.google.com/"><i class="fa-brands fa-square-instagram"></i></a><a href="https://www.google.com/"><i class="fa-brands fa-linkedin"></i></a><a href="https://www.google.com/"><i class="fa-brands fa-twitter"></i></a><a href="https://www.google.com/"><i class="fa-brands fa-youtube"></i></a></div>';

document.getElementById("banner").innerHTML = '<img src="pictures/general/Banner.png" alt="Banner">';