/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   lr();
   move();
   turnLeft();
   rl();
   move();
   turnRight();
   lr();
   move();
   turnLeft();
   rl();
   move();
   turnRight();
   lr();
   turnRight();
}

function lr(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   turnLeft();
   }
function rl(){
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnRight();
}
