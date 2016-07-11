function controllo() {
if(document.getElementById('rck').value==''){
attenzione.innerHTML="<span style='background-color:#222;font:bold 16px arial;color:#fff;line-height:22px;display:block;margin:0 auto;'>Devi inserire la Rck</span>" ;
document.getElementById('rck').focus();
} else{
controllo5()}
}
function controllo5(){
var cespo=document.getElementById('classesp').value;
var rck=document.getElementById('rck').value;
if(cespo=='XC1' && rck < 30){
function alertxc1();
attenzione.innerHTML="<span style='background-color:#fff;font:bold 16px arial;color:#ff0000'>ATTENZIONE: Rck inferiore a 30, minima classe di resistenza ammessa per XC1<br /></span>";
document.getElementById('rck').focus;
}else if (cespo=='XC2' && rck < 30){
attenzione.innerHTML="<span style='background-color:#fff;font:bold 16px arial;color:#ff0000'>ATTENZIONE: Rck inferiore a 30, minima classe di resistenza ammessa per XC2<br /></span>";
document.getElementById('rck').focus;
}else if (cespo=='XC3' && rck < 35) {
attenzione.innerHTML="<span style='background-color:#fff;font:bold 16px arial;color:#ff0000'>ATTENZIONE: Rck inferiore a 35, minima classe di resistenza ammessa per XC3<br /></span>";
document.getElementById('rck').focus;
}else if(cespo=='XC4' && rck < 40){
attenzione.innerHTML="<span style='background-color:#fff;font:bold 16px arial;color:#ff0000'>ATTENZIONE: Rck inferiore a 40, minima classe di resistenza ammessa per XC4<br /></span>";
document.getElementById('rck').focus;
}else if(cespo=='XF3' && rck < 30){
attenzione.innerHTML="<span style='background-color:#fff;font:bold 16px arial;color:#ff0000'>ATTENZIONE: Rck inferiore a 30, minima classe di resistenza ammessa per XF3<br /></span>";
document.getElementById('rck').focus;
}else if (cespo=='XF4' && rck < 35){
attenzione.innerHTML="<span style='background-color:#fff;font:bold 16px arial;color:#ff0000'>ATTENZIONE: Rck inferiore a 35, minima classe di resistenza ammessa per XF4<br /></span>";
document.getElementById('rck').focus;
} 
else {controllo1()

}
}
function alertxc1(){
navigator.notification.alert(
           "<span style='background-color:#fff;font:bold 16px arial;color:#ff0000'>Rck inferiore a 30, minima classe di resistenza ammessa per XC1<br /></span>",  // message
            alertDismissed,         // callback
            'ATTENZIONE!',            // title
            'Chiudi'                  // buttonName
        );
}
function controllo1(){
if(document.getElementById('digiucont').value==''){
attenzione.innerHTML="<span style='background-color:#222;font:bold 16px arial;color:#fff;line-height:22px;display:block;margin:0 auto;'>Devi inserire la distanza dei giunti di contrazione</span>" ;
document.getElementById('digiucont').focus();
} else{
controllo2()}
}
function controllo2(){
if(document.getElementById('umidita').value==''){
attenzione.innerHTML="<span style='background-color:#222;font:bold 16px arial;color:#fff;line-height:22px;display:block;margin:0 auto;'>Devi inserire l'umidit$agrave; relativa</span>" ;
document.getElementById('umidita').focus();
} else{
controllo3()}
}
function controllo3(){
if(document.getElementById('spesspav').value==''){
attenzione.innerHTML="<span style='background-color:#222;font:bold 16px arial;color:#fff;line-height:22px;display:block;margin:0 auto;'>Devi inserire lo spessore del pavimento </span>" ;
document.getElementById('spesspav').focus();
} else{
ritiro()}
}

