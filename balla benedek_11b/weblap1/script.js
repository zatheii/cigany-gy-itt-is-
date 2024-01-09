function kiiras () {
    let szamok = "";
    let kezdo = 1 ;
    for (let i = 0; i < 10; i++) {
       if (kezdo %2 == 0 ) {
        szamok += kezdo + "<br>"
       }
        kezdo += 1 ;
        
        
    }
    document.getElementById("demo").innerHTML = szamok;
}