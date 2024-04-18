let currentgallery = 0;
const maxgallery = 4;
const ArrayNavn = ["string1","string2","string3"];
ArrayNavn.push("string4");
console.log("ArrayNavn fjerde position: "+ArrayNavn[3]);

//Funktionen går en til højre i listen af billeder
function gallerygoleft(){
    if(currentgallery < maxgallery-1){
        for (let i = 0; i < 1; i++) {

            currentgallery++;
            document.getElementById("picturegallery").style.backgroundImage = "url(pictures/about/"+currentgallery+".jpg)";
        }
    }else{
        currentgallery = 0;
        document.getElementById("picturegallery").style.backgroundImage = "url(pictures/about/"+currentgallery+".jpg)";
    }
    
}
//Funktionen går en til højre i listen af billeder
function gallerygoright(){
    if(currentgallery > 0){
        currentgallery--;
        document.getElementById("picturegallery").style.backgroundImage = "url(pictures/about/"+currentgallery+".jpg)";
    }else{
        currentgallery = maxgallery-1;
        document.getElementById("picturegallery").style.backgroundImage = "url(pictures/about/"+currentgallery+".jpg)";
    }
}