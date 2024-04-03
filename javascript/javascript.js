function onresize () {
    console.log(window.innerWidth);
    if(window.innerWidth < 1024){
        document.getElementById("header").innerHTML += '<a href="about.html" class="highlight"><p>Om os</p></a>';
    }
 }
 onresize();
 window.addEventListener("resize", onresize);