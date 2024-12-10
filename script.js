console.log("HEELO-WORLD;");

    console.log("")
    console.log("----------------------------------------------------------------------------------------------");
    console.log("QUESTION NUMBER 01:");
    function power(a, b) {
        var result = 1;
        for (var i = 1; i <= b; i++) {
          result *= a;
        }
        return result;
      }

      var base = 2;
      var exponent = 3;
      var result = power(base, exponent);
      console.log(base + " raised to the power of " + exponent + " is: " + result);

      console.log("")
      console.log("----------------------------------------------------------------------------------------------");
      console.log("QUESTION NUMBER 02:");
      function calculateArea(a, b, c) {
        // Calculate the semi-perimeter
        var S = (a + b + c) / 2;
        var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
      
        return area;
      }
      
      var side1 = 5;
      var side2 = 6;
      var side3 = 7;
      
      var area = calculateArea(side1, side2, side3);
      console.log("Area of the triangle is:", area);
      
console.log("");
console.log("----------------------------------------------------------------------------------------------");
console.log("QUESTION NUMBER 03:");
function calculateAverage(marks) {
    var totalMarks = marks.reduce((sum, mark) => sum + mark, 0); 
    var average = totalMarks / marks.length;  
    return average;
  }
  

  function calculatePercentage(marks, totalMaxMarks) {
    var totalMarks = marks.reduce((sum, mark) => sum + mark, 0);  
    var percentage = (totalMarks / totalMaxMarks) * 100; 
    return percentage;
  }
  

  function mainFunction() {
    var marks = [85, 90, 78];  
    var totalMaxMarks = 300;  
    var average = calculateAverage(marks);
    var percentage = calculatePercentage(marks, totalMaxMarks);
  
    console.log("Marks: " + marks);
    console.log("Average Marks: " + average);
    console.log("Percentage: " + percentage  ,  "%");
  }
  
  mainFunction();
  

  console.log("");
  console.log("----------------------------------------------------------------------------------------------");
  console.log(" QUESTION NUMBER 04:");
  var string = "Hello, world!";
var character = 'o';
var index = customIndexOf(string, character);

function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
     
      if (str[i] === char) {
        return i;  
      }
    }
    return -1;
  }

  console.log("The index of '" + character + "' is:", index);

  console.log("");
  console.log("----------------------------------------------------------------------------------------------");
  console.log("QUESTION NUMBER 05:");

  var sentence = "Hello, World!";
 
  function removeVowels(sentence) {
    var vowels = 'aeiouAEIOU';
    var result = '';

    for (var i = 0; i < sentence.length; i++) {
      if (vowels.indexOf(sentence[i]) === -1) {
        result += sentence[i];
      }
    }
  
    return result; 
  }
  var modifiedSentence = removeVowels(sentence);

  console.log("Original Sentence: " + sentence);
  console.log("Modified Sentence (without vowels): " + modifiedSentence);
  

  console.log("");
  console.log("----------------------------------------------------------------------------------------------");
  console.log(" QUESTION NUMBER 06:");
  function calculateOvertimePay(hoursWorked) {
    var standardHours = 40;   // Standard working hours (40 hours per week)
    var overtimeRate = 12;     // Overtime pay rate: Rs. 12.00 per hour
  
    if (hoursWorked > standardHours) {
      var overtimeHours = hoursWorked - standardHours; 
      var overtimePay = overtimeHours * overtimeRate;  
      return overtimePay;
    } else {
      return 0;
    }
  }
  
  var hoursWorked = 50; 
  var overtimePay = calculateOvertimePay(hoursWorked);
  
  console.log("Employee worked: " + hoursWorked + " hours.");
  console.log("Overtime Pay: Rs. " + overtimePay);
  