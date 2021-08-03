const index2 = require("./index2");

test("BMIS", () => {
  expect(index2.BMI(50, 1.7)).toEqual(17);
  expect(index2.BMI(60, 1.7)).toEqual(20);
  expect(index2.BMI(75, 1.7)).toEqual(25);
  expect(index2.BMI(90, 1.7)).toEqual(31);
});

test("check", () => {
  expect(index2.check(17)).toEqual("oke");
  expect(index2.check(20)).toEqual("mantap");
  expect(index2.check(25)).toEqual("besar");
  expect(index2.check(31)).toEqual("obes");
});
