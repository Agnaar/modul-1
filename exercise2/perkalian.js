var bilangan = 9;
var pengali = 1;
while (pengali <= 10) {
    console.log(bilangan + "*" + pengali + "=" + hasiloerkalian);
    pengalili++;
}

// mengurutkan tiga angka
var a = 15;
var b = 7;
var c = 22;

if (a >= b && a >= c) {
    if (b >= c) {
        console.log(c, b, a);
    } else {
        console.log(b, c, a);
    }
} else if (b >= a && b >= c) {
    if (a >= c) {
        console.log(c, a, b);
    } else {
        console.log(a, c, b);
    }
} else {
    if (a >= b) {
        console.log(b, a, c);
    } else {
        console.log(a, b, c);
    }
}



// mengonversi centi meter ke kilometer
function centimeterToKilometer(centimeters) {
    var kilometers = centimeters / 100000;
    return kilometers;
}

var centimeters = 500000;
var kilometers = centimeterToKilometer(centimeters);

console.log(centimeters + " sentimeter sama dengan " + kilometers + " kilometer");
