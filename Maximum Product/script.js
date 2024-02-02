function adjacentElementsProduct(array) {
    let product;
    let numb  = Infinity * -1; 

    for(let i = 0; i< array.length-1; i++){
        if(array[i] * array[i+1] > numb){
          numb = array[i] * array[i+1];
        }
    }



    return numb;
  }