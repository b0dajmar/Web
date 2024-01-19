function possiblyPerfect(key,answers){
    let correct,incorrect = 0
    for (i = 0; i < exam.length; i ++){
        if( answers[i] ==key[i] || key[i] == "_" ){
            correct ++;
        }
        else {
            incorrect ++;
        }
    }
    if (correct == key.length || incorrect == key.length){
        return("Student can get a 100%")
    }
    else {
        return("Student can not get a 100%")
    }
}