const uniname = ["Ordrup gymnasium","UCL Erhvers akademi","Makurs plads"];
const unilocation = ["Kirkevej 5, 2920 Charlottenlund","UCL Erhvers akademi","Makurs plads"];
const eventtime = ["Ordrup gymnasium","UCL Erhvers akademi","Makurs plads"];
const eventinfo = ["Ordrup gymnasium","UCL Erhvers akademi","Makurs plads"];
const filename = ["cbs_koebenhavn","dtu_odense","it_universitet_koebenhavn","koebenhavns_universitet","ruc_roskilde","sdu_odense","aalborg_universitet","aarhus_universitet"];

for (let i = 0; i < uniname.length; i++) {
document.getElementById("galleri").innerHTML  += '<div class="box"><img src="pictures/events/'+filename[i]+'.png" alt="united"><div class="img-text"><h3>'+uniname[i]+'</h3><p>'+unilocation[i]+'</p><p>'+eventtime[i]+'</p></div><div class="cover"><h3>'+uniname[i]+'</h3><p>'+unilocation[i]+'</p><p>'+eventtime[i]+'</p><p>'+eventinfo[i]+'</p></div></div>';
}