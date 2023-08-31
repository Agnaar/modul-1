// deklrasi variabel & inputan
let number = prompt("masukkan angka ?");

// cek, jika bukan number && number >= 0 (tidak minus)
if (!isNaN(number) && number >= 0) {
  // cek, jika number di modulus 2 == 0
  if (number % 2 === 0) {
    console.log("Genap"); // maka genap
  } else {
    console.log("Ganjil"); // maka ganjil
  }
} else { // jika inputan salah
  console.log("Input salah");
}