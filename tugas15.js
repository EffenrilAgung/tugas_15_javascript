const Segitiga = function () {
  var AB = 8;
  var BC = 6;
  var A = Math.pow(AB, 2) + Math.pow(BC, 2);
  var hasil = Math.sqrt(A);
  console.log('Nilai AB : ', AB);
  console.log('Nilai BC : ', BC);
  console.log(
    'Panjang sisi pada segitiga siku-siku tersebut adalah : ',
    hasil,
    'cm'
  );
};
Segitiga();
