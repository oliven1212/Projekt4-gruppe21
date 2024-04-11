const uniname = ["Copenhagen Business School","Dansk teknisk universitet","IT University of Copenhagen","Copenhagen University","Roskilde University","University of Southern Denmark","Aalborg universitet","Aarhus Universitet"];
const unilocation = ["Solbjerg Pl. 3, 2000 Frederiksberg","Anker Engelunds Vej 1, Bygning 101A, 2800 Kongens Lyngby","Rued Langgaards Vej 7, 2300 København","Nørregade 10, 1172 København","Universitetsvej 1, 4000 Roskilde","Campusvej 55, 5230 Odense","Fredrik Bajers Vej 7K, 9220 Aalborg Øst","Nordre Ringgade 1, 8000 Aarhus C"];
const eventtime = ["21/02-2024 til 28/02-2024","02/01-2024 til 09/01-2024","21/04-2024 til 28/04-2024", "21/05-2024 til 28/05-2024","21/06-2024 til 28/06-2024","21/07-2024 til 28/07-2024","21/08-2024 til 28/08-2024", "21/09-2024 til 28/09-2024"];
const eventinfo = ["Ordrup gymnasium","UCL Erhvers akademi","Makurs plads"];
const filename = ["cbs_koebenhavn","dtu_odense","it_universitet_koebenhavn","koebenhavns_universitet","ruc_roskilde","sdu_odense","aalborg_universitet","aarhus_universitet"];

for (let i = 0; i < uniname.length; i++) {
document.getElementById("galleri").innerHTML  += '<div class="box"><img src="pictures/events/'+filename[i]+'.png" alt="united"><div class="img-text"><h3>'+uniname[i]+'</h3><p>'+unilocation[i]+'</p><p>'+eventtime[i]+'</p></div><div class="cover"><h3>'+uniname[i]+'</h3><p>'+unilocation[i]+'</p><p>'+eventtime[i]+'</p><p>'+eventinfo[i]+'</p></div></div>';
}