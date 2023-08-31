// for (let i = 1; i <= 10; i++) {
//     let result = i * 7;
//     console.log(`7 * ${i} = ${result}`);
//   }
  
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " adalah bilangan genap");
//   } else {
//     console.log(i + " adalah bilangan ganjil");
//   }
// }

// Fungsi untuk mengonversi Celsius ke Fahrenheit
// function celsiusToFahrenheit(celsius) {
//   var fahrenheit = (celsius * 9/5) + 32;
//   return fahrenheit;
// }

// var celsiusTemperature = 25; // Ganti dengan suhu dalam Celsius yang ingin Anda konversi
// var fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
// console.log(celsiusTemperature + " Celsius = " + fahrenheitTemperature + " Fahrenheit");

// function hitungFaktorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * hitungFaktorial(n - 1);
//   }
// }

// const bilangan = 7; // Ganti dengan bilangan yang ingin Anda hitung faktorialnya
// const faktorial = hitungFaktorial(bilangan);

// console.log(`Faktorial dari ${bilangan} adalah ${faktorial}`);


// f


// function hitungJumlahBilangan(n) {
//   let jumlah = 0;
//   for (let i = 1; i <= n; i++) {
//     jumlah += i;
//   }
//   return jumlah;
// }

// const N = 5; // Ganti dengan nilai N yang Anda inginkan
// const jumlah = hitungJumlahBilangan(N);

// console.log(`Jumlah bilangan dari 1 sampai ${N} adalah ${jumlah}`);



// // Langkah 1: Minta pengguna memasukkan bilangan
// const bilangan = parseInt(prompt("Masukkan bilangan positif:"));

// // Langkah 2: Validasi input
// if (bilangan < 0) {
//   console.log("Masukkan bilangan positif.");
// } else {
//   // Langkah 3: Hitung faktorial
//   let faktorial = 1;
//   for (let i = 1; i <= bilangan; i++) {
//     faktorial *= i;
//   }
  
//   // Langkah 4: Tampilkan hasil faktorial
//   console.log(`Faktorial dari ${bilangan} adalah ${faktorial}`);
// }

let num =5
let counter =1
let desc = '${num}' //menyamakan dengan num dalam bentuk string

for (let i = num; i >0; i++) {
    desc += 'x ${i - 1}'
    counter *= i
}

console.log('${num} → ${desc} = ${counter}')

