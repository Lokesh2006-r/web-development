function bmical(Weight,height){
    var bmi=Weight/(height*height);
    return bmi.toPrecision(3);

}
var bmi=bmical(65,1.8);
if(bmi<18.5){
    console.log(`Your BMI is ${bmi},so you are underweight`);
}
else if(bmi>=18.5 && bmi<=24.9){
    console.log(`Your BMI is ${bmi},so you are normalweight`);
}
else{
    console.log(`Your BMI is ${bmi},so you are overweight`);
}