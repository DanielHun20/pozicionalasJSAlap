
var valtA="";
var valtB="";
var valtM="";


function osszead(){
    var osszeg=Number(valtA)+Number(valtB);
    document.getElementById("szoveg").innerHTML="osszeg";
    
}

function kivonas(){
    var osszeg=Number(valtA)-Number(valtB);
    document.getElementById("szoveg").innerHTML="osszeg";
    
}

function szorzas(){
    var osszeg=Number(valtA)*Number(valtB);
    document.getElementById("szoveg").innerHTML="osszeg";
    
}

function osztas(){
    var osszeg=Number(valtA)/Number(valtB);
    document.getElementById("szoveg").innerHTML="osszeg";
    
}
function szamolas() { 
    
    var valtA=document.getElementById("a").value;
    var valtB=document.getElementById("b").value
    var valtM=document.getElementById("muv").value;
    if(valtM=="+"){
    osszead();
}

if(valtM=="-"){
    kivonas();
}

if(valtM=="*"){
    szorzas();
}

if(valtM=="/"){
    osztas();
}
    document.getElementById("szoveg").innerHTML="osszeg";

}
            
