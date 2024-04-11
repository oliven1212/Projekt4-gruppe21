const uniname = ["Copenhagen Business School","Dansk teknisk universitet","IT University of Copenhagen","Copenhagen University","Roskilde University","University of Southern Denmark","Aalborg universitet","Aarhus Universitet"];
const unilocation = ["Solbjerg Pl. 3, 2000 Frederiksberg","Rued Langgaards Vej 7, 2300 København","Nørregade 10, 1172 København","Universitetsvej 1, 4000 Roskilde","Campusvej 55, 5000 Odense","Fredrik Bajers Vej 7K, 9220 Aalborg Øst","Nordre Ringgade 1, 8000 Aarhus C"];
const eventtime = ["Ordrup gymnasium","UCL Erhvers akademi","Makurs plads"];
const eventinfo = ["Ordrup gymnasium","UCL Erhvers akademi","Makurs plads"];
const filename = ["cbs_koebenhavn","dtu_odense","it_universitet_koebenhavn","koebenhavns_universitet","ruc_roskilde","sdu_odense","aalborg_universitet","aarhus_universitet"];

for (let i = 0; i < uniname.length; i++) {
document.getElementById("galleri").innerHTML  += '<div class="box"><img src="pictures/events/'+filename[i]+'.png" alt="united"><div class="img-text"><h3>'+uniname[i]+'</h3><p>'+unilocation[i]+'</p><p>'+eventtime[i]+'</p></div><div class="cover"><h3>'+uniname[i]+'</h3><p>'+unilocation[i]+'</p><p>'+eventtime[i]+'</p><p>'+eventinfo[i]+'</p></div></div>';
}