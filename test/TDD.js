

import TarikhObject, * as lib from '../lib/date1.js';


/* Long test*/
const TEST_START_JD = 1721426; //=year:1 Gregorian (=year:-622 Persian)
const TEST_END_JD = 3774532; //=year:5000 Persian

/* Short test*/
// const TEST_START_JD = 2378211; //=year:1178 Persian
// const TEST_END_JD = 2544760; //=year:1633 Persian



let Error = false;
let loadingA = ["∙···", "·∙··", "··∙·", "···∙"];
let loadingI = 0;
function loading(p = '', c = 1) {
  process.stdout.write("\r\x1b[" + c + "m" + loadingA[loadingI++] + p + " \x1b[0m");
  loadingI &= 3;
}


function err(errCode, title, ...errLog) {
  console.log('\n\x1b[43m Err: ', errCode, '\x1b[0m\n\x1b[35m', title, '\x1b[0m\n', ...errLog);
  Error = true;
}






/* Err 1.x ========================================================= */
function inOutCheck(func, data) {
  for (let [_in, _out] of data) {
    let check = true;
    _in = (Array.isArray(_in)) ? [..._in] : [_in];
    let out = func.apply(null, _in);
    if (Array.isArray(_out)) {
      for (let i in _out) {
        if (_out[i] !== out[i]) check = false;
      }
    } else if (_out !== out) {
      check = false;
    }
    if (!check) err(
      '1.x', func.name,
      '__in__: (' + ((Array.isArray(_in)) ? _in.join(' ,') : [_in]) + ')',
      '\n _True_: ', _out,
      '\n return: ', out
    );
  }
}
loading(' %0');


inOutCheck(lib.julianDayFloat_to_julianDay, [
  [2459137, 2459137],
  [2459137.1896623266, 2459137],
  [2459137.5, 2459138],
  [2459137.5896623266, 2459138],
  [2459137.999, 2459138],
  [2459138.001, 2459138],
]);

inOutCheck(lib.julianDay_to_julianDayFloat, [
  [2459137, 2459136.5],
  [2459138, 2459137.5],
  [2459137.1, 2459136.5],
  [2459138.1, 2459137.5],
  [2459138.5, 2459137.5],
  [2459138.9, 2459137.5],
]);


inOutCheck(lib.gregorian_to_julianDay, [
  [[2020, 10, 14], 2459137],
  [[2020, 12, 31], 2459215],//end year
  [[2021, 1, 1], 2459216],//start year
  [[2020, 2, 28], 2458908],//pre leap
  [[2020, 2, 29], 2458909],//leap
  [[2020, 3, 1], 2458910],//post leap
  [[2021, 2, 28], 2459274],//not pre leap
  [[2021, 3, 1], 2459275],//not post leap
]);

inOutCheck(lib.gregorian_to_julianDayFloat, [
  [[2020, 10, 14], 2459137 - 0.5],
  [[2020, 12, 31], 2459215 - 0.5],//end year
  [[2021, 1, 1], 2459216 - 0.5],//start year
  [[2020, 2, 28], 2458908 - 0.5],//pre leap
  [[2020, 2, 29], 2458909 - 0.5],//leap
  [[2020, 3, 1], 2458910 - 0.5],//post leap
  [[2021, 2, 28], 2459274 - 0.5],//not pre leap
  [[2021, 3, 1], 2459275 - 0.5],//not post leap
]);


inOutCheck(lib.persian_to_julianDay, [
  [[1357, 11, 22], 2443916],
  [[1398, 6, 30], 2458748],
  [[1398, 6, 31], 2458749],
  [[1398, 7, 1], 2458750],
  [[1398, 7, 30], 2458779],
  [[1398, 8, 1], 2458780],
  //
  [[1398, 12, 28], 2458927],//not pre leap
  [[1398, 12, 29], 2458928],//end year & not leap
  [[1399, 1, 1], 2458929],//start year & not post leap
  //
  [[1399, 12, 29], 2459293],//pre leap
  [[1399, 12, 30], 2459294],//end year & leap
  [[1400, 1, 1], 2459295],//strat year & post leap
  //
  [[1403, 12, 29], 2460754],//pre leap
  [[1403, 12, 30], 2460755],//end year & leap
  [[1404, 1, 1], 2460756],//strat year & post leap
  //
  [[1404, 12, 28], 2461119],//not pre leap
  [[1404, 12, 29], 2461120],//end year & not leap
  [[1405, 1, 1], 2461121],//start year & not post leap
  //
  [[1408, 12, 29], 2462580],//pre **leap
  [[1408, 12, 30], 2462581],//end year & **leap
  [[1409, 1, 1], 2462582],//strat year & post **leap
  //
  [[1412, 12, 29], 2464041],//pre leap
  [[1412, 12, 30], 2464042],//end year & leap
  [[1413, 1, 1], 2464043],//strat year & post leap
]);

