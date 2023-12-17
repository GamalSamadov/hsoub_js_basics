let year = prompt("In which yaer JavaScript relased? ");

if (year == 1996) {
  alert("Correct!");
}
else {
  year = prompt("In correct! Try again: In which yaer JavaScript relased? ");
  if (year == 1996) {
    alert("Correct!");
  }
  else {
    alert("Incorrect!");
  }
}


let day = prompt("Enter day: ");

if (day == 0) alert("Sunday");
else if (day == 1) alert("Monday");
else if (day == 2) alert("Tuesday");
else if (day == 3) alert("Wednesday");
else if (day == 4) alert("Thursday");
else if (day == 5) alert("Friday");
else if (day == 6) alert("Saturday");
else alert("Invalid Input!");