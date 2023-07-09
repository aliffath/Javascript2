const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (dataArray.length > 5) {
    if (nilaiAwal < nilaiAkhir) {
      const resultData = dataArray.filter(
        (data) => data > nilaiAwal && data < nilaiAkhir
      );
      if (resultData.length > 0) {
        console.log(resultData.sort((a, b) => a - b));
      } else {
        console.log("Data tidak ditemukan");
      }
    } else {
      console.log("Nilai akhir harus lebih besar dari nilai awal");
    }
  } else {
    console.log("Jumlah angka dalam dataArray harus lebih dari 5");
  }
};

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(5, 17, [2, 25, 4]);
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);
