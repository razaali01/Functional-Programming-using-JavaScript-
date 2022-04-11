// Start with an array called inputtable. The array should have numbers between
// 1 and 10.
// #1
const inputtable = [1,2,3,4,5,6,7,8,9,10];
// #2
// function to multiply everything in inputtable by 5
function MultOfFive(x)
{
  return x*5;
}
// function to multiply everything in inputtable by 13
function MultOfThirteen(x)
{
  return x*13;
}
// function to square in inputtable
function Squared(x)
{
  return x*x;
}
// Set of multiples of 5 between 1 and 51
const fiveTable = inputtable.map(MultOfFive);
// Set of multiples of 13 between 1 and 131
const thirteenTable = inputtable.map(MultOfThirteen);
// Set of squares of the numbers in inputtable
const squaresTable = inputtable.map(Squared);
console.log("\n2a\t" + fiveTable);
console.log("\n2b\t" + thirteenTable);
console.log("\n2c\t" + squaresTable);
// #3
const Array1to100 = Array.from({length:100},(_, i) => i + 1);
// Get the odd multiples of 5 between 1 and 100. 5, 15
function OddMultOf5(x)
{
  if(x%2 != 0)
  {
    if(x%5 == 0)
    {
      return x;
    }
  }
}
// #4
// Get the even multiples of 7 between 1 and 100
function EvenMultOf7(x)
{
  if(x%2 == 0)
  {
    if(x%7 == 0)
    {
      return x;
    }
  }
}
// #4
// Get the sum of even multiples of 7 between 1 and 100
function Sumof7(sum, x)
{
  return sum + x;
}
const OddMultOf5_100 = Array1to100.filter(OddMultOf5)
const SOfEvenMultOf7 = Array1to100.filter(EvenMultOf7).reduce(Sumof7)
console.log("\n3)\t"+ OddMultOf5_100);
console.log("\n4)\t"+ SOfEvenMultOf7);
// #5
// Use currying to rewrite the function below: -
// function cylinder_volume(r, h)
function cylinder_volume(r)
{
  return function (h)
  {
    var volume = 0;
    volume = 3.14*r*r*h;
    return volume;
  }
}
const volume5a = cylinder_volume(5)(10);
const volume5b = cylinder_volume(5)(17);
const volume5c = cylinder_volume(5)(11);
console.log("\n5a)\t"+ volume5a);
console.log("\n5b)\t"+ volume5b);
console.log("\n5c)\t"+ volume5c);
 // #6
makeTag = function(beginTag, endTag)
{
  return function(textcontent)
  {
    return beginTag +textcontent +endTag;
  }
}
var P1, P2, P3;
var th, td;
var P1Info, P2Info, P3Info;
var trP1, trP2, trP3;
P1 = ["Raza", "Ali", 21];
P2 = ["Alex", "Honnold", 36];
P3 = ["Adam", "Ondra", 29];
th = makeTag("\n<th>", "</th>");
td = makeTag("\n<td>", "</td>");
P1Info = makeTag(th(P1[0]), th(P1[2]))(th(P1[1]));
P2Info = makeTag(td(P2[0]), td(P2[2]))(td(P2[1]));
P3Info = makeTag(td(P3[0]), td(P3[2]))(td(P3[1]));
trP1 = makeTag("\n<tr>","\n<tr>")(P1Info);
trP2 = makeTag("\n<tr>","\n<tr>")(P2Info);
trP3 = makeTag("\n<tr>","\n<tr>")(P3Info);
const tr3 = makeTag(trP1, trP2)(trP3);
const table = makeTag("<table>","\n<table>")(tr3);
console.log("\n"+ table);
