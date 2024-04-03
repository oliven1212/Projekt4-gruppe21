const uniname = ["Ordrup gymnasium","UCL Erhvers akademi","Makurs plads"];
const unilocation = ["Kirkevej 5, 2920 Charlottenlund","UCL Erhvers akademi","Makurs plads"];
const eventtime = ["Ordrup gymnasium","UCL Erhvers akademi","Makurs plads"];
const eventinfo = ["Ordrup gymnasium","UCL Erhvers akademi","Makurs plads"];

for (let i = 0; i < uniname.length; i++) {
document.getElementById("galleri").innerHTML  += '<div class="box"><img src="pictures/events/Image 6.png" alt="united"><div class="img-text"><h3>'+uniname[i]+'</h3><p>'+unilocation[i]+'</p><p>'+eventtime[i]+'</p></div><div class="cover"><h3>'+uniname[i]+'</h3><p>'+unilocation[i]+'</p><p>'+eventtime[i]+'</p><p>'+eventinfo[i]+'</p></div></div>';
}