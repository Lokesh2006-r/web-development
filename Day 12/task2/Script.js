function test() {
    let a = prompt("Enter a tweet:");
    let b = a.length;
    alert("You have used: " + b + " || Remaining: " + (140 - b) + " characters");
}
test();
