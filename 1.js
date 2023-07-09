let fruits = ["avocado", "apple", "grape"];

fruits.push("banana"); //Menambahkan data ke indext terakhir dalam sebuah array
// console.log(fruits); //[ 'avocado', 'apple', 'grape', 'banana' ]

fruits.pop(); //Menghapus data index terakhir sebuah array
// console.log(fruits); //[ 'avocado', 'apple', 'grape' ]

fruits.shift(); //Mengahpus data index pertama sebuah array
// console.log(fruits); //[ 'apple', 'grape' ]

fruits.unshift("watermelon"); //Menambahkan data pada index pertama sebuah array
// console.log(fruits); //[ 'watermelon', 'apple', 'grape' ]

let size = fruits.length; //Menghitung jumlah element pada array
// console.log(size); // 3

console.log(Array.isArray(fruits)); //Mengecek apakah data berupa array

let number = parseInt("42"); // Mengkonversi string "42" menjadi bilangan bulat 42
console.log(number); // Output: 42

console.log("Hello, world!"); //Digunakan untuk mencetak atau menampilkan pesan ke konsol JavaScript.

let str = "Hello";
console.log(str.toUpperCase()); // Mengubah semua karakter dalam sebuah string menjadi huruf besar

console.log(str.toLowerCase()); //  Mengubah semua karakter dalam sebuah string menjadi huruf kecil
