// membuat variabel
// let myNumber = 16;
// let myString = "Hello"
// let myBoolean = true
// const phi = 3.14
// // menampilkan informasi ke console
// console.log(myNumber)
// console.log(myString)
// console.log(myBoolean)
// console.log(phi)
// // menampilkan informasi dalam bentuk alert pada window
// window.alert("Angka favorit saya adalah : " + myNumber)
// window.alert('Angka favorit saya adalah : ' + myNumber)
// window.alert(`Angka favorit saya adalah : ${myNumber}`)

// // Melakukan operasi sederhana dengan operator aritmatika

// // membuat variabel
// let x = 13
// let y = 16

// // menampilkan informasi ke console
// console.log(x, y)
// console.log('x + y =', x + y)
// console.log('x - y =', x - y)
// console.log('x * y =', x * y)
// console.log('x / y =', x / y)
// console.log('x % y =', x % y)
// console.log('x++ =', x++)
// console.log('++x =', ++x)
// console.log('x-- =', x--)
// console.log('--x =', --x)

// // Latihan 5.3. Melakukan operasi sederhana dengan operator perbandingan

// // membuat variabel
// let a = 28
// let b = 30

// // menampilkan hasil ke console
// console.log(a, b)
// console.log('a > b =', a > b)
// console.log('a < b =', a < b)
// console.log('a >= b =', a >= b)
// console.log('a <= b =', a <= b)
// console.log('a == b =', a == b)
// console.log('a != b =', a != b)
// console.log('a === b =', a === b)
// console.log('a !== b =', a !== b)

// // Latihan 5.4. Melakukan operasi sederhana dengan operator logika

// // menampilkan hasil ke console
// console.log('true && true =', true && true)
// console.log('true && false =', true && false)
// console.log('false && true =', false && true)
// console.log('false && false =', false && false)
// console.log('true || true =', true || true)
// console.log('true || false =', true || false)
// console.log('false || true =', false || true)
// console.log('false || false =', false || false)
// console.log('!true =', !true)
// console.log('!false =', !false)

// // Latihan 5.5. Membuat Fungsi

// // fungsi luas persegi
// function luas_Persegi(s){
//     return s * s
// }

// // fungsi luas segitiga
// function luas_segitiga (a, t){
//     return 0.5 * a * t 
// }

// // fungsi volume balok
// function volume_balok(p,l,t){
//     return p * l * t
// }

// // menampilkan hasil ke console
// console.log("luas persegi = " + luas_Persegi(7))
// console.log("luas segitiga = " + luas_segitiga(4,7))
// console.log("volume balok = " + volume_balok(2,9,4))

// Latihan 5.6. Bermain dengan Array

// array dengan nama-nama hewan
var animals = ["kucing", "harimau", "gajah", "burung", "ikan paus"];

// menampilkan array
console.log("data array belum diubah")
console.log(animals)

// ganti elemen array di index 1
animals[1] = "merpati";

// menampilkan array ke console
console.log("data array setelah diubah")
console.log(animals)

// menambahkan item baru ke array
animals.push("tikus")

// menampilkan array ke console
console.log("item baru ditambahkan")
console.log(animals)

console.log("menghilangkan data")
console.log(animals.pop())
console.log(animals)
console.log("jumlah data = "+ animals.length)

// menambahkan data array menggunakan unshift()
animals.unshift("kerbau")

// menampilkan data array
console.log("menampilkan data array menggunakan unshift()")
console.log(animals)

// menghilangkan data pertama array menggunakan shift()
console.log("menghilangkan data pertama menggunakan shift")
console.log(animals.shift())

// mengurutkan data array menggunakan sort()
console.log("mengurutkan data array menggunakan sort")
console.log(animals.sort())

// mengurutkan data array tapi terbalik menggunakan reverse()
console.log("mengurutkan data array menggunakan reverse")
console.log(animals.reverse())

// menampilkan data array
console.log("data array")
console.log(animals)
