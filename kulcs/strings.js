function takeNumberOut(string){
    let numbers 
    let array = string.split("")
    for(i = 0;i<array.length;i++){
        if(array[i].isInteger){
            numbers += array[i].pop();
        }
    }
    return(numbers)
    
}