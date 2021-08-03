// exercise 10//

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

// // exercise 12
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
//   let name = req.query.name;
//   let berat = req.query.berat;
//   let tinggi = req.query.tinggi;
//   const bmi = BMI(berat, tinggi);
//   const kategori = check(bmi);

//   res.json({
//     name: name,
//     berat: berat,
//     tinggi: tinggi,
//     bmi: bmi,
//     kategori: kategori,
//   });
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// exercise 13
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
//   let name = req.body.name;
//   let berat = req.body.berat;
//   let tinggi = req.body.tinggi;
//   const bmi = BMI(berat, tinggi);
//   const kategori = check(bmi);

//   res.json({
//     name: name,
//     tinggi: tinggi,
//     berat: berat,
//     bmi: bmi,
//     kategori: kategori,
//   });
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// exercise testing menggunakan jest

function BMI(berat, tinggi) {
  let hasil = Math.floor(berat / (tinggi * tinggi));
  return hasil;
}

function check(data) {
  if (data < 18.5) {
    return "oke";
  } else if (data >= 18.5 && data < 24.9) {
    return "mantap";
  } else if (data >= 25 && data < 29.9) {
    return "besar";
  } else {
    return "obes";
  }
}

module.exports = {
  BMI,
  check,
};
