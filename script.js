
var num = 1;
  var result = num++

 var names = prompt("Enter your name");

 var chemMarks = +prompt("Enter chemistry marks");
 var physMarks = +prompt("Enter physics marks");
 var mathMarks = +prompt("Enter Maths marks");
 var sindhiMarks = +prompt("Enter Sindhi marks");
 var totalMarks = 400;
 var studentMarks = chemMarks + physMarks + mathMarks + sindhiMarks;
 var percentage = studentMarks / totalMarks * 100;
 console.log(names , chemMarks , physMarks , mathMarks , sindhiMarks)
  console.log(names + " total marks is " + studentMarks + " out of " + totalMarks + " and percentage is " + percentage + " %");

  
var percentage = 100;
if (percentage >= 80) {
    console.log("your grade is A+")
} else if (percentage >= 70) {
    console.log("your grade is A")
} else if (percentage >= 60) {
    console.log("your grade is B")
} else if (percentage >= 50) {
    console.log("your grade is C")
}
else {
    console.log("you are fail.");
}