inOutCheck(lib.persian_to_julianDayFloat, [
  [[1357, 11, 22], 2443916 - 0.5],
  [[1398, 6, 30], 2458748 - 0.5],
  [[1398, 6, 31], 2458749 - 0.5],
  [[1398, 7, 1], 2458750 - 0.5],
  [[1398, 7, 30], 2458779 - 0.5],
  [[1398, 8, 1], 2458780 - 0.5],
  //
  [[1398, 12, 28], 2458927 - 0.5],//not pre leap
  [[1398, 12, 29], 2458928 - 0.5],//end year & not leap
  [[1399, 1, 1], 2458929 - 0.5],//start year & not post leap
  //
  [[1399, 12, 29], 2459293 - 0.5],//pre leap
  [[1399, 12, 30], 2459294 - 0.5],//end year & leap
  [[1400, 1, 1], 2459295 - 0.5],//strat year & post leap
  //
  [[1403, 12, 29], 2460754 - 0.5],//pre leap
  [[1403, 12, 30], 2460755 - 0.5],//end year & leap
  [[1404, 1, 1], 2460756 - 0.5],//strat year & post leap
  //
  [[1404, 12, 28], 2461119 - 0.5],//not pre leap
  [[1404, 12, 29], 2461120 - 0.5],//end year & not leap
  [[1405, 1, 1], 2461121 - 0.5],//start year & not post leap
  //
  [[1408, 12, 29], 2462580 - 0.5],//pre **leap
  [[1408, 12, 30], 2462581 - 0.5],//end year & **leap
  [[1409, 1, 1], 2462582 - 0.5],//strat year & post **leap
  //
  [[1412, 12, 29], 2464041 - 0.5],//pre leap
  [[1412, 12, 30], 2464042 - 0.5],//end year & leap
  [[1413, 1, 1], 2464043 - 0.5],//strat year & post leap
]);


inOutCheck(lib.islamic_to_julianDay, [
  [[1400, 8, 29], 2444434],//out of range
  [[1400, 9, 1], 2444435],//out of range
  [[1400, 9, 29], 2444463],//out of range
  [[1400, 9, 30], 2444464],//out of range
  [[1400, 10, 1], 2444465],//out of range
  //
  [[1426, 12, 29], 2453765],//pre range (out)
  [[1426, 12, 30], 2453766],//pre range (out)
  [[1427, 1, 1], 2453767],//start range
  [[1427, 1, 2], 2453768],//in range
  //
  [[1441, 12, 29], 2459081],
  [[1441, 12, 30], 2459082],//end leapYear
  [[1442, 1, 1], 2459083],
  //
  [[1442, 12, 29], 2459436],//end notLeapYear
  [[1443, 1, 1], 2459437],
  //
  [[1430, 8, 29], 2455065],
  [[1430, 9, 1], 2455066],
  [[1430, 9, 29], 2455094],
  [[1430, 10, 1], 2455095],
  //
  [[1435, 8, 29], 2456836],
  [[1435, 8, 30], 2456837],
  [[1435, 9, 1], 2456838],
  [[1435, 9, 29], 2456866],
  [[1435, 9, 30], 2456867],
  [[1435, 10, 1], 2456868],
  //
  [[1442, 8, 30], 2459318],
  [[1442, 9, 1], 2459319],
  [[1442, 9, 29], 2459347],
  [[1442, 10, 1], 2459348],
  //
  [[1443, 8, 29], 2459671],
  [[1443, 9, 1], 2459672],
  [[1443, 9, 29], 2459700],
  [[1443, 9, 30], 2459701],
  [[1443, 10, 1], 2459702],
  //
  [[1472, 8, 29], 2469948],//out of range
  [[1472, 9, 1], 2469949],//out of range
  [[1472, 9, 29], 2469977],//out of range
  [[1472, 9, 30], 2469978],//out of range
  [[1472, 10, 1], 2469979],//out of range
]);

