var a = 5;
let b = "Kampus Merdeka";
const nama = "Dimas Seto";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
  let asal = "indonesia";
  return console.log(
    "Perkenalkan nama saya " +
    nama +
    " nomor urut " +
    a +
    " sekarang sedang mengikuti " +
    b +
    " berasal dari " +
    asal
  );
}

if (terdaftar === true) {
  console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}
// Ambil index ke 2 dalam array baris ke 5 dan tampilkan dalam console.log
console.log("array = " + lengkap_arr[2]);

a = b;
// nama = b;
// console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan();

