function controllo() {
if(document.getElementById('rck').value==''){
attenzione.innerHTML="<span style='background-color:#222;font:bold 16px arial;color:#fff;line-height:22px;display:block;margin:0 auto;'>Devi inserire la Rck</span>" ;
document.getElementById('rck').focus();
} else{
controllo1()}
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

if (tgetto=="diretto" && cespo==0.6){
srit=700;}
if (tgetto=="diretto" && cespo==0.55){
srit=650;}
if (tgetto=="diretto" && cespo==0.5){
srit=600;}
if (tgetto=="pompa" && cespo==0.6){
srit=800;}
if (tgetto=="pompa" && cespo==0.55){
srit=750;}
if (tgetto=="pompa" && cespo==0.5){
srit=700;}

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

var ritirolastrax=((cespo*umi*srit)/1000)*distcont;
var ritirolastra=Math.round(ritirolastrax*1000)/1000;
var boxalert=document.getElementById('boxalert');
boxalert.innerHTML="Il ritiro del pavimento per una distanza tra i giunti di contrazione pari a <span style='font-weight:bold;color:#ff2200;'>"+distcont+" ml </span> sara pari a <br /> <span style='font:bold 20px arial;color:#ff2200;text-align:center;'>"+ritirolastra+" cm </span>";
var modelast=5700*Math.sqrt(rck);     
var modelas=Math.round(modelast*100)/100;         // modulo elastico calcestruzzo
var rck2=Math.pow(rck,2)   ;
var resistrazionex=0.27*Math.pow(rck2,1/3);  
var resistrazione=Math.round(resistrazionex*100)/100;   //resistenza a trazione
var fattrit=(cespo*umi*srit)/1000000; //d4
var sollmediatrazionex=(fattrit*modelas*(100*spess))/1500; 
var sollmediatrazione=Math.round(sollmediatrazionex*100)/100;//sollecitazione media a trazione
moduloelastico.innerHTML="Modulo elastico cls: <span style='font:bold 16px; color:#ff2200;'>"+modelas+" N/mm<sup>2</sup> </span>";
resistenzaatrazione.innerHTML="Resistenza a trazione: <span style='font:bold 16px; color:#ff2200;'>"+resistrazione+" N/mm<sup>2</sup></span>";
resistenzamediaatrazione.innerHTML="Soll. media a trazione: <span style='font:bold 16px; color:#ff2200;'>"+sollmediatrazione+" N/mm<sup>2</sup></span>";


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
