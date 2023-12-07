var JumlahAngkot= 10;
var AngkotBeroperasi= 6;
var NoAngkot= 1;

for(var NoAngkot= 1; NoAngkot<= JumlahAngkot; NoAngkot++){
 
    if(NoAngkot <=6){
        console.log('angkot no.' + NoAngkot + ' sedang beroperasi');
    }else if(NoAngkot== 8){
        console.log('angkot no.' + NoAngkot + ' sedang lembur');
    }else{
         console.log('angkot no.' +NoAngkot + ' sedang tidak beroperasi'); 
    }

}