inOutCheck(lib.islamic_to_julianDayFloat, [
  [[1400, 8, 29], 2444434 - 0.5],//out of range
  [[1400, 9, 1], 2444435 - 0.5],//out of range
  [[1400, 9, 29], 2444463 - 0.5],//out of range
  [[1400, 9, 30], 2444464 - 0.5],//out of range
  [[1400, 10, 1], 2444465 - 0.5],//out of range
  //
  [[1426, 12, 29], 2453765 - 0.5],//pre range (out)
  [[1426, 12, 30], 2453766 - 0.5],//pre range (out)
  [[1427, 1, 1], 2453767 - 0.5],//start range
  [[1427, 1, 2], 2453768 - 0.5],//in range
  //
  [[1441, 12, 29], 2459081 - 0.5],
  [[1441, 12, 30], 2459082 - 0.5],//end leapYear
  [[1442, 1, 1], 2459083 - 0.5],
  //
  [[1442, 12, 29], 2459436 - 0.5],//end notLeapYear
  [[1443, 1, 1], 2459437 - 0.5],
  //
  [[1430, 8, 29], 2455065 - 0.5],
  [[1430, 9, 1], 2455066 - 0.5],
  [[1430, 9, 29], 2455094 - 0.5],
  [[1430, 10, 1], 2455095 - 0.5],
  //
  [[1435, 8, 29], 2456836 - 0.5],
  [[1435, 8, 30], 2456837 - 0.5],
  [[1435, 9, 1], 2456838 - 0.5],
  [[1435, 9, 29], 2456866 - 0.5],
  [[1435, 9, 30], 2456867 - 0.5],
  [[1435, 10, 1], 2456868 - 0.5],
  //
  [[1442, 8, 30], 2459318 - 0.5],
  [[1442, 9, 1], 2459319 - 0.5],
  [[1442, 9, 29], 2459347 - 0.5],
  [[1442, 10, 1], 2459348 - 0.5],
  //
  [[1443, 8, 29], 2459671 - 0.5],
  [[1443, 9, 1], 2459672 - 0.5],
  [[1443, 9, 29], 2459700 - 0.5],
  [[1443, 9, 30], 2459701 - 0.5],
  [[1443, 10, 1], 2459702 - 0.5],
  //
  [[1472, 8, 29], 2469948 - 0.5],//out of range
  [[1472, 9, 1], 2469949 - 0.5],//out of range
  [[1472, 9, 29], 2469977 - 0.5],//out of range
  [[1472, 9, 30], 2469978 - 0.5],//out of range
  [[1472, 10, 1], 2469979 - 0.5],//out of range
]);


inOutCheck(lib.islamicA_to_julianDay, [
  [[1400, 8, 29], 2444434],//out of hilali range
  [[1400, 9, 1], 2444435],//out of hilali range
  [[1400, 9, 29], 2444463],//out of hilali range
  [[1400, 9, 30], 2444464],//out of hilali range
  [[1400, 10, 1], 2444465],//out of hilali range
  //
  [[1426, 12, 29], 2453765],//pre hilali range (out)
  [[1426, 12, 30], 2453766],//pre hilali range (out)
  [[1427, 1, 1], 2453767],//start hilali range
  [[1427, 1, 2], 2453768],//in hilali range
  //
  [[1441, 12, 29], 2459081],//end notLeapYear
  [[1442, 1, 1], 2459082],
  //
  [[1442, 12, 29], 2459435],
  [[1442, 12, 30], 2459436],//end LeapYear
  [[1443, 1, 1], 2459437],
  //
  [[1430, 8, 29], 2455065],
  [[1430, 9, 1], 2455066],
  [[1430, 9, 29], 2455094],
  [[1430, 9, 30], 2455095],
  [[1430, 10, 1], 2455096],
  //
  [[1435, 8, 29], 2456837],
  [[1435, 9, 1], 2456838],
  [[1435, 9, 29], 2456866],
  [[1435, 9, 30], 2456867],
  [[1435, 10, 1], 2456868],
  //
  [[1442, 8, 29], 2459317],
  [[1442, 9, 1], 2459318],
  [[1442, 9, 29], 2459346],
  [[1442, 9, 30], 2459347],
  [[1442, 10, 1], 2459348],
  //
  [[1443, 8, 29], 2459672],
  [[1443, 9, 1], 2459673],
  [[1443, 9, 29], 2459701],
  [[1443, 9, 30], 2459702],
  [[1443, 10, 1], 2459703],
  //
  [[1472, 8, 29], 2469948],//out of hilali range
  [[1472, 9, 1], 2469949],//out of hilali range
  [[1472, 9, 29], 2469977],//out of hilali range
  [[1472, 9, 30], 2469978],//out of hilali range
  [[1472, 10, 1], 2469979],//out of hilali range
]);

