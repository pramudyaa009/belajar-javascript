function Angkot(sopir,trayek,penumpang,uangKas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.uangKas = uangKas;

     this.penumpangNaik = function(namapenumpang){
            this.penumpang.push(namapenumpang);

            return this.penumpang;
    }

    this.penumpangTurun = function(namapenumpang,bayar){
        if( this.penumpang.length == 0){
            console.log('angkot ini masih kosong!');

            return false;
        }
        for( i= 0; i < this.penumpang.length; i++){
            if( this.penumpang[i] === namapenumpang){
                this.penumpang[i] = undefined
                this.uangKas += bayar;

                return this.penumpang;
            }

        }
    }
}

var angkot1 = new Angkot('arya', ['cikande','jayanti'], [], 0);
var angkot2 = new Angkot('dimas', ['belaraja','kronjo'], [], 0);