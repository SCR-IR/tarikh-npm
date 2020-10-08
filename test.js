import jdf from './lib/date.js';


// console.log(jdf.miladi_to_shamsi(2020, 9, 16))

// console.log(jdf.miladi_be_shamsi(2020, 9, 16))



// console.log(jdf.julianDate_to_ghamari_0(2460628.5))

// console.log(jdf)

let out = "";
let sum = 0;
let nOut = "";
let [y, m, d] = [0, 0, 0];
// console.log(y, m, d);

// for (let i = 0, n = 1; i < (365 * 3000); i++, n++) {
//     let [iy, im, id] = jdf.julianDate_to_ghamari_0(2349600.5 - (1140 * 364) + i);
//     if (iy !== y) {
//         //out += "\n" + ((((y + 3) % 30) % 11) % 3) + ((sum === 355) ? "   " : "***") + " \t";
//         if (sum === 355 && iy<100) nOut += "," + (iy);
//         if (
//             (sum === 355 && ((((y + 3) % 30) % 11) % 3) !== 0) ||
//             (sum !== 355 && ((((y + 3) % 30) % 11) % 3) === 0)
//         ) nOut += "," + iy;
//         sum = 0;
//         y = iy;
//     }
//     if (im !== m) {
//         //out += " \t" + d;
//         sum += d;
//         m = im;
//     }
//     d = id;
// }
console.log(jdf.miladi_to_ghamari(400, 1, 1))
// console.log(jdf.ghamari_to_miladi(1, 1, 1))
// console.log(jdf.ghamari_to_julianDate_0(1, 1, 1))
// console.log(jdf.ghamari_to_julianDate_0(660, 1, 1))
// console.log(jdf.miladi_to_julianDate(1, 1, 1))
// console.log(jdf.julianDate_to_ghamari_0(227014 + 1948439.5))

for (let i = 0, n = 1; i < (365 * 10000); i++, n++) {
  let [iy, im, id] = jdf.julianDate_to_ghamari_0(2349600.5 - (1102 * 364) + i);
  let julianDate0 = jdf.ghamari_to_julianDate_0(iy, im, id);
  let julianDate1 = jdf.ghamari_to_julianDate_1(iy, im, id);
  if (julianDate0 !== julianDate1) {
    out += "\nErr: " + iy + "/" + im + "/" + id + ' : ' + julianDate0 + '!==' + julianDate1;
    break;
  }
  if (iy !== y) {
    //out += "\n" + ((((y + 3) % 30) % 11) % 3) + ((sum === 355) ? "   " : "***") + " \t";
    if (sum === 355 && iy < 100) nOut += "," + (iy);
    if (
      (sum === 355 && ((((y + 3) % 30) % 11) % 3) !== 0) ||
      (sum !== 355 && ((((y + 3) % 30) % 11) % 3) === 0)
    ) nOut += "," + iy;
    sum = 0;
    y = iy;
  }
  if (im !== m) {
    //out += " \t" + d;
    sum += d;
    m = im;
  }
  d = id;
}


for (let i = 0, n = 1; i < (365 * 10000); i++, n++) {
  let [iy, im, id] = jdf.julianDate_to_ghamari_0(2349600.5 - (1102 * 364) + i);
  let [iy1, im1, id1] = jdf.julianDate_to_ghamari_1(2349600.5 - (1102 * 364) + i);

  if (iy !== iy1 || im !== im1 || id !== id1) {
    out += "\njD_to_gh: " + iy + "/" + im + "/" + id + ' : ' + iy1 + "/" + im1 + "/" + id1;
    break;
  }
  if (iy !== y) {
    //out += "\n" + ((((y + 3) % 30) % 11) % 3) + ((sum === 355) ? "   " : "***") + " \t";
    if (sum === 355 && iy < 100) nOut += "," + (iy);
    if (
      (sum === 355 && ((((y + 3) % 30) % 11) % 3) !== 0) ||
      (sum !== 355 && ((((y + 3) % 30) % 11) % 3) === 0)
    ) nOut += "," + iy;
    sum = 0;
    y = iy;
  }
  if (im !== m) {
    //out += " \t" + d;
    sum += d;
    m = im;
  }
  d = id;
}


console.log(out + "\n\n\n" + nOut, y, m, d);




function bench(func, title, loop = 50000000) {
  let t = Date.now();
  for (let i = 0; i < loop; i++) {
    func();
  }
  console.log(title + ' bench: ', Date.now() - t);
}


// bench(()=>jdf.julianDate_to_ghamari_0(1948472.5),'f0');
// bench(()=>jdf.julianDate_to_ghamari_1(1948472.5),'f1');

// bench(()=>jdf.julianDate_to_ghamari_0(1948472.5),'f0');
// bench(()=>jdf.julianDate_to_ghamari_1(1948472.5),'f1');

// bench(()=>jdf.julianDate_to_ghamari_0(1948472.5),'f0');
// bench(()=>jdf.julianDate_to_ghamari_1(1948472.5),'f1');

// bench(()=>jdf.julianDate_to_ghamari_0(1948472.5),'f0');
// bench(()=>jdf.julianDate_to_ghamari_1(1948472.5),'f1');