inOutCheck(lib.islamicA_to_julianDayFloat, [
  [[1400, 8, 29], 2444434 - 0.5],//out of hilali range
  [[1400, 9, 1], 2444435 - 0.5],//out of hilali range
  [[1400, 9, 29], 2444463 - 0.5],//out of hilali range
  [[1400, 9, 30], 2444464 - 0.5],//out of hilali range
  [[1400, 10, 1], 2444465 - 0.5],//out of hilali range
  //
  [[1426, 12, 29], 2453765 - 0.5],//pre hilali range (out)
  [[1426, 12, 30], 2453766 - 0.5],//pre hilali range (out)
  [[1427, 1, 1], 2453767 - 0.5],//start hilali range
  [[1427, 1, 2], 2453768 - 0.5],//in hilali range
  //
  [[1441, 12, 29], 2459081 - 0.5],//end notLeapYear
  [[1442, 1, 1], 2459082 - 0.5],
  //
  [[1442, 12, 29], 2459435 - 0.5],
  [[1442, 12, 30], 2459436 - 0.5],//end LeapYear
  [[1443, 1, 1], 2459437 - 0.5],
  //
  [[1430, 8, 29], 2455065 - 0.5],
  [[1430, 9, 1], 2455066 - 0.5],
  [[1430, 9, 29], 2455094 - 0.5],
  [[1430, 9, 30], 2455095 - 0.5],
  [[1430, 10, 1], 2455096 - 0.5],
  //
  [[1435, 8, 29], 2456837 - 0.5],
  [[1435, 9, 1], 2456838 - 0.5],
  [[1435, 9, 29], 2456866 - 0.5],
  [[1435, 9, 30], 2456867 - 0.5],
  [[1435, 10, 1], 2456868 - 0.5],
  //
  [[1442, 8, 29], 2459317 - 0.5],
  [[1442, 9, 1], 2459318 - 0.5],
  [[1442, 9, 29], 2459346 - 0.5],
  [[1442, 9, 30], 2459347 - 0.5],
  [[1442, 10, 1], 2459348 - 0.5],
  //
  [[1443, 8, 29], 2459672 - 0.5],
  [[1443, 9, 1], 2459673 - 0.5],
  [[1443, 9, 29], 2459701 - 0.5],
  [[1443, 9, 30], 2459702 - 0.5],
  [[1443, 10, 1], 2459703 - 0.5],
  //
  [[1472, 8, 29], 2469948 - 0.5],//out of hilali range
  [[1472, 9, 1], 2469949 - 0.5],//out of hilali range
  [[1472, 9, 29], 2469977 - 0.5],//out of hilali range
  [[1472, 9, 30], 2469978 - 0.5],//out of hilali range
  [[1472, 10, 1], 2469979 - 0.5],//out of hilali range
]);


