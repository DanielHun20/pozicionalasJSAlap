
var valtA="";
var valtB="";
var valtM="";


function osszead(){
    var osszeg=Number(valtA)+Number(valtB);
    document.getElementById("szoveg").innerHTML=osszeg;
    console.log(valtA);
    console.log(osszeg);
    
}

function kivonas(){
    var osszeg=Number(valtA)-Number(valtB);
    document.getElementById("szoveg").innerHTML=osszeg;
    
}

function szorzas(){
    var osszeg=Number(valtA)*Number(valtB);
    document.getElementById("szoveg").innerHTML=osszeg;
    
}

function osztas(){
    var osszeg=Number(valtA)/Number(valtB);
    document.getElementById("szoveg").innerHTML=osszeg;
    console.log(osszeg);
    
}
function szamolas() { 
    
     valtA=document.getElementById("a").value;
     valtB=document.getElementById("b").value
     valtM=document.getElementById("muv").value;
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
  

}
            
