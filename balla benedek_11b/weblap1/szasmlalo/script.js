let ertek = 1 ;
let kattintas = 0 ;
function alap() {
document.getElementById("szam").innerHTML = ertek;
}

function plusz() {
    kattintas += 1;
   
    if (kattintas <= 10) {

    
        ertek += 1;
        }
        else {
       
            alert("SOKAT KATTINTOTTÁL!!! ")
        }
    
    document.getElementById("szam").innerHTML = ertek;
}

    

function minusz() {
    kattintas += 1;
    if (kattintas <= 10) {

    

    
    ertek += -1;
    }
    else {
       
            alert("SOKAT KATTINTOTTÁL!!! ")
        }
    
  
document.getElementById("szam").innerHTML = ertek;

    }