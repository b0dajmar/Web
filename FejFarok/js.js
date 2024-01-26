function swapHeadAndTail(arr) {
    let head
    let tail

    if(arr.length % 2 == 1){
        for(i = 0; i < arr.length; i ++){
            if(i > arr.length/2){
                tail.push(arr[i]);
                break
            }
            head.push(arr[i]);
        }
        for(i = arr.length/2; i < arr.length; i ++){
            tail.push(arr[i]);
        return  tail.concat(head);}
    }
    else{
        for(i = 0; i < arr.length/2; i ++){
            head.push(arr[i]);
        }
        for(i = arr.length/2; i < arr.length; i ++){
            tail.push(arr[i]);
        }
        return  tail.concat(head);

    }
}