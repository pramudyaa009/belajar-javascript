var penumpang = ['dodi','dodo','arya'];
var tambahpenumpang= function(namapenumpang,penumpang){
   if(penumpang.length == 0){
      penumpang.push(namapenumpang);

      return penumpang;

   } else {
      for( var i = 0; i < penumpang.length; i++){
         if(penumpang[i] == undefined){
            penumpang[i] = namapenumpang;

            return penumpang;

         } else if ( penumpang[i] == namapenumpang){
            console.log(namapenumpang + ' sudah ada di dalam angkot ');

            return penumpang;

         } else if( i == penumpang.length -1){
            penumpang.push(namapenumpang);

            return penumpang;
         }
      }
   }
}

var hapuspenumpang= function (namapenumpang,penumpang){
   if(penumpang.length == 0){
      console.log('angkot ini masih kosong');

   }  else {
      for( var i = 0; i < penumpang.length; i++){
         if(penumpang[i] == namapenumpang){
            penumpang[i] = undefined;

         } else if ( i == penumpang.length -1){
            console.log(namapenumpang + ' ini tidak ada di dalam angkot');

         }
      }

      return penumpang;
   }
}