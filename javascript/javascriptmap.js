const firstlocation = ["Frederiksværk pakkecenter"];
const firstdate = ["17. marts",];
const firsttime = ["17:32",];
const secondlocation = ["Kastrup lufthavn"];
const seconddate = ["27. marts"];
const secondtime = ["14:40"];
const thirdlocation = ["Uganda"];
const thirddate = ["31. marts"];
const thirdtime = ["10:22"];

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
    if (trackingNumber === '12345') {
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