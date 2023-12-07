// // // contoh kita mau misahin angka yang lebih besar dari angka 3

// // // for
// const Angka = [ 1,4,7,9,-4,-5,-8,3,-2,-1];

// // const newAngka = [];
// // for( let i= 0; i< Angka.length; i++){
// //     if(Angka[i] >= 3){
// //         newAngka.push(Angka[i]);
// //     }
// // }
// // console.log(newAngka);


// // filter

// const newAngka= Angka.filter(function (a){
//     return a >= 3
// });
// console.log(newAngka)




// ( latihan map(), filter(), reduce() lebih lanjut )


// ambil semua elemen vidio
 const video = document.querySelectorAll('[data-durations]');
// pilih yang hanya js
const newjavascript = video.filter(videos => videos.textContent.includes('javascript'));
console.log(newjavascript);
// ambil masing2 durasi vidio

// ubah durasi menjadi int, dan ubah menit menjadi detik

// jumlahkan semua detik

// ubah format nya menjadi jam menit detik

// simpan 

<div class="msh"></div>
