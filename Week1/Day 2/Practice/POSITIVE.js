var countpositives=0;
var number = [3,4,-2,7,16,-8,0];
for (var i=0;i<number.length;i++){
    if (number[i]>0){
        countpositives++;
    }
}
console.log("there are "+ countpositives +" positive values");