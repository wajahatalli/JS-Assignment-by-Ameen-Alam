
var subject1 = parseFloat(prompt("Enter Marks of 1st Subject"));
var subject2 = parseFloat(prompt("Enter Marks of 2nd Subject"));
var subject3 = parseFloat(prompt("Enter Marks of 3rd Subject"));
var subject4 = parseFloat(prompt("Enter Marks of 4th Subject"));
var subject5 = parseFloat(prompt("Enter Marks of 5th Subject"));

var totalMarks= '500';

var result = (subject1+subject2+subject3+subject4+subject5);

const percent = Math.round((result / totalMarks) * 100);
alert(percent);