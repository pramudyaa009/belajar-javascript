// algoritmaa sebelum membuat functiona

// 1 keyword function
// 2 kita harus ngasih nama function tersebut dengan jelas
// 3 kita masukan prameter / argument kedalam kurung buka dan kurung tutup setelah nama function dibuat tapi prameter / argument boleh ada  atau tidak
// 4 kita harus membuka kurung kurawal dan tutup kurawal sebagai penanda batas function terseebut
// 5 kita bisa melakukan tugas nya
// 6 biasa function itu ada return atau tidak itu boleh
// 7 function bisa kita panggil secara ber ulang2

// contoh;

function JumlahVolumeDuaBilanganKubus(a, b){
    var volumeA;
    var volumeB;
    var total;

      volumeA= a * a * a;     
      volumeB= b * b * b;
    
    total= volumeA + volumeB;
    
    return total;
}
                               // disini kita sudah membuat function dengan contoh menghitung dua bilangan kubus
                               //  kita tinggal memanggilnya dan menjalankannya

alert(JumlahVolumeDuaBilanganKubus(10, 15));
alert(JumlahVolumeDuaBilanganKubus(7, 9));
alert(JumlahVolumeDuaBilanganKubus(5, 3));                               
                                   // kita sudah memanggil nya dengan nama / kode JumlahVolumeDuaBilangan
                                   // kita juga sudah menjalankan program atau tugas kita tadi dengan kode alert
                                