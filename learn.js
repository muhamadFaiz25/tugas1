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

// Latihan 5.5. Membuat Fungsi

// fungsi luas persegi
function luas_Persegi(s){
    return s * s
}

// fungsi luas segitiga
function luas_segitiga (a, t){
    return 0.5 * a * t 
}

// fungsi volume balok
function volume_balok(p,l,t){
    return p * l * t
}

// menampilkan hasil ke console
console.log("luas persegi = " + luas_Persegi(7))
console.log("luas segitiga = " + luas_segitiga(4,7))
console.log("volume balok = " + volume_balok(2,9,4))
