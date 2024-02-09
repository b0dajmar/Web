
function possiblyPerfect(key,answers){
    let hundred = true;
    for(i = 0; i < answers.length; i ++){
        if(answers[i] != key[i] || answers[i] != "_"){
            hundred = false;
        }
    }
    return hundred;
}