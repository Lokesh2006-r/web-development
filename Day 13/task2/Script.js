const arr1=["apple","orange","banana"];
const arr2=["Strawbery","mango"];
const concat=arr1.concat(arr2);
console.log(concat);
concat.splice(2,2);
console.log(concat);
const sorted=concat.toSorted();
console.log(sorted);
const include=sorted.includes('mango');
console.log(include);
const index=concat.indexOf('mango');
console.log(index);