inOutCheck(lib.check_persian, [
  [[-32768, 1, 1], false],//out of range
  [[32768, 1, 1], false],//out of range
  [[-32767, 1, 1], true],//in range
  [[32767, 1, 1], true],//in range
  [[0, 1, 1], true],//... -> Y:-1 -> Y:0 -> Y:1 -> ...
  [[0, 0, 0], false],//always: M:1-12 & D:1-[29|30|31]
  [[1, 1, 1], true],
  [[1400, 0, 0], false],
  [[1400, 1, 0], false],
  [[1400, 0, 1], false],
  [[1400, 13, 1], false],
  [[1400, 6, 32], false],
  [[1400, 6, -1], false],
  [[1400, -6, -1], false],
  [[1400, -1, 1], false],
  //
  [[1399, 1, 1], true],
  [[1399, 1, 31], true],
  [[1399, 6, 31], true],
  [[1399, 7, 1], true],
  [[1399, 7, 14], true],
  [[1399, 7, 30], true],
  [[1399, 7, 31], false],
  [[1400, 12, 29], true],
  //
  [[1374, 12, 30, false], true],//not leap, but strict=false (OFF)
  [[1374, 12, 31, false], false],//strict=false, but day>30
  [[1374, 12, 29, false], true],//day: in strict range:29-30
  [[1374, 10, 29, false], true],//strict range:29-30 -> Only month=12
  [[1100, 12, 30, true], true],//range: (year<1178 || year>1633) : Always strict=false
  [[1200, 12, 30], false],//strictDefaultValue= 1178-1633:true , other:false
  //
  [[1370, 12, 30], true],//leap
  [[1374, 12, 30], false],
  [[1375, 12, 30], true],//**leap
  [[1376, 12, 30], false],
  [[1379, 12, 30], true],//leap
  //
  [[1398, 12, 30], false],
  [[1399, 12, 30], true],//leap
  [[1400, 12, 30], false],
  [[1401, 12, 30], false],
  [[1402, 12, 30], false],
  [[1403, 12, 30], true],//leap
  [[1404, 12, 30], false],
  [[1405, 12, 30], false],
  [[1406, 12, 30], false],
  [[1407, 12, 30], false],
  [[1408, 12, 30], true],//**leap
  [[1409, 12, 30], false],
]);

inOutCheck(lib.is_persian_Leap, [
  [1210, true],//**leap
  [1370, true],//leap
  [1374, false],
  [1375, true],//**leap
  [1376, false],
  [1379, true],//leap
  [1398, false],
  [1399, true],//leap
  [1400, false],
  [1401, false],
  [1402, false],
  [1403, true],//leap
  [1404, false],
  [1405, false],
  [1406, false],
  [1407, false],
  [1408, true],//**leap
  [1409, false],
  [1441, true],//**leap
]);


// inOutCheck(jdf., [
//   [, ],
//   [, ],
//   [, ],
//   [, ],
//   [, ],
//   [, ],
// ]);

