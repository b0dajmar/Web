// 1. feladat Leonardo numbers - Leonardo számok
L = (n, L0, L1, add) => {
    // return what you are told....
    let newNumber;
    let tomb = [L0,L1]
    

    for(let i=0;i < n-2; i++){
        newNumber =  tomb[i] + tomb[i+1] + add;
        tomb.push(newNumber);
    }
    return tomb
}


console.log(L(5, 1, 1, 1), [1, 1, 3, 5, 9]);
console.log(L(5, 0, 0, 2), [0, 0, 2, 4, 8]);
console.log(L(5, 0, 0, 0), [0, 0, 0, 0, 0]);
console.log(L(10, 0, 1, 4), [0, 1, 5, 10, 19, 33, 56, 93, 153, 250]);



// 2. feladat Every nth array element - Minden n-edik tömbelem
function every(arr, interval, start) {
    // kód helye
    let kezd;
    let count;
    let intervalCounter;
   if(start != null){
    kezd = start
   }
   else{
    kezd = 0
   }
   let returnable;
    if (interval != null){
            intervalCounter = interval;
    }
    else{
        intervalCounter = 1
    }
    for(let i=kezd;i < arr.lenght; i++){
        count++;
        if(count == intervalCounter){
            returnable.push(arr[i]);
            count = 0;
        }
    }

 
    return returnable
}

console.log(every([0, 1, 2, 3, 4]), [0, 1, 2, 3, 4]);
console.log(every([0, 1, 2, 3, 4], 1), [0, 1, 2, 3, 4]);
console.log(every([0, 1, 2, 3, 4], 2), [0, 2, 4]);
console.log(every([0, 1, 2, 3, 4], 3), [0, 3]);
console.log(every([0, 1, 2, 3, 4], 3, 1), [1, 4]);



// 3. feladat Odd Ones Out! - Páratlanok!
function oddOnesOut(nums) {
    // kód helye
    let tomb = [];
    
    let ready = 0;
    let inspectedNumber = 0;
    let inspectedNumberCount = 0;
    
    while(ready != 1){
        for(let i = 0; i = nums.lenght; i++){
            if(inspectedNumber == nums[i] ){
                inspectedNumberCount ++;
            }
        }
        if(inspectedNumberCount % 2 != 1){
            tomb.push(nums[inspectedNumber]);
        }
        if(inspectedNumber == nums.lenght){
            break
        }
        inspectedNumber++;
        inspectedNumberCount = 0
        
        
    }
    return tomb
}

console.log(oddOnesOut([1, 2, 3, 1, 3, 3]), [1, 1]);
console.log(oddOnesOut([75, 68, 75, 47, 68]), [75, 68, 75, 68]);
console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]), [67, 67]);
console.log(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]), [100, 100, 100, 100]);
console.log(oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]), [44, 79, 50, 44, 79, 50]);