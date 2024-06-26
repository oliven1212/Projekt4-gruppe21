function pcheader(){
    document.getElementById("header").innerHTML  = '<a href="index.html" class="highlight"><p>Forside</p></a>';
    document.getElementById("header").innerHTML += '<a href="map.html" class="highlight"><p>Track dit tøj</p></a>';
    document.getElementById("header").innerHTML += '<a href="index.html" class="headerpicture"><img src="pictures/general/logo.png" alt="logo"></a>';
    document.getElementById("header").innerHTML += '<a href="events.html" class="highlight"><p>Begivenheder</p></a>';
    document.getElementById("header").innerHTML += '<a href="about.html" class="highlight"><p>Om os</p></a>';
}
function phoneheader(){  
    document.getElementById("header").innerHTML = '<a href="index.html" class="burperpic"><img src="pictures/general/logo.png" alt="logo"></a>';
    document.getElementById("header").innerHTML+= '<a href="javascript:void(0);" onclick="burgershow()" class="navbarbutton"><i class="fa fa-bars"></i></a>';

}
temp = true;

function burgershow(){
    if(temp){
    temp = false;
    document.getElementById("header").innerHTML+= '<div class="burger"><a href="index.html" class="burgeritem">Forside</a><a href="map.html" class="burgeritem">Track dit tøj</a><a href="events.html" class="burgeritem">Begivenheder</a><a href="about.html" class="burgeritem">Om os</a></div>';
    }else{
        temp = true;
        phoneheader();
    }
}

function onresize () {
    if(window.innerWidth > 1000){
        pcheader();
    }else{
        phoneheader();
    }
 }


 onresize();
 window.addEventListener("resize", onresize);




document.getElementById("footer").innerHTML  = '<div><h2>Kontakt information</h2><p>Email: info@dinstilderessmil.com</p><p>Telefon: +45 23 42 45 21</p></div>';
document.getElementById("footer").innerHTML += '<div><h2>Kontakt åbningstider</h2><p>Mandag-fredag: 9:00 - 17:00</p><p>Lørdag-søndag: Lukket</p></div>';
document.getElementById("footer").innerHTML += '<div></div><div></div>';
document.getElementById("footer").innerHTML += '<div><h2>Følg os på sociale medier</h2><a href="https://www.facebook.com/roedekors/"><i class="fa-brands fa-facebook"></i></a><a href="https://www.instagram.com/rodekorsdk"><i class="fa-brands fa-square-instagram"></i></a><a href="https://www.linkedin.com/company/danish-red-cross/"><i class="fa-brands fa-linkedin"></i></a><a href="https://twitter.com/danskrodekors"><i class="fa-brands fa-twitter"></i></a><a href="https://www.youtube.com/channel/UCGSDJNCcQNsLJKP6PhF8kvg"><i class="fa-brands fa-youtube"></i></a></div>';

document.getElementById("banner").innerHTML = '<img src="pictures/general/Banner.jpg" alt="Banner">';