loading(' %1');
{//Convert Test

  for (let julianDay = TEST_START_JD; julianDay <= TEST_END_JD; julianDay++) {
    if (julianDay % 20000 === 0) loading(' %' + (1 + ~~((julianDay - TEST_START_JD) * 99 / (TEST_END_JD - TEST_START_JD))));
    let julianDayFloat = lib.julianDay_to_julianDayFloat(julianDay);

    /* Err 2.1.x ========================================================= */
    let julianDayFloatFromJulianDay = lib.julianDayFloat_to_julianDay(julianDayFloat);
    if (julianDay !== julianDayFloatFromJulianDay) {
      err(
        '2.1.1', 'julianDay_to_julianDayFloat\n julianDayFloat_to_julianDay',
        { julianDay, julianDayFloatFromJulianDay }
      );
      break;
    }

    /* Err 3.1.x ========================================================= */
    let persianFromJD = lib.julianDay_to_persian(julianDay);
    let persianFromJDFloat = lib.julianDayFloat_to_persian(julianDayFloat);

    if (!lib.check_persian(...persianFromJD) || !lib.check_persian(...persianFromJDFloat)) {
      err(
        '3.1.0', 'check_persian === false',
        { persianFromJD, persianFromJDFloat }
      );
      break;
    }

    if (persianFromJD.join() !== persianFromJDFloat.join()) {
      err(
        '3.1.1', 'julianDay_to_persian\n julianDay_to_persian',
        { persianFromJD, persianFromJDFloat }
      );
      break;
    }

    let jDFromPersian = lib.persian_to_julianDay(...persianFromJD);
    let jDFloatFromPersian = lib.persian_to_julianDayFloat(...persianFromJDFloat);
    if (jDFromPersian !== julianDay || jDFloatFromPersian !== julianDayFloat) {
      err(
        '3.1.2', 'persian_to_julianDay\n persian_to_julianDayFloat',
        { persianFromJD, persianFromJDFloat, jDFromPersian, julianDay, jDFloatFromPersian, julianDayFloat }
      );
      break;
    }


    /* Err 3.2.x ========================================================= */
    let gregorianFromJD = lib.julianDay_to_gregorian(julianDay);
    let gregorianFromJDFloat = lib.julianDayFloat_to_gregorian(julianDayFloat);

    if (!lib.check_gregorian(...gregorianFromJD) || !lib.check_gregorian(...gregorianFromJDFloat)) {
      err(
        '3.2.0', 'check_gregorian === false',
        { gregorianFromJD, gregorianFromJDFloat }
      );
      break;
    }

    if (gregorianFromJD.join() !== gregorianFromJDFloat.join()) {
      err(
        '3.2.1', 'julianDay_to_gregorian\n julianDay_to_gregorian',
        { gregorianFromJD, gregorianFromJDFloat }
      );
      break;
    }

    let jDFromGregorian = lib.gregorian_to_julianDay(...gregorianFromJD);
    let jDFloatFromGregorian = lib.gregorian_to_julianDayFloat(...gregorianFromJDFloat);
    if (jDFromGregorian !== julianDay || jDFloatFromGregorian !== julianDayFloat) {
      err(
        '3.2.2', 'gregorian_to_julianDay\n gregorian_to_julianDayFloat',
        { gregorianFromJD, gregorianFromJDFloat, jDFromGregorian, julianDay, jDFloatFromGregorian, julianDayFloat }
      );
      break;
    }


    /* Err 3.3.x ========================================================= */
    let islamicFromJD = lib.julianDay_to_islamic(julianDay);
    // if(islamicFromJD[1]==0)console.log(julianDay,islamicFromJD)
    let islamicFromJDFloat = lib.julianDayFloat_to_islamic(julianDayFloat);

    if (!lib.check_islamic(...islamicFromJD) || !lib.check_islamic(...islamicFromJDFloat)) {
      err(
        '3.3.0', 'check_islamic === false',
        { islamicFromJD, islamicFromJDFloat }
      );
      break;
    }

    if (islamicFromJD.join() !== islamicFromJDFloat.join()) {
      err(
        '3.3.1', 'julianDay_to_islamic\n julianDay_to_islamic',
        { islamicFromJD, islamicFromJDFloat }
      );
      break;
    }

    let jDFromIslamic = lib.islamic_to_julianDay(...islamicFromJD);
    let jDFloatFromIslamic = lib.islamic_to_julianDayFloat(...islamicFromJDFloat);
    if (jDFromIslamic !== julianDay || jDFloatFromIslamic !== julianDayFloat) {
      err(
        '3.3.2', 'islamic_to_julianDay\n islamic_to_julianDayFloat',
        { islamicFromJD, islamicFromJDFloat, jDFromIslamic, julianDay, jDFloatFromIslamic, julianDayFloat }
      );
      break;
    }


    /* Err 3.4.x ========================================================= */
    let islamicAFromJD = lib.julianDay_to_islamicA(julianDay);
    let islamicAFromJDFloat = lib.julianDayFloat_to_islamicA(julianDayFloat);

    if (!lib.check_islamicA(...islamicAFromJD) || !lib.check_islamicA(...islamicAFromJDFloat)) {
      err(
        '3.4.0', 'check_islamicA === false',
        { islamicAFromJD, islamicAFromJDFloat }
      );
      break;
    }

    if (islamicAFromJD.join() !== islamicAFromJDFloat.join()) {
      err(
        '3.4.1', 'julianDay_to_islamicA\n julianDay_to_islamicA',
        { islamicAFromJD, islamicAFromJDFloat }
      );
      break;
    }

    let jDFromIslamicA = lib.islamicA_to_julianDay(...islamicAFromJD);
    let jDFloatFromIslamicA = lib.islamicA_to_julianDayFloat(...islamicAFromJDFloat);
    if (jDFromIslamicA !== julianDay || jDFloatFromIslamicA !== julianDayFloat) {
      err(
        '3.4.2', 'islamicA_to_julianDay\n islamicA_to_julianDayFloat',
        { islamicAFromJD, islamicAFromJDFloat, jDFromIslamicA, julianDay, jDFloatFromIslamicA, julianDayFloat }
      );
      break;
    }


    /* Err 4.1.x ========================================================= */
    let persianFromGregorian = lib.gregorian_to_persian(...gregorianFromJD);
    let gregorianFromPersian = lib.persian_to_gregorian(...persianFromJD);
    if (
      persianFromJD.join() !== persianFromGregorian.join() ||
      gregorianFromJD.join() !== gregorianFromPersian.join()
    ) {
      err(
        '4.1.1', 'gregorian_to_persian\n persian_to_gregorian',
        { persianFromJD, persianFromGregorian, gregorianFromJD, gregorianFromPersian }
      );
      break;
    }


    /* Err 4.2.x ========================================================= */
    let islamicFromGregorian = lib.gregorian_to_islamic(...gregorianFromJD);
    let gregorianFromIslamic = lib.islamic_to_gregorian(...islamicFromJD);
    if (
      islamicFromJD.join() !== islamicFromGregorian.join() ||
      gregorianFromJD.join() !== gregorianFromIslamic.join()
    ) {
      err(
        '4.2.1', 'gregorian_to_islamic\n islamic_to_gregorian',
        { islamicFromJD, islamicFromGregorian, gregorianFromJD, gregorianFromIslamic }
      );
      break;
    }


    /* Err 4.3.x ========================================================= */
    let islamicAFromGregorian = lib.gregorian_to_islamicA(...gregorianFromJD);
    let gregorianFromIslamicA = lib.islamicA_to_gregorian(...islamicAFromJD);
    if (
      islamicAFromJD.join() !== islamicAFromGregorian.join() ||
      gregorianFromJD.join() !== gregorianFromIslamicA.join()
    ) {
      err(
        '4.3.1', 'gregorian_to_islamicA\n islamicA_to_gregorian',
        { islamicAFromJD, islamicAFromGregorian, gregorianFromJD, gregorianFromIslamicA }
      );
      break;
    }


    /* Err 4.4.x ========================================================= */
    let persianFromIslamic = lib.islamic_to_persian(...islamicFromJD);
    let islamicFromPersian = lib.persian_to_islamic(...persianFromJD);
    if (
      persianFromJD.join() !== persianFromIslamic.join() ||
      islamicFromJD.join() !== islamicFromPersian.join()
    ) {
      err(
        '4.4.1', 'islamic_to_persian\n persian_to_islamic',
        { persianFromJD, persianFromIslamic, islamicFromJD, islamicFromPersian }
      );
      break;
    }


    /* Err 4.5.x ========================================================== */
    let persianFromIslamicA = lib.islamicA_to_persian(...islamicAFromJD);
    let islamicAFromPersian = lib.persian_to_islamicA(...persianFromJD);
    if (
      persianFromJD.join() !== persianFromIslamicA.join() ||
      islamicAFromJD.join() !== islamicAFromPersian.join()
    ) {
      err(
        '4.5.1', 'islamicA_to_persian\n persian_to_islamicA',
        { persianFromJD, persianFromIslamicA, islamicAFromJD, islamicAFromPersian }
      );
      break;
    }


    /* Err 4.6.x ========================================================== */
    let islamicFromIslamicA = lib.islamicA_to_islamic(...islamicAFromJD);
    let islamicAFromIslamic = lib.islamic_to_islamicA(...islamicFromJD);
    if (
      islamicFromJD.join() !== islamicFromIslamicA.join() ||
      islamicAFromJD.join() !== islamicAFromIslamic.join()
    ) {
      err(
        '4.6.1', 'islamicA_to_islamic\n islamic_to_islamicA',
        { islamicFromJD, islamicFromIslamicA, islamicAFromJD, islamicAFromIslamic }
      );
      break;
    }






  }

}

































loading(' %100', 8);
console.log(
  (Error) ? `
 \x1b[5m \x1b[41m \x1b[33m \x1b[1m ↑   Error   ↑  \x1b[0m
` : `
            \x1b[42m \x1b[30m  ________   \x1b[0m
            \x1b[42m \x1b[30m |        |  \x1b[0m
            \x1b[42m \x1b[30m |   OK   |  \x1b[0m
            \x1b[42m \x1b[30m |________|  \x1b[0m
            \x1b[42m \x1b[30m             \x1b[0m
`
);