function ritiro(){
document.getElementById('pinserimento').style.display="none";
document.getElementById('risultati').style.display="block";
var rck=document.getElementById('rck').value;
var distcont=document.getElementById('digiucont').value;
var umrel=document.getElementById('umidita').value;
var spess=document.getElementById('spesspav').value;
var cespo=document.getElementById('classesp').value;
var tgetto=document.getElementById('tipogetto').value;
if(document.getElementById('barriera').checked){
var strato="si";
}else{
var strato="no";
}
if(document.getElementById('matprosi').checked){
var matur="si";
}else{
var matur="no";
}

if (tgetto=="diretto" && cespo=='XC1'){
var srit=700;}
if (tgetto=="diretto" && cespo=='XC2'){
srit=700;}
if (tgetto=="diretto" && cespo=='XC3'){
srit=650;}
if (tgetto=="diretto" && cespo=='XC4'){
srit=600;}
if (tgetto=="diretto" && cespo=='XF3'){
srit=600;}
if (tgetto=="diretto" && cespo=='XF4'){
srit=550;}
if (tgetto=="pompa" && cespo=='XC1'){
srit=800;}
if (tgetto=="pompa" && cespo=='XC2'){
srit=800;}
if (tgetto=="pompa" && cespo=='XC3'){
srit=750;}
if (tgetto=="pompa" && cespo=='XC4'){
srit=700;}
if (tgetto=="pompa" && cespo=='XF3'){
srit=700;}
if (tgetto=="pompa" && cespo=='XF4'){
srit=650;}

if(umrel<40){
umi=1.15;
}else if (umrel==40) {
umi=1.1 ;
}else if (umrel>40 && umrel<60){
umi=1.1-((umrel-40)*0.01);
}else if(umrel>=60 && umrel<80) {
umi=0.9-((umrel-60)*0.02);
}else if(umrel>80){
umi=0.45;
}
if(cespo=='XC1'){ var ac=0.6; }
if(cespo=='XC2'){ var ac=0.6; }
if(cespo=='XC3'){ var ac=0.55; }
if(cespo=='XC4'){ var ac=0.5; }
if(cespo=='XF3'){ var ac=0.5; }
if(cespo=='XF4'){ var ac=0.45; }
var ritirolastrax=((ac*umi*srit)/1000)*distcont;
var ritirolastray=Math.round(ritirolastrax*100)/100;
if (strato=="si"){
var ritirostrato=ritirolastray*10/100;
}else{
ritirostrato=0;}
if(matur=="no"){
var ritiromatur=ritirolastray*10/100;
}else{
ritiromatur=0;
}
ritirolastraz=ritirolastray+ritirostrato+ritiromatur;
ritirolastra=Math.round(ritirolastraz*100)/100;
var boxalert=document.getElementById('boxalert');
boxalert.innerHTML="Il ritiro teorico in fase plastica del calcestruzzo giovane  con giunti tagliati ogni <span style='font-weight:bold;color:#ff2200;'>"+distcont+" ml </span> sara pari a <br /> <span style='font:bold 20px arial;color:#ff2200;display:block;width:100%;text-align:center;'>"+ritirolastra+" mm </span>";
var alertd=document.getElementById('alert2');
if (ritirolastra>1.5){
alertd.innerHTML="<span style='font:bold 16px arial;color:#ff2200;'>RICALCOLARE IL DIMENSIONAMENTO DEI GIUNTI SINO AD OTTENERE UN RITIRO NON SUPERIORE A 1.5mm</span>";
}
var modelast=5700*Math.sqrt(rck);     
var modelas=Math.round(modelast);         // modulo elastico calcestruzzo
var rck2=Math.pow(rck,2)   ;
var resistrazionex=0.27*Math.pow(rck2,1/3);  
var resistrazione=Math.round(resistrazionex*100)/100;   //resistenza a trazione
var fattrit=(ac*umi*srit)/1000000; //d4
var sollmediatrazionex=(fattrit*modelas*(100*spess))/1500; 
var sollmediatrazione=Math.round(sollmediatrazionex*100)/100;//sollecitazione media a trazione
moduloelastico.innerHTML="Modulo elastico cls: <span style='font:bold 16px; color:#ff2200;'>"+modelas+" N/mm<sup>2</sup> </span>";
resistenzaatrazione.innerHTML="Resistenza a trazione : <span style='font:bold 16px; color:#ff2200;'>"+resistrazione+" N/mm<sup>2</sup></span>";
resistenzamediaatrazione.innerHTML="Soll. media a trazione : <span style='font:bold 16px; color:#ff2200;'>"+sollmediatrazione+" N/mm<sup>2</sup></span>";


}
function init(){
document.getElementById('intro').style.display="block";
document.getElementById('risultati').style.display="none";
document.getElementById('pinserimento').style.display="none";
}
function fineintro(){
document.getElementById('intro').style.display="none";
document.getElementById('pinserimento').style.display="block";
}
function esci(){
 navigator.app.exitApp();
}
function ripeti(){
window.location="index.html";
}
function gocalcolo(){
 window.location = "calcolo_ritiro.html";

}
