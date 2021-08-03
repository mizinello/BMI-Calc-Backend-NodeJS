// let name = "tarmizi";
// const tinggi = 168;
// const tinggi_konversi = tinggi / 100;
// const berat = 100;

// const BMI = berat / (tinggi_konversi * tinggi_konversi);

// function BMI(berat, tinggi) {
//   return berat / (tinggi * tinggi);
// }

// function check(data) {
//   if (data < 18.5) {
//     return "oke";
//   } else if (data >= 18.5 && data < 24.9) {
//     return "mantap";
//   } else if (data > 25 && data < 29.9) {
//     return "besar";
//   } else {
//     return "obes";
//   }
// }

// let biodata_diri = [
//   {
//     name: "budi",
//     tinggi: 1.68,
//     berat: 100,
//   },
//   {
//     name: "andi",
//     tinggi: 1.68,
//     berat: 34,
//   },
//   {
//     name: "ahmad",
//     tinggi: 1.68,
//     berat: 60,
//   },
// ];

// for (const data of biodata_diri) {
//   let dataPertama = BMI(data.berat, data.tinggi);
//   let dataKedua = check(dataPertama);
//   data.bmi = Math.floor(dataPertama);
//   data.kategori = dataKedua;
// }

// console.log(JSON.stringify(biodata_diri));

// console.log(check(BMI(biodata_diri.berat, biodata_diri.tinggi)));

//    hasil = check(BMI())
//   console.log(check(BMI()));
// }
//   berat_badan = data.berat / (data.tinggi * data.tinggi);
//   if (berat_badan < 18.5) {
//     console.log();
//     console.log("kekurangan berat badan");
//   } else if (berat_badan > 18.5 && berat_badan < 24.9) {
//     console.log("berat badan ideal");
//   } else if (berat_badan > 25 && berat_badan < 29.9) {
//     console.log("kelebihan berat badan");
//   } else {
//     console.log("Obesitas");
//   }
// }

// let pasienCovidLast7day = [44000, 45000, 46000, 47000, 48000, 49000, "50000"];
// console.log(pasienCovidLast7day);

//exercise 10//

// const express = require("express");

// const app = express();
// const port = 3000;

// app.get("/profile", (req, res) => {
//   const profile = { name: "mizi", tinggi: 1.7, berat: 70 };
//   res.json(profile);
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// exercise 11 //

// const express = require("express");

// const app = express();
// const port = 3000;

// function BMI(berat, tinggi) {
//   return berat / (tinggi * tinggi);
// }

// function check(data) {
//   if (data < 18.5) {
//     return "oke";
//   } else if (data >= 18.5 && data < 24.9) {
//     return "mantap";
//   } else if (data > 25 && data < 29.9) {
//     return "besar";
//   } else {
//     return "obes";
//   }
// }

// app.get("/bmi", (req, res) => {
//   let biodata_diri = [
//     {
//       name: "budi",
//       tinggi: 1.68,
//       berat: 100,
//     },
//     {
//       name: "andi",
//       tinggi: 1.68,
//       berat: 34,
//     },
//     {
//       name: "ahmad",
//       tinggi: 1.68,
//       berat: 60,
//     },
//   ];

//   for (const data of biodata_diri) {
//     let dataPertama = BMI(data.berat, data.tinggi);
//     let dataKedua = check(dataPertama);
//     data.bmi = Math.floor(dataPertama);
//     data.kategori = dataKedua;
//   }

//   res.json(biodata_diri);
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

//exercise 12
// const express = require("express");

// const app = express();
// const port = 3000;

// function BMI(berat, tinggi) {
//   return berat / (tinggi * tinggi);
// }

// function check(data) {
//   if (data < 18.5) {
//     return "oke";
//   } else if (data >= 18.5 && data < 24.9) {
//     return "mantap";
//   } else if (data > 25 && data < 29.9) {
//     return "besar";
//   } else {
//     return "obes";
//   }
// }

// app.get("/bmi", (req, res) => {
//   let biodata_diri = [
//     {
//       name: "budi",
//       tinggi: 1.68,
//       berat: 100,
//     },
//     {
//       name: "andi",
//       tinggi: 1.68,
//       berat: 34,
//     },
//     {
//       name: "ahmad",
//       tinggi: 1.68,
//       berat: 60,
//     },
//   ];

//   for (const data of biodata_diri) {
//     let dataPertama = BMI(data.berat, data.tinggi);
//     let dataKedua = check(dataPertama);
//     data.bmi = Math.floor(dataPertama);
//     data.kategori = dataKedua;
//   }

//   let name = req.query.name;
//   let tinggi = req.query.tinggi;
//   let berat = req.query.berat;

//   res.json(biodata_diri.slice(0, 2));
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

//exercise 13
// const express = require("express");

// const app = express();
// app.use(express.json());

// const port = 3000;

// function BMI(berat, tinggi) {
//   return berat / (tinggi * tinggi);
// }

// function check(data) {
//   if (data < 18.5) {
//     return "oke";
//   } else if (data >= 18.5 && data < 24.9) {
//     return "mantap";
//   } else if (data > 25 && data < 29.9) {
//     return "besar";
//   } else {
//     return "obes";
//   }
// }

// app.post("/bmi", (req, res) => {
//   let biodata_diri = [
//     {
//       name: "budi",
//       tinggi: 1.68,
//       berat: 100,
//     },
//     {
//       name: "andi",
//       tinggi: 1.68,
//       berat: 34,
//     },
//     {
//       name: "ahmad",
//       tinggi: 1.68,
//       berat: 60,
//     },
//   ];

//   for (const data of biodata_diri) {
//     let dataPertama = BMI(data.berat, data.tinggi);
//     let dataKedua = check(dataPertama);
//     data.bmi = Math.floor(dataPertama);
//     data.kategori = dataKedua;
//   }

//   const name = req.body.name;
//   const tinggi = req.body.tinggi;
//   const berat = req.body.berat;

//   res.json(biodata_diri);
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// exercise 14
// currecncy

// const express = require("express");

// const app = express();
// app.use(express.json());

// const port = 3000;

// function BMI(berat, tinggi) {
//   return berat / (tinggi * tinggi);
// }

// function curr(rateAsal, rateTemp) {
//   return rateAsal * rateTemp;
// }

// app.post("/exchange", (req, res) => {
//   let mata_uang = [
//     {
//       asalUS: "USD",
//       rateUS: 1,
//     },
//     {
//       asalID: "IDR",
//       rateID: 10000,
//     },
//     {
//       asalMY: "MYR",
//       rateMY: 3000,
//     },
//     {
//       asalSG: "SGD",
//       rateSG: 9000,
//     },
//     {
//       asalJP: "JPY",
//       rateJP: 200,
//     },
//   ];

//   for (const data of mata_uang) {
//     let rateAwal = curr(data.rateAsal, data.rateID);
//     let rateAkhir = curr(rateAwal, rateTujuan);
//     data.hasil = rateAkhir;
//     // let dataKedua = check(dataPertama);
//     // data.bmi = Math.floor(dataPertama);
//     // data.kategori = dataKedua;
//   }

//   const asal = req.body.asal;
//   const rate = req.body.rate;
//   const rateAkhir = req.body.rateAkhir;

//   res.json({
//     asal: asal,
//     rate: rate,
//     rateAkhir: rateAkhir,
//   });
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
