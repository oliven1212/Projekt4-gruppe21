const id = [12345,1,2];
const firstlocation = ["Frederiksværk pakkecenter","Odense pakkecenter","Frederiksværk pakkecenter"];
const firstdate = ["17. Marts", "13. Maj", "14. September"];
const firsttime = ["17:32", "14:50","10:50"];
const secondlocation = ["Kastrup lufthavn","Kastrup lufthavn", "Kastrup lufthavn"];
const seconddate = ["27. Marts", "3. Oktober", "15 Janaur"];
const secondtime = ["14:40", "11:22", "9:22"];
const thirdlocation = ["Uganda", "Uganda", "Uganda"];
const thirddate = ["31. marts", "22. august", "19. maj"];
const thirdtime = ["10:22", "12:11", "13:53"];

function trackShipment() {
    var trackingNumber = document.getElementById('trackingNumber').value;

    // Simulere en forespørgsel til en server for at hente forsendelsesstatus
    // Dette kan omfatte AJAX-anmodninger eller fetch-API'en i et rigtigt projekt
    var status = getStatusFromServer(trackingNumber);

    // Opdater DOM'en med den hentede status
    document.getElementById('status').innerText = status;
}

function getStatusFromServer(trackingNumber) {
    // Simulerer en tilfældig status
    var statuses = ['In Transit', 'Out for Delivery', 'Delivered', 'Failed Delivery Attempt'];
    var randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    return 'Status for tracking number ' + trackingNumber + ': ' + randomStatus;
}


function trackShipment() {
    var trackingNumber = document.getElementById('trackingNumber').value;

    // Simulere en anmodning til serveren for at få forsendelsesdetaljer
    if (trackingNumber == id[0]) {
        document.getElementById('trackingResult').style.display = 'block';
        // Vis satisfactionBox, når det ønskede sporingsnummer er indtastet
        document.querySelector('.satisfactionBox').style.display = 'block';
        // Skjul fejlmeddelelsen, hvis den var synlig tidligere
        document.getElementById('errorMessage').style.display = 'none';
    } else {
        // Vis fejlmeddelelsen, når et forkert sporingsnummer indtastes
        document.getElementById('errorMessage').innerText = 'Ugyldigt forsendelsesnummer. Venligst kontroller og prøv igen.';
        document.getElementById('errorMessage').style.display = 'block';
        // Skjul satisfactionBox, da det forkerte sporingsnummer blev indtastet
        document.querySelector('.satisfactionBox').style.display = 'none';
    }
}