function meanVsMedian(numbers){
    let mean = 0;
    let median;
    let tomb = [];
    let middle = Math.round(numbers.length/2);
    tomb.sort()
    for(i = 0; i<= numbers.length; i ++){
        mean += numbers[i];


    }
    median = numbers[middle];
    if( median > mean){
        return "median";
    }
    else if(mean > median){
        return "mean";
    }
    else{
        return "same";
    }

}