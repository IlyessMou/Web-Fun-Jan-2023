for (var i=1;i<=100;i++){
    if ((i%3==0) || (i%5==0)){
        if ((i%3==0) && (i%5!=0)){
            console.log("Fizz");
        }
        if ((i%3!=0) && (i%5==0)){
            console.log("Buzz");
        }
        if ((i%3==0) && (i%5==0)){
            console.log("FizzBuzz");
        }
    }else{
        console.log(i)
    }
}
