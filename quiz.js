const text = "nama saya adalah budi, saya bekerja sebagai frontend engineer";

const array = [1000, 20, 15, 18, 1, 9, 35];

const isObject = {
    nama_mobil: "ferrari",
    kecepatan: "6000 cc",
    harga: 20000000000,
    tipe: "tidak diketahui",
};
const arrayOf = [
    {
        nama_mobil: "lamborgini",
        kecepatan: "8000 cc",
        harga: 70000000000,
        tipe: "aventador",
    },
];

//1 . gunakan metode replaceAll() pada input variable text diatas:
//output: "nama saya adalah budi saya bekerja sebagai javascript engineer"
let replaceAllText = function (pattern, replacement) {
    let result = text.replaceAll(pattern, replacement);
    return result;
};
console.log("1.", replaceAllText(",", ""));

//2. gunakan metode substring() pada input variable text diatas:
// output : "saya bekerja sebagai frontend engineer"
let subText = function (indexStart, indexEnd) {
    let result = text.substring(indexStart, indexEnd);
    return result;
};
console.log("\n2.", subText(23, text.length));

//3. gunakan metode toUpperCase() pada input variable text diatas:
// output : "NAMA SAYA ADALAH BUDI, SAYA BEKERJA SEBAGAI FRONTEND ENGINEER"
let upperText = function () {
    let result = text.toUpperCase();
    return result;
};
console.log("\n3.", upperText());

//4. gunakan metode sorting berdasarkan descending dan ascending pada input variable array diatas:
// output : ascending :[1, 9, 15, 18, 20, 35, 1000]
let ascendingArray = function () {
    let result = array.sort((a, b) => a - b);
    return result;
};
console.log("\n4A. ascending :", ascendingArray());

// output : descending: [1000, 35, 20, 18, 15, 9, 1]
let descendingArray = function () {
    let result = array.sort((a, b) => b - a);
    return result;
};
console.log("\n4B. descending :", descendingArray());

//5. gunakan metode indexOf() untuk pencarian nama pada input variable text diatas:
// output : temukan string "frontend engineer" = (number of character)
let indexOfText = function (search) {
    let result = text.indexOf(search);
    return result;
};
console.log("\n5. temukan string 'frontend engineer' =", indexOfText("frontend engineer"));

//6. gunakan metode includes() untuk pencarian nama pada input variable text diatas:
// output : temukan string "frontend engineer" : (boolean value)
let includesText = function (search) {
    let result = text.includes(search);
    return result;
};
console.log("\n6. temukan string 'frontend engineer' :", includesText("frontend engineer"));

//7. gunakan metode indexOf() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai 18 = [nilainya]
let indexOfArray = function (search) {
    let result = array.indexOf(search);
    return [result];
};
console.log("\n7. temukan nilai 18 =", indexOfArray(18));

//8. gunakan metode includes() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai 2000 = false
let includesArray = function (search) {
    let result = array.includes(search);
    return result;
};
console.log("\n8. temukan nilai 2000 =", includesArray(2000));

//9. gunakan metode filter() untuk pencarian nama pada input variable array diatas:
// output : hapus nilai selain 1000 = [35, 20, 18, 15, 9, 1]
let filterArray = function (value) {
    let result = array.filter((param) => param != value);
    return result;
};
console.log("\n9. hapus nilai selain 1000 =", filterArray(1000));

//10. gunakan metode filter() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai sama dengan 1000 = [1000]
let filterArray2 = function () {
    let result = array.filter((param) => param == 1000);
    return result;
};
console.log("\n10. temukan nilai sama dengan 1000 =", filterArray2(1000));

//11. gabungkan variable isObject kedalam variable arrayOf dengan menggunakan method push atau spread operator
/** 
    output:
    const arrayOf = [{
        nama_mobil: "lamborgini",
        kecepatan: "8000 cc",
        harga: 70000000000,
        tipe: "aventador"
    },{
        nama_mobil: "ferrari",
        kecepatan: "6000 cc",
        harga: 20000000000,
        tipe: "tidak diketahui"
    }]
 * */
const joinArrayOf = function (array, object) {
    array.push(object);
    return array;
};
console.log("\n11. arrayOf =", joinArrayOf(arrayOf, isObject));

//12. Buat metode Function() dari sebuah semua methode algorithma yg telah di kerjakan lalu return setiap kondisinya dan berikan nama function yg sesuai denga kebutuhan
/**
    output : 
        function(){
            // isilah metode tersebut kedalam function()///
            // berikan return valuenya
        } 
* */
