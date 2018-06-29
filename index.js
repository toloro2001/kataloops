//Kata 1
    document.write("Display the numbers from 1 to 20. ");

    for(var i = 1; i <= 20; i++) {
       document.write(i+", ");
    }
//Kata 2
    document.write("Display the even numbers from 1 to 20. ");

    for(var i = 1; i <= 20; i++) {
        if(i%2==0){
        document.write(i+", ");
        }
     }
 //Kata 3
     document.write("Display the odd numbers from 1 to 20. ");
     for(var i = 1; i <= 20; i++) {
        if(i%2){
        document.write(i+", ");
        }
     }
 //Kata 4
     document.write("Display the multiples of 5 up to 100. ");
     for(var i = 1; i <= 100; i++) {
        if(i%5==0){
        document.write(i+", ");
        }
     }
//Kata 5
document.write("Display the squares numbers up to 100. ");
for(var i = 1; i <= 100; i++) {
    if(Math.sqrt(i) % 1 ===0){
        document.write(i+", ");
      } 
 }
 //Kata 6

 document.write("Display the numbers from 20 to 1. ");

    for(var i = 20; i >= 1; i--) {
       document.write(i+", ");
    }
//Kata 7

document.write("Display the even numbers from 20 to 1. ");

    for(var i = 20; i >= 1; i--) {
        if(i%2==0){
        document.write(i+", ");
        }
     }
     //Kata 8
     document.write("Display the odd numbers from 20 to 1. ");
     for(var i = 20; i >= 1; i--) {
        if(i%2){
        document.write(i+", ");
        }
     }
     //Kata 9
     document.write("Display the multiples of 5 going down from 100. ");
     for(var i = 100; i >= 1; i--) {
        if(i%5==0){
        document.write(i+", ");
        }
     }
     //Kata 10
     document.write("Display the squares numbers up to 100. ");
for(var i = 100; i >= 1; i--) {
    if(Math.sqrt(i) % 1 ===0){
        document.write(i+", ");
      } 
 }