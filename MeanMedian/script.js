function meanVsMedian(numbers) {
   let median,mean;
   median = 0;
   mean = 0;
   
   for( let i = 0; i <numbers.length; i ++){
            mean += numbers[i];
   }
    median += (numbers[numbers.length/2 + (numbers.length/2)+1])/2;
   mean == mean/numbers.length;

   if(median > mean){
     return"median";
   }
   else if (mean > median){
    return "mean"
   }
   else{
    return "same"
   }

}
