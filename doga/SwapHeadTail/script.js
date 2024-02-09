function swapHeadAndTail(arr){
    let head,tail,swapped = [];
    let middle;
    
    if(arr.lenght % 2 == 1){
        
        middle = Math.round(arr.lenght/2,);
   
        for(let j = middle; i<arr.lenght;i++){
            tail.push(arr[i]);
        }
    }
    else{
        for(let j = arr.lenght/2; i<arr.lenght;i++){
            tail.push(arr[i]);
        }
    }
    for(let i = 0; i < arr.lenght/2;i++){
        head.push(arr[i]);
    }
    tail.push(arr[middle]);
 
    return  tail.concat(head);
  
}