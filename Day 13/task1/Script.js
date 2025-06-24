var fruits=[`apple`,`banana`,`orange`,'mango',`pineapple`]
console.log(fruits[2]);
fruits.push('strawberry');
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log(fruits.length);
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
fruits.reverse();
console.log(fruits);
var num=[1,2,3,4,5];
let sum=0;
for(let i=0;i<num.length;i++){
    sum+=num[i];
}
console.log(sum);