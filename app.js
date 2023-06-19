//Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.

function compareNumbers(num1, num2) {
    if (num1 < num2) {
      return -1;
    } else if (num1 > num2) {
      return 1;
    } else {
      return 0;
    }
  }

//Write a function that counts the factorial of a given number. 

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
  
    let result = 1;
  
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
  
    return result;
}

//Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.

function combineDigits(digit1, digit2, digit3) {
    if (digit1 < 0 || digit1 > 9 || digit2 < 0 || digit2 > 9 || digit3 < 0 || digit3 > 9) {
      return "Invalid digits. Please provide digits between 0 and 9.";
    }
  
    var combinedNumber = digit1 * 100 + digit2 * 10 + digit3;
    return combinedNumber;
}

//Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square. 

function calculateArea(width, length) {
    if (length === undefined) {
      // If only one parameter is provided, treat it as the length of a square
      return width * width;
    } else {
      // If both width and length are provided, calculate the area of a rectangle
      return width * length;
    }
}

//Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of all its divisors. For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.

function isPerfectNumber(number) {
    if (number <= 0) {
      return false; // Perfect numbers are positive integers greater than 0
    }
  
    let sum = 0;
  
    for (var i = 1; i <= number / 2; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
  
    return sum === number;
}

//Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range. Use the previous function to check, if numbers are perfect. 

function findPerfectNumbersInRange(min, max) {
    let perfectNumbers = [];
  
    for (var number = min; number <= max; number++) {
      if (isPerfectNumber(number)) {
        perfectNumbers.push(number);
      }
    }
  
    return perfectNumbers;
}

//Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.

function formatTime(hours, minutes, seconds) {
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds === undefined ? '00' : (seconds < 10 ? '0' + seconds : seconds);
  
    return hours + ':' + minutes + ':' + seconds;
}

//Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.

function convertToSeconds(hours, minutes, seconds) {
    let totalSeconds = 0;
    
    totalSeconds += hours * 3600;    // Convert hours to seconds
    totalSeconds += minutes * 60;    // Convert minutes to seconds
    totalSeconds += seconds;         // Add the remaining seconds
    
    return totalSeconds;
}

//Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.

function formatTimeFromSeconds(totalSeconds) {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
  
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    return hours + ':' + minutes + ':' + seconds;
}

//Write a function that counts the difference between the dates. The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones: at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.

function calculateTimeDifference(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
    let totalSeconds1 = convertToSeconds(hours1, minutes1, seconds1);
    let totalSeconds2 = convertToSeconds(hours2, minutes2, seconds2);
    let differenceInSeconds = Math.abs(totalSeconds2 - totalSeconds1);
  
    return formatTimeFromSeconds(differenceInSeconds);
}
  