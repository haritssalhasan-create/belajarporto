let angka1 = document.getElementById("angka1")
let angka2 = document.getElementById("angka2")

function tambah(){
    let hasil= parseInt(angka1.value)
+parseInt(angka2.value);
alert("hasil penjumlahan:" + hasil);
}
let btntambah = document.getElementById("tambah");
btntambah.onclick = tambah;

function kurang(){
    let hasil= parseInt(angka1.value)
-parseInt(angka2.value);
alert("hasil pengurangan:" + hasil);
}
let btnkurang = document.getElementById("kurang");
btnkurang.onclick = kurang;
 

function bagi(){
    let hasil= parseInt(angka1.value)
/parseInt(angka2.value);
alert("hasil pembagian:" + hasil);
}
let btnbagi = document.getElementById("bagi");
btnbagi.onclick = bagi;
 

function kali(){
    let hasil= parseInt(angka1.value)
*parseInt(angka2.value);
alert("hasil perkalian:" + hasil);
}
let btnkali = document.getElementById("kali");
btnkali.onclick = kali;
 