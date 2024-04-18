const id = [12345,1,2];
const firstlocation = ["Frederiksværk pakkecenter","Odense pakkecenter","Svendborg pakkecenter"];
const firstdate = ["17. Marts", "13. Maj", "14. September"];
const firsttime = ["17:32", "14:50","10:50"];
const secondlocation = ["Kastrup lufthavn","Kastrup lufthavn", "Kastrup lufthavn"];
const seconddate = ["27. Marts", "3. Oktober", "15 Janaur"];
const secondtime = ["14:40", "11:22", "9:22"];
const thirdlocation = ["Uganda", "Uganda", "Uganda"];
const thirddate = ["31. marts", "22. august", "19. maj"];
const thirdtime = ["10:22", "12:11", "13:53"];

function trackShipment() {
    for (let i = 0; i < id.length; i++) {
    //Tjeker om det er et gyldigt id der er blevet givet
    if (document.getElementById('trackingNumber').value == id[i]){

        //Viser hvor langt containeren er på dens rejse
        document.getElementById('trackingResult').innerHTML  = '<h3>Pakkens Vej</h3><br>';
        document.getElementById('trackingResult').innerHTML += '<div class="trackingTimeline"><div class="timelineItem"><div class="timelineIcon"><i class="fas fa-warehouse"></i></div><div class="timelineContent"><p><strong>Trin 1: </strong>'+firstlocation[i]+'</p><p>'+firstdate[i]+' - kl. '+firsttime[i]+'</p><p>Forsendelsen behandles og sorteres</p></div><div class="checkmarkIcon"><i class="fas fa-check-circle"></i></div></div><div class="timelineItem"><div class="timelineIcon"><i class="fas fa-plane"></i></div><div class="timelineContent"><p><strong>Trin 2: </strong>'+secondlocation[i]+'</p><p>'+seconddate[i]+' - kl. '+secondtime[i]+'</p><p>Tøjet er ved gøres klar til flyveturen</p></div><div class="checkmarkIcon"><i class="fas fa-check-circle"></i></div></div><div class="timelineItem"><div class="timelineIcon"><i class="fas fa-globe"></i></div><div class="timelineContent"><p><strong>Trin 3: </strong>'+thirdlocation[i]+'</p><p>'+thirddate[i]+' - kl. '+thirdtime[i]+'</p><p>Tøjet er noget frem</p></div><div class="checkmarkIcon"><i class="fas fa-check-circle"></i></div></div>';

        //Viser vores satisfactions box med billed
        document.getElementById('satisfactionBox').innerHTML = '<h3>Tak for din donation!</h3><p>Her er et billede af dem, der har fået gavn af dit tøj:</p><img src="pictures/map/'+id[i]+'.jpg" alt="Billed af glade børn">';
        document.getElementById('satisfactionBox').style.display = 'block';


        //fjerner fejl boksen i tilfældet at den var der før
        document.getElementById('errorMessage').style.display = 'none';

        document.getElementById('splitline').style.display = 'block';
        break;
    } else {
        //fjerner alt fra tracking og satisfactionboxen så det ikke vises og kan ikke tjekes uden korrekt id
        document.getElementById('trackingResult').innerHTML = '';
        document.getElementById('satisfactionBox').innerHTML = '';


        // Vis fejlmeddelelsen, når et forkert sporingsnummer indtastes
        document.getElementById('errorMessage').innerText = 'Ugyldigt forsendelsesnummer. Venligst kontroller og prøv igen.';
        document.getElementById('errorMessage').style.display = 'block';
        
        // Skjuler satisfactionBox bagrunden, når det forkerte sporingsnummer blev indtastet
        document.getElementById('satisfactionBox').style.display = 'none';
        document.getElementById('splitline').style.display = 'none';


        }
    }
}