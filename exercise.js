// Fungsi untuk mengonversi Celsius ke Fahrenheit
function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  var celsiusTemperature = 29; 
  var fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
  console.log(celsiusTemperature + " Celsius = " + fahrenheitTemperature + " Fahrenheit");

  // Fungsi untuk memeriksa apakah bilangan prima atau bukan
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    if (number <= 3) {
      return true;
    }
  
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
  
    for (var i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  var numberToCheck = 17; // Ganti dengan bilangan yang ingin Anda periksa
  if (isPrime(numberToCheck)) {
    console.log(numberToCheck + " adalah bilangan prima.");
  } else {
    console.log(numberToCheck + " bukan bilangan prima.");
  }
  

  // Fungsi untuk menghitung jumlah bilangan dari 1 sampai N
  function sumNumbersUpToN(N) {
    var sum = 0;
    for (var i = 1; i <= N; i++) {
      sum += i;
    }
    return sum;
  }
  
  var N = 7;
  var totalSum = sumNumbersUpToN(N);
  console.log("Jumlah bilangan dari 1 sampai " + N + " adalah " + totalSum);
  

// //   fungsional untuk menghitung faktorial suatu bilangan
//  function factorial(n) {
//      if (n === 0 || n === 1 ){
//          return 1;
//      } else {
//         return n * hitungfaktorial(n - 1);
//      }
     
//  }

//  const bilangan =7;
//  const hasilfaktorial= hitungfactorial(bilangan);
//  console.log('faktorial dari ${bilangan} adalah ${faktorial}');


  