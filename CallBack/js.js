function osszead(szam1,szam2){
    return szam1 + szam2;
}
function kivonas(szam1,szam2){
    return szam1-szam2;
}
function szorzas(szam1,szam2){
    return szam1*szam2;
}
function osztas(szam1,szam2){
    if(szam1 == 0 || szam2 == 0){
        return "0-val nem osztunk"
    }
    else{
    return szam1/szam2
    }
}
function szamol(muvelet,szam1,szam2){
    return muvelet(szam1,szam2);

}
