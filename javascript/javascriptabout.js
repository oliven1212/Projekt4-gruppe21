let currentgallery = 0;
const maxgallery = 4;

//Funktionen går en til højre i listen af billeder
function gallerygoleft(){
    if(currentgallery < maxgallery-1){
        currentgallery++;
        document.getElementById("picturegallery").style.backgroundImage = "url(pictures/about/"+currentgallery+".png)";
    }else{
        currentgallery = 0;
        document.getElementById("picturegallery").style.backgroundImage = "url(pictures/about/"+currentgallery+".png)";
    }
}
//Funktionen går en til højre i listen af billeder
function gallerygoright(){
    if(currentgallery > 0){
        currentgallery--;
        document.getElementById("picturegallery").style.backgroundImage = "url(pictures/about/"+currentgallery+".png)";
    }else{
        currentgallery = maxgallery-1;
        document.getElementById("picturegallery").style.backgroundImage = "url(pictures/about/"+currentgallery+".png)";
    }
}