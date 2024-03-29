/** In the name of Allah = بسم الله الرّحمن الرّحیم
 * 
 * توابع کاربردی تبدیل تاریخ هجری شمسی، قمری و میلادی
 * Date Converter Functions: Persian, Islamic, Gregorian
 * 
 * @author : JDF.SCR.IR
 * @website : https://jdf.scr.ir
 * @license : GNU/LGPL
 * @version : 2.0.5
 * 
 * هجری‌شمسی ۱۱۷۸ تا ۱۶۳۳ : دوره‌ی انطباق کامل کبیسه‌بندی جلالی با اعتدال بهاری
*/



/** 
 * @param {number} gy - Gregorian Year
 * @param {number} gm - Gregorian Month
 * @param {number} gd - Gregorian Day
 * @return {number} JulianDay
 */
const gregorian_to_julianDay = (gy, gm, gd) => {
  var g_d_m, gy2, julianDay;
  g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  gy2 = (gm > 2) ? (gy + 1) : gy;
  julianDay = 1721059 + (365 * gy) + (~~((gy2 + 3) / 4)) - (~~((gy2 + 99) / 100)) + (~~((gy2 + 399) / 400)) + gd + g_d_m[gm - 1];
  /* 1721059 = gregorian_to_julianDay(0, 1, 1) - 1 */
  return julianDay - 0.5;
}


const persian_to_julianDay = (jy, jm, jd) => {
  jy += 1595;
  var julianDay = 1365392 + (365 * jy) + ((~~(jy / 33)) * 8) + (~~(((jy % 33) + 3) / 4)) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
  /* 1365392=1721059-355746+79 */
  return julianDay - 0.5;
}


const julianDay_to_persian = (julianDay) => {
  var jy, jm, jd, days;
  days = ~~(julianDay - 1365392.5);
  jy = -1595 + (33 * (~~(days / 12053)));
  days %= 12053;
  jy += 4 * (~~(days / 1461));
  days %= 1461;
  if (days > 365) {
    jy += ~~((days - 1) / 365);
    days = (days - 1) % 365;
  }
  jm = (days < 186) ? 1 + ~~(days / 31) : 7 + ~~((days - 186) / 30);
  jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));
  return [jy, jm, jd];
}


const julianDay_to_gregorian = (julianDay) => {
  var sal_a, gy, gm, gd, days;
  days = -~~(1721059.5 - julianDay);
  gy = 400 * (~~(days / 146097));
  days %= 146097;
  if (days > 36524) {
    gy += 100 * (~~(--days / 36524));
    days %= 36524;
    if (days >= 365) days++;
  }
  gy += 4 * (~~(days / 1461));
  days %= 1461;
  if (days > 365) {
    gy += ~~((days - 1) / 365);
    days = (days - 1) % 365;
  }
  gd = days + 1;
  sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (gm = 0; gm < 13, gd > sal_a[gm]; gm++) {
    gd -= sal_a[gm];
  }
  return [gy, gm, gd];
}


/**  Gregorian & Jalali (Hijri_Shamsi,Solar) Date Converter Functions
Author: JDF.SCR.IR =>> Download Full Version :  http://jdf.scr.ir/jdf
License: GNU/LGPL _ Open Source & Free :: Version: 2.81 : [2020=1399]
---------------------------------------------------------------------
355746=361590-5844 & 361590=(30*33*365)+(30*8) & 5844=(16*365)+(16/4)
355666=355746-79-1 & 355668=355746-79+1 &  1595=605+990 &  605=621-16
990=30*33 & 12053=(365*33)+(32/4) & 36524=(365*100)+(100/4)-(100/100)
1461=(365*4)+(4/4) & 146097=(365*400)+(400/4)-(400/100)+(400/400)  */

/** تبدیل تاریخ میلادی به هجری شمسی
 * 
 * @param {number} gy - GregorianYear: Int
 * @param {number} gm - GregorianMonth: Int
 * @param {number} gd - GregorianDay: Int
 * 
 * @return {[number, number, number]} [PersianYear: Int, PersianMonth: Int, PersianDay: Int]: Array
 */
const gregorian_to_persian = (gy, gm, gd) => {
  var g_d_m, jy, jm, jd, gy2, days;
  g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  gy2 = (gm > 2) ? (gy + 1) : gy;
  days = 355666 + (365 * gy) + ~~((gy2 + 3) / 4) - ~~((gy2 + 99) / 100) + ~~((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
  jy = -1595 + (33 * ~~(days / 12053));
  days %= 12053;
  jy += 4 * ~~(days / 1461);
  days %= 1461;
  if (days > 365) {
    jy += ~~((days - 1) / 365);
    days = (days - 1) % 365;
  }
  if (days < 186) {
    jm = 1 + ~~(days / 31);
    jd = 1 + (days % 31);
  } else {
    jm = 7 + ~~((days - 186) / 30);
    jd = 1 + ((days - 186) % 30);
  }
  return [jy, jm, jd];
}


/** تبدیل تاریخ هجری شمسی به میلادی
 * 
 * @param {number} gy - PersianYear: Int
 * @param {number} gm - PersianMonth: Int
 * @param {number} gd - PersianDay: Int
 * 
 * @return {[number, number, number]} [GregorianYear: Int, GregorianMonth: Int, GregorianDay: Int]: Array
 */
const persian_to_gregorian = (jy, jm, jd) => {
  var sal_a, gy, gm, gd, days;
  jy += 1595;
  days = -355668 + (365 * jy) + (~~(jy / 33) * 8) + ~~(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
  gy = 400 * ~~(days / 146097);
  days %= 146097;
  if (days > 36524) {
    gy += 100 * ~~(--days / 36524);
    days %= 36524;
    if (days >= 365) days++;
  }
  gy += 4 * ~~(days / 1461);
  days %= 1461;
  if (days > 365) {
    gy += ~~((days - 1) / 365);
    days = (days - 1) % 365;
  }
  gd = days + 1;
  sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
  return [gy, gm, gd];
}


// --Old Function
export const islamicA0_to_julianDay = (iy, im, id) => {
  return (id + Math.ceil(29.5 * (im - 1)) + ((iy - 1) * 354) + Math.floor((3 + (11 * iy)) / 30) + 1948439.5) - 1;
}

// --Old Function
export const julianDay_to_islamicA0 = (julianDay) => {
  var iy, im, id;
  julianDay = Math.floor(julianDay) + 0.5;
  iy = Math.floor(((30 * (julianDay - 1948439.5)) + 10646) / 10631);
  im = Math.min(12, Math.ceil((julianDay - (29 + islamicA0_to_julianDay(iy, 1, 1))) / 29.5) + 1);
  id = (julianDay - islamicA0_to_julianDay(iy, im, 1)) + 1;
  return [iy, im, id];
}


const islamicA_to_julianDay = (iy, im, id) => {
  iy += 990;
  return (id + ~~((29.5 * (im - 1)) + 0.5) + ((iy - 1) * 354) + ~~((3 + (iy * 11)) / 30) + 1597615.5);
  //1714556.5=1948439.5 - 1-233882
  //1597615.5=1714556.5-116941
}


const julianDay_to_islamicA = (julianDay) => {
  var iy, im, id, tmp;
  julianDay = ~~(julianDay) + 0.5 + 350823;//350823d=990y
  iy = ~~(((30 * (julianDay - 1948439.5)) + 10646) / 10631);
  tmp = julianDay - (1948439.5 + ((iy - 1) * 354) + ~~((3 + (11 * iy)) / 30));
  iy -= 990;
  im = ~~(((tmp - 29) / 29.5) + 1.99);
  if (im > 12) im = 12;
  id = 1 + tmp - ~~((29.5 * (im - 1)) + 0.5);
  return [iy, im, id];
}

/** تبدیل تاریخ میلادی به هجری قمری هلالی - طبق رؤیت ماه ایران
 * 
 * @param {number} gy - GregorianYear: Int
 * @param {number} gm - GregorianMonth: Int
 * @param {number} gd - GregorianDay: Int
 * 
 * @return {[number, number, number]} [IslamicYear: Int, IslamicMonth: Int, IslamicDay: Int]: Array
 */
const gregorian_to_islamic = (gy, gm, gd) => {
  return julianDay_to_islamic(gregorian_to_julianDay(gy, gm, gd));
}

/** تبدیل تاریخ میلادی به هجری قمری الگوریتمی
 * 
 * @param {number} gy - GregorianYear: Int
 * @param {number} gm - GregorianMonth: Int
 * @param {number} gd - GregorianDay: Int
 * 
 * @return {[number, number, number]} [IslamicAYear: Int, IslamicAMonth: Int, IslamicADay: Int]: Array
 */
const gregorian_to_islamicA = (gy, gm, gd) => {
  return julianDay_to_islamicA(gregorian_to_julianDay(gy, gm, gd));
}

/** تبدیل تاریخ هجری قمری هلالی به میلادی - طبق رؤیت ماه ایران
 * 
 * @param {number} gy - IslamicYear: Int
 * @param {number} gm - IslamicMonth: Int
 * @param {number} gd - IslamicDay: Int
 * 
 * @return {[number, number, number]} [GregorianYear: Int, GregorianMonth: Int, GregorianDay: Int]: Array
 */
const islamic_to_gregorian = (iy, im, id) => {
  return julianDay_to_gregorian(islamic_to_julianDay(iy, im, id));
}

/** تبدیل تاریخ هجری قمری الگوریتمی به میلادی
 * 
 * @param {number} gy - IslamicAYear: Int
 * @param {number} gm - IslamicAMonth: Int
 * @param {number} gd - IslamicADay: Int
 * 
 * @return {[number, number, number]} [GregorianYear: Int, GregorianMonth: Int, GregorianDay: Int]: Array
 */
const islamicA_to_gregorian = (iy, im, id) => {
  return julianDay_to_gregorian(islamicA_to_julianDay(iy, im, id));
}

/** تبدیل تاریخ هجری شمسی (جلالی) به هجری قمری هلالی - طبق رؤیت ماه ایران
 * 
 * @param {number} gy - PersianYear: Int
 * @param {number} gm - PersianMonth: Int
 * @param {number} gd - PersianDay: Int
 * 
 * @return {[number, number, number]} [IslamicYear: Int, IslamicMonth: Int, IslamicDay: Int]: Array
 */
const persian_to_islamic = (jy, jm, jd) => {
  return julianDay_to_islamic(persian_to_julianDay(jy, jm, jd));
}

/** تبدیل تاریخ هجری هجری شمسی به قمری الگوریتمی
 * 
 * @param {number} gy - PersianAYear: Int
 * @param {number} gm - PersianAMonth: Int
 * @param {number} gd - PersianADay: Int
 * 
 * @return {[number, number, number]} [IslamicAYear: Int, IslamicAMonth: Int, IslamicADay: Int]: Array
 */
const persian_to_islamicA = (jy, jm, jd) => {
  return julianDay_to_islamicA(persian_to_julianDay(jy, jm, jd));
}

/** تبدیل تاریخ هجری شمسی (جلالی) به هجری قمری هلالی - طبق رؤیت ماه ایران
 * 
 * @param {number} gy - IslamicYear: Int
 * @param {number} gm - IslamicMonth: Int
 * @param {number} gd - IslamicDay: Int
 * 
 * @return {[number, number, number]} [PersianYear: Int, PersianMonth: Int, PersianDay: Int]: Array
 */
const islamic_to_persian = (iy, im, id) => {
  return julianDay_to_persian(islamic_to_julianDay(iy, im, id));
}

/** تبدیل تاریخ هجری قمری الگوریتمی به هجری شمسی
 * 
 * @param {number} gy - IslamicAYear: Int
 * @param {number} gm - IslamicAMonth: Int
 * @param {number} gd - IslamicADay: Int
 * 
 * @return {[number, number, number]} [PersianYear: Int, PersianMonth: Int, PersianDay: Int]: Array
 */
const islamicA_to_persian = (iy, im, id) => {
  return julianDay_to_persian(islamicA_to_julianDay(iy, im, id));
}



// Private
// https://github.com/ilius/starcal/blob/master/scal3/cal_types/hijri-monthes.json
const ghamariMonths = {
  startYear: 1427,/* =dim:firstYear */
  startJd: 2453766.5,/* =islamicA_to_julianDay(startYear,1,1) */

  endYear: 1464,/* =dim:lastYear */
  endJd: 2467231.5,/* =islamicA_to_julianDate(endYear+1,1,1)-1 */

  dim: {
    1427: [355, 30, 29, 29, 30, 29, 30, 30, 30, 30, 29, 29, 30],
    1428: [354, 29, 30, 29, 29, 29, 30, 30, 29, 30, 30, 30, 29],
    1429: [354, 30, 29, 30, 29, 29, 29, 30, 30, 29, 30, 30, 29],
    1430: [354, 30, 30, 29, 29, 30, 29, 30, 29, 29, 30, 30, 29],
    1431: [354, 30, 30, 29, 30, 29, 30, 29, 30, 29, 29, 30, 29],
    1432: [355, 30, 30, 29, 30, 30, 30, 29, 29, 30, 29, 30, 29],
    1433: [355, 29, 30, 29, 30, 30, 30, 29, 30, 29, 30, 29, 30],
    1434: [354, 29, 29, 30, 29, 30, 30, 29, 30, 30, 29, 30, 29],
    1435: [355, 29, 30, 29, 30, 29, 30, 29, 30, 30, 30, 29, 30],
    1436: [354, 29, 30, 29, 29, 30, 29, 30, 29, 30, 29, 30, 30],
    1437: [354, 29, 30, 30, 29, 30, 29, 29, 30, 29, 29, 30, 30],
    1438: [354, 29, 30, 30, 30, 29, 30, 29, 29, 30, 29, 29, 30],
    1439: [354, 29, 30, 30, 30, 30, 29, 30, 29, 29, 30, 29, 29],
    1440: [355, 30, 29, 30, 30, 30, 29, 30, 30, 29, 29, 30, 29],
    1441: [355, 29, 30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 30],
    1442: [354, 29, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29],
    1443: [354, 29, 30, 30, 29, 29, 30, 29, 30, 30, 29, 30, 29],
    1444: [354, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 29],
    1445: [354, 30, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29, 29],
    1446: [355, 30, 30, 30, 29, 30, 30, 29, 30 /* :1403_Official_Iranian_Calendar and Temporary_1404: */, 29, 29, 30, 29],
    1447: [355, 29, 30, 29, 30, 30, 30, 29, 30, 30, 29, 29, 30],
    1448: [354, 29, 29, 30, 29, 30, 30, 29, 30, 30, 30, 29, 29],
    1449: [355, 30, 29, 29, 30, 29, 30, 29, 30, 30, 30, 29, 30],
    1450: [354, 29, 30, 29, 29, 30, 29, 30, 29, 30, 30, 30, 29],
    1451: [354, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 30, 29],
    1452: [354, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 29],
    1453: [355, 30, 30, 29, 30, 29, 30, 30, 29, 29, 30, 29, 30],
    1454: [354, 29, 30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 29],
    1455: [355, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29],
    1456: [355, 29, 30, 29, 29, 30, 29, 30, 30, 29, 30, 30, 30],
    1457: [354, 29, 29, 30, 29, 29, 30, 29, 30, 29, 30, 30, 30],
    1458: [354, 30, 29, 29, 30, 29, 29, 30, 29, 30, 29, 30, 30],
    1459: [354, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30],
    1460: [354, 30, 29, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29],
    1461: [355, 30, 29, 30, 30, 29, 30, 30, 29, 29, 30, 29, 30],
    1462: [354, 29, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29],
    1463: [355, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30],
    1464: [354/* : 355|354 <- Sum <- */, 30, 29, 29, 30, 29, 29, 30, 29, 30, 30, 29, 30/*: 30|29 -> verify -> true */],
    /*
      verify = ( (endJD - islamicA_to_julianDay(endYear,12,iDoM[endYear][12])) === 0 );
    */
  }
};

const julianDay_to_islamic = (julianDay) => {
  if (julianDay < ghamariMonths.startJd || julianDay > ghamariMonths.endJd) {
    return julianDay_to_islamicA(julianDay);
  } else {
    let iy, im;
    let id = julianDay - ghamariMonths.startJd + 1;
    for (iy in ghamariMonths.dim) {
      if (id > ghamariMonths.dim[iy][0]) {
        id -= ghamariMonths.dim[iy][0];
      } else {
        for (im = 1; im < 13, id > ghamariMonths.dim[iy][im]; im++) {
          id -= ghamariMonths.dim[iy][im];
        }
        break;
      }
    }
    return [+iy, im, ~~id];
  }
}

const islamic_to_julianDay = (iy, im, id) => {
  if (iy < ghamariMonths.startYear || iy > ghamariMonths.endYear) {
    return islamicA_to_julianDay(iy, im, id);
  } else {
    let julianDay = ghamariMonths.startJd - 1 + id;
    for (let y in ghamariMonths.dim) {
      if (y < iy) {
        julianDay += ghamariMonths.dim[y][0];
      } else {
        for (let m = 1; m < im; m++)julianDay += ghamariMonths.dim[iy][m];
        break;
      }
    }
    return julianDay;
  }
}


// Private Function, Only for test "ghamariMonths" object
const barrasiyeEkhtelafGhamari = () => {
  return '\n-----\n' +
    /* خروجی این بخش، قطعاً باید مساوی باشد */
    islamicA_to_julianDay(ghamariMonths.startYear, 1, 1) + ' old'
    + '\n' + islamic_to_julianDay(ghamariMonths.startYear, 1, 1) + ' new'
    + '\n\n' + julianDay_to_islamicA(ghamariMonths.startJd).join('/') + ' old'
    + '\n' + julianDay_to_islamic(ghamariMonths.startJd).join('/') + ' new'

    // + '\n-----\n' +
    /* مساوی یا نامساوی بودن این بخش وسط، مهم نیست */
    // islamicA_to_julianDay(ghamariMonths.endYear, 12, ghamariMonths.dim[ghamariMonths.endYear][12]) + ' old : == or !='
    // + '\n' + islamic_to_julianDay(ghamariMonths.endYear, 12, ghamariMonths.dim[ghamariMonths.endYear][12]) + ' new : == or !='
    // + '\n\n' + julianDay_to_islamicA(ghamariMonths.endJd).join('/') + ' old : == or !='
    // + '\n' + julianDay_to_islamic(ghamariMonths.endJd).join('/') + ' new : == or !='

    + '\n-----\n' +
    /* خنثی‌سازی اختلاف مجموع کل: اگر خروجی بخش پایین، نامساوی بود */
    islamicA_to_julianDay(ghamariMonths.endYear + 1, 1, 1) + ' old'
    + '\n' + islamic_to_julianDay(ghamariMonths.endYear + 1, 1, 1) + ' new'
    + '\n\n' + julianDay_to_islamicA(ghamariMonths.endJd + 1).join('/') + ' old'
    + '\n' + julianDay_to_islamic(ghamariMonths.endJd + 1).join('/') + ' new';
}


const roozeJulian_be_hameh = (roozeJulian) => {
  return {
    shamsi: julianDay_to_persian(roozeJulian),
    ghamari: julianDay_to_islamic(roozeJulian),
    ghamariA: julianDay_to_islamicA(roozeJulian),
    miladi: julianDay_to_gregorian(roozeJulian),
    roozeHafteh: ((~~(roozeJulian - 0.5) + 3) % 7),
    zaman: julianDay_to_time(julianDay),
    mohreZaman: julianDay_to_timeStamp(roozeJulian),
    roozeJulian: roozeJulian
  };
}
// roozeJulian_be_hameh <<==>> julianDay_to_all
const julianDay_to_all = (julianDay) => {
  return {
    persian: julianDay_to_persian(julianDay),
    islamic: julianDay_to_islamic(julianDay),
    islamicA: julianDay_to_islamicA(julianDay),
    gregorian: julianDay_to_gregorian(julianDay),
    dayOfWeek: ((~~(julianDay - 0.5) + 3) % 7),
    time: julianDay_to_time(julianDay),
    timeStamp: julianDay_to_timeStamp(julianDay),
    julianDay
  };
}

const julianDay_to_dayOfWeek = (julianDay) => {
  return ((~~(julianDay - 0.5) + 3) % 7);
}


const mohreZaman_be_hameh = (mohreZaman) => {
  return roozeJulian_be_hameh(timeStamp_to_julianDay(mohreZaman));
};
// mohreZaman_be_hameh <<==>> timeStamp_to_all
const timeStamp_to_all = (timeStamp) => {
  return julianDay_to_all(timeStamp_to_julianDay(timeStamp));
};


const timeStamp_to_persian = (timeStamp) => {
  return julianDay_to_persian(timeStamp_to_julianDay(timeStamp));
}

const timeStamp_to_islamic = (timeStamp) => {
  return julianDay_to_islamic(timeStamp_to_julianDay(timeStamp));
}

const timeStamp_to_gregorian = (timeStamp) => {
  return julianDay_to_gregorian(timeStamp_to_julianDay(timeStamp));
}


const persian_to_timeStamp = (year, month, day) => {
  return julianDay_to_timeStamp(persian_to_julianDay(year, month, day));
}

const islamic_to_timeStamp = (year, month, day) => {
  return julianDay_to_timeStamp(islamic_to_julianDay(year, month, day));
}

const gregorian_to_timeStamp = (year, month, day) => {
  return julianDay_to_timeStamp(gregorian_to_julianDay(year, month, day));
}


const is_persian_Leap = (py) => {
  return ((((py + 12) % 33) % 4) === 1) ? true : false;
}

const is_gregorian_Leap = (gy) => {
  return ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? true : false;
}

const is_islamicA_Leap = (iy) => {
  return (((((iy + 3) % 30) % 11) % 3) === 0) ? true : false;
}

const is_islamic_Leap = (iy) => {
  if (ghamariMonths.dim[im] !== undefined) {
    return (ghamariMonths.dim[im][0] === 355) ? true : false;
  } else {
    return is_islamicA_Leap(iy);
  }
}

// const etedaliLeap = (jy) => {
//   var breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210
//     , 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
//   var bl = breaks.length
//     , jp = breaks[0]
//     , jm, jump, leap, n, i;

//   if (jy < jp || jy >= breaks[bl - 1]) throw new Error('Invalid Jalaali year ' + jy) //

//   for (i = 1; i < bl; i += 1) {
//     jm = breaks[i]
//     jump = jm - jp
//     if (jy < jm) break
//     jp = jm
//   }
//   n = jy - jp

//   if (jump - n < 6) n = n - jump + div(jump + 4, 33) * 33
//   leap = (((n + 1) % 33) - 1) % 4
//   if (leap === -1) leap = 4 //


//   return (leap === 0);
// }

const mName = {
  shamsi: ['', 'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
  ghamari: ['', 'محرم', 'صفر', 'ربیع‌الاول', 'ربیع‌الثانی', 'جمادی‌الاولی', 'جمادی‌الثانیه', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذی‌القعده', 'ذی‌الحجه'],
  miladiEn: ['', 'January', 'February', 'March', 'April', 'May', 'Juan', 'July', 'August', 'September', 'October', 'November', 'December'],
  miladi: ['', 'ژانویه', 'فوریه', 'مارس', 'آوریل', 'می', 'ژوئن', 'جولای', 'آگوست', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر']
};






const date_to_days = (
  daysOfYear/* ~365.2425:Pesrsian&Gregorian | ~354.3667:Islamic */,
  daysOfMonth/* ~30.4369:Pesrsian&Gregorian | ~29.5305:Islamic */,
  year = 0, month = 0, day = 0
) => {
  return ~~((year * daysOfYear) + (month * daysOfMonth) + day);
}

const days_to_date = (
  daysOfYear/* ~365.2425:Pesrsian&Gregorian | ~354.3667:Islamic */,
  daysOfMonth/* ~30.4369:Pesrsian&Gregorian | ~29.5305:Islamic */,
  days = 0
) => {
  let year = ~~(days / daysOfYear);
  days -= days % daysOfYear;
  let month = ~~(days / daysOfMonth);
  days -= days % daysOfMonth;
  let day = ~~(days);
  return {
    year, month, day,
    toArray: () => [year, month, day]
  };
}


const time_to_miliSeconds = (hour = 0, minute = 0, second = 0, miliSecond = 0) => {
  return ((((hour * 3600) + (minute * 60) + second) * 1000) + miliSecond);
}

const time_to_Seconds = (hour = 0, minute = 0, second = 0) => {
  return ((hour * 3600) + (minute * 60) + second);
}

const miliSeconds_to_time = (miliSeconds) => {
  let miliSecond = ~~(miliSeconds % 1000);
  let second = ~~(miliSeconds / 1000);
  let hour = ~~(second / 3600);
  second = second % 3600;
  let minute = ~~(second / 60);
  second = second % 60;
  return [hour, minute, second, miliSecond];
  // return {
  //   hour, minute, second, miliSecond,
  //   toArray: () => [hour, minute, second, miliSecond]
  // };
}

const seconds_to_time = (seconds) => {
  let hour = ~~(seconds / 3600);
  let second = seconds % 3600;
  let minute = ~~(second / 60);
  second = second % 60;
  return [hour, minute, second];
  // return {
  //   hour, minute, second,
  //   toArray: () => [hour, minute, second]
  // };
}


const julianDay_to_time = (julianDay) => {
  return miliSeconds_to_time(((julianDay + 0.5) % 1) * 86400000);
}


const timeStamp_to_julianDay = (timeStamp, time = null) => {
  if (Array.isArray(time)) {
    let tmp = 0;
    if (!isNaN(time[0])) tmp += (time[0] * 3600);
    if (!isNaN(time[1])) tmp += (time[1] * 60);
    if (!isNaN(time[2])) tmp += time[2];
    return (~~(timeStamp / 86400000) + (tmp / 86400) + 2440587.5);
  }
  return ((timeStamp / 86400000) + 2440587.5);
}

const julianDay_to_timeStamp = (julianDay, time = null) => {
  if (Array.isArray(time)) {
    let tmp = 0;
    if (!isNaN(time[0])) tmp += (time[0] * 3600);
    if (!isNaN(time[1])) tmp += (time[1] * 60);
    if (!isNaN(time[2])) tmp += time[2];
    return Math.round((~~(julianDay - 2440587.5) * 86400000) + (tmp * 1000));
  }
  return Math.round((julianDay - 2440587.5) * 86400000);
}

const now_gregorian = () => {
  let gDate = new Date();
  return [gDate.getFullYear(), gDate.getMonth() + 1, gDate.getDate()];
}

const now_persian = () => {
  let gDate = now_gregorian();
  return gregorian_to_persian(gDate[0], gDate[1], gDate[2]);
}

const now_islamic = () => {
  let gDate = now_gregorian();
  return gregorian_to_islamic(gDate[0], gDate[1], gDate[2]);
}

const now_islamicA = () => {
  let gDate = now_gregorian();
  return gregorian_to_islamicA(gDate[0], gDate[1], gDate[2]);
}

const now_julianDay = (time = null) => {
  return timeStamp_to_julianDay(Date.now(), time);
}

const now_timeStamp = () => {
  return Date.now();
}

const now_timeStampS = (intOut = true) => {
  let tsS = (Date.now() / 1000);
  return (intOut) ? ~~(tsS) : tsS;
}

const diff_gregorian = (date1, date0 = null) => {
  return (
    gregorian_to_julianDay(date1[0], date1[1], date1[2]) -
    ((date0 === null) ? now_julianDay() : gregorian_to_julianDay(date0[0], date0[1], date0[2]))
  );
}

const diff_persian = (date1, date0 = null) => {
  return (
    persian_to_julianDay(date1[0], date1[1], date1[2]) -
    ((date0 === null) ? now_julianDay() : persian_to_julianDay(date0[0], date0[1], date0[2]))
  );
}

const diff_islamic = (date1, date0 = null) => {
  return (
    islamic_to_julianDay(date1[0], date1[1], date1[2]) -
    ((date0 === null) ? now_julianDay() : islamic_to_julianDay(date0[0], date0[1], date0[2]))
  );
}

const diff_islamicA = (date1, date0 = null) => {
  return (
    islamicA_to_julianDay(date1[0], date1[1], date1[2]) -
    ((date0 === null) ? now_julianDay() : islamicA_to_julianDay(date0[0], date0[1], date0[2]))
  );
}

const check_persian = (year, month, day) => {
  return !(
    isNaN(year) || isNaN(month) || isNaN(day) ||
    year < -622 || year > 32767 ||
    month < 1 || month > 12 ||
    day < 1 || day > daysOfMonth_persian(year, month)
  );
}

const daysOfMonth_persian = (year, month) => {
  return ((month < 7) ? 31 : ((month < 12) ? 30 : (is_persian_Leap(year) ? 30 : 29)));
}


const check_gregorian = (year, month, day) => {
  return !(
    isNaN(year) || isNaN(month) || isNaN(day) ||
    year < 0 || year > 32767 ||
    month < 1 || month > 12 ||
    day < 1 || day > daysOfMonth_gregorian(year, month)
  );
}

const daysOfMonth_gregorian = (year, month) => {
  return [0, 31, (is_gregorian_Leap(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}


const check_islamic = (year, month, day) => {
  return !(
    isNaN(year) || isNaN(month) || isNaN(day) ||
    year < -641 || year > 32767 ||
    month < 1 || month > 12 ||
    day < 1 || day > daysOfMonth_islamic(year, month)
  );
}

const daysOfMonth_islamic = (year, month) => {
  if (month === 12) {
    year++;
    month = 1;
  } else {
    month++;
  }
  return julianDay_to_islamic(islamic_to_julianDay(year, month, 1) - 1)[2];
}


const check_islamicA = (year, month, day) => {
  return !(
    isNaN(year) || isNaN(month) || isNaN(day) ||
    year < -641 || year > 32767 ||
    month < 1 || month > 12 ||
    day < 1 || day > daysOfMonth_islamicA(year, month)
  );
}

const daysOfMonth_islamicA = (year, month) => {
  if (month === 12) {
    year++;
    month = 1;
  } else {
    month++;
  }
  return julianDay_to_islamicA(islamicA_to_julianDay(year, month, 1) - 1)[2];
}

const change_persian = (change, dateTime = null) => {
  let _julianDay = 0, _miliSeconds, year, month, day, hour, minute, second, miliSecond;

  let [ch_year, ch_month, ch_day, ch_hour, ch_minute, ch_second, ch_miliSecond] = [
    change[0] || 0, change[1] || 0, change[2] || 0,
    change[3] || 0, change[4] || 0, change[5] || 0, change[6] || 0
  ];

  if (dateTime === null) {
    let date = new Date();
    [year, month, day] = gregorian_to_persian(date.getFullYear(), date.getMonth() + 1, date.getDate());
    [hour, minute, second, miliSecond] = [date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
  } else if (Array.isArray(dateTime)) {
    [year, month, day, hour, minute, second, miliSecond] = [
      dateTime[0], dateTime[1] || 1, dateTime[2] || 1,
      dateTime[3] || 0, dateTime[4] || 0, dateTime[5] || 0, dateTime[6] || 0
    ];
  } else {
    [year, month, day, hour, minute, second, miliSecond] = [
      ...julianDay_to_persian(dateTime),
      ...julianDay_to_time(dateTime)
    ];
  }

  year += ch_year;
  month += ch_month;

  if (month < 1 || month > 12) {
    year += ~~(month / 12);
    month %= 12;
    if (month < 1) {
      month += 12;
      year--;
    }
  }

  _miliSeconds = time_to_miliSeconds(hour + ch_hour, minute + ch_minute, second + ch_second, miliSecond + ch_miliSecond);

  if (_miliSeconds < 0 || _miliSeconds >= 86400000) {
    if (_miliSeconds < 0) _julianDay--;
    _julianDay += ~~(_miliSeconds / 86400000);
    _miliSeconds %= 86400000;
  }

  _julianDay += ch_day + persian_to_julianDay(year, month, day) + (_miliSeconds / 86400000);

  // let date = julianDay_to_persian(_julianDay);

  return [
    ...julianDay_to_persian(_julianDay),
    ...miliSeconds_to_time(_miliSeconds),
    _julianDay
  ];
  // return {
  //   year: date[0], month: date[1], day: date[2], ...miliSeconds_to_time(_miliSeconds),
  //   dayOfWeek: ((~~(_julianDay - 0.5) + 3) % 7),
  //   timeStamp: julianDay_to_timeStamp(_julianDay),
  //   julianDay: _julianDay,
  //   toArray: () => [year, month, day, hour, minute, second, miliSecond]
  // };
}

const change_gregorian = (change, dateTime = null) => {
  let _julianDay = 0, _miliSeconds, year, month, day, hour, minute, second, miliSecond;

  let [ch_year, ch_month, ch_day, ch_hour, ch_minute, ch_second, ch_miliSecond] = [
    change[0] || 0, change[1] || 0, change[2] || 0,
    change[3] || 0, change[4] || 0, change[5] || 0, change[6] || 0
  ];

  if (dateTime === null) {
    let date = new Date();
    [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    [hour, minute, second, miliSecond] = [date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
  } else {
    [year, month, day, hour, minute, second, miliSecond] = [
      dateTime[0], dateTime[1] || 1, dateTime[2] || 1,
      dateTime[3] || 0, dateTime[4] || 0, dateTime[5] || 0, dateTime[6] || 0
    ];
  }

  year += ch_year;
  month += ch_month;

  if (month < 1 || month > 12) {
    year += ~~(month / 12);
    month %= 12;
    if (month < 1) {
      month += 12;
      year--;
    }
  }

  _miliSeconds = time_to_miliSeconds(hour + ch_hour, minute + ch_minute, second + ch_second, miliSecond + ch_miliSecond);

  if (_miliSeconds < 0 || _miliSeconds >= 86400000) {
    if (_miliSeconds < 0) _julianDay--;
    _julianDay += ~~(_miliSeconds / 86400000);
    _miliSeconds %= 86400000;
  }

  _julianDay += ch_day + gregorian_to_julianDay(year, month, day) + (_miliSeconds / 86400000);

  // let date = julianDay_to_gregorian(_julianDay);

  return [
    ...julianDay_to_gregorian(_julianDay),
    ...miliSeconds_to_time(_miliSeconds),
    _julianDay
  ];
  // return {
  //   year: date[0], month: date[1], day: date[2], ...miliSeconds_to_time(_miliSeconds),
  //   dayOfWeek: ((~~(_julianDay - 0.5) + 3) % 7),
  //   timeStamp: julianDay_to_timeStamp(_julianDay),
  //   julianDay: _julianDay,
  //   toArray: () => [year, month, day, hour, minute, second, miliSecond]
  // };
}

const change_islamic = (change, dateTime = null) => {
  let _julianDay = 0, _miliSeconds, year, month, day, hour, minute, second, miliSecond;

  let [ch_year, ch_month, ch_day, ch_hour, ch_minute, ch_second, ch_miliSecond] = [
    change[0] || 0, change[1] || 0, change[2] || 0,
    change[3] || 0, change[4] || 0, change[5] || 0, change[6] || 0
  ];

  if (dateTime === null) {
    let date = new Date();
    [year, month, day] = gregorian_to_islamic(date.getFullYear(), date.getMonth() + 1, date.getDate());
    [hour, minute, second, miliSecond] = [date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
  } else {
    [year, month, day, hour, minute, second, miliSecond] = [
      dateTime[0], dateTime[1] || 1, dateTime[2] || 1,
      dateTime[3] || 0, dateTime[4] || 0, dateTime[5] || 0, dateTime[6] || 0
    ];
  }

  year += ch_year;
  month += ch_month;

  if (month < 1 || month > 12) {
    year += ~~(month / 12);
    month %= 12;
    if (month < 1) {
      month += 12;
      year--;
    }
  }

  _miliSeconds = time_to_miliSeconds(hour + ch_hour, minute + ch_minute, second + ch_second, miliSecond + ch_miliSecond);

  if (_miliSeconds < 0 || _miliSeconds >= 86400000) {
    if (_miliSeconds < 0) _julianDay--;
    _julianDay += ~~(_miliSeconds / 86400000);
    _miliSeconds %= 86400000;
  }

  _julianDay += ch_day + islamic_to_julianDay(year, month, day) + (_miliSeconds / 86400000);

  // let date = julianDay_to_islamic(_julianDay);

  return [
    ...julianDay_to_islamic(_julianDay),
    ...miliSeconds_to_time(_miliSeconds),
    _julianDay
  ];
  // return {
  //   year: date[0], month: date[1], day: date[2], ...miliSeconds_to_time(_miliSeconds),
  //   dayOfWeek: ((~~(_julianDay - 0.5) + 3) % 7),
  //   timeStamp: julianDay_to_timeStamp(_julianDay),
  //   julianDay: _julianDay,
  //   toArray: () => [year, month, day, hour, minute, second, miliSecond]
  // };
}

const change_islamicA = (change, dateTime = null) => {
  let _julianDay = 0, _miliSeconds, year, month, day, hour, minute, second, miliSecond;

  let [ch_year, ch_month, ch_day, ch_hour, ch_minute, ch_second, ch_miliSecond] = [
    change[0] || 0, change[1] || 0, change[2] || 0,
    change[3] || 0, change[4] || 0, change[5] || 0, change[6] || 0
  ];

  if (dateTime === null) {
    let date = new Date();
    [year, month, day] = gregorian_to_islamicA(date.getFullYear(), date.getMonth() + 1, date.getDate());
    [hour, minute, second, miliSecond] = [date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
  } else {
    [year, month, day, hour, minute, second, miliSecond] = [
      dateTime[0], dateTime[1] || 1, dateTime[2] || 1,
      dateTime[3] || 0, dateTime[4] || 0, dateTime[5] || 0, dateTime[6] || 0
    ];
  }

  year += ch_year;
  month += ch_month;

  if (month < 1 || month > 12) {
    year += ~~(month / 12);
    month %= 12;
    if (month < 1) {
      month += 12;
      year--;
    }
  }

  _miliSeconds = time_to_miliSeconds(hour + ch_hour, minute + ch_minute, second + ch_second, miliSecond + ch_miliSecond);

  if (_miliSeconds < 0 || _miliSeconds >= 86400000) {
    if (_miliSeconds < 0) _julianDay--;
    _julianDay += ~~(_miliSeconds / 86400000);
    _miliSeconds %= 86400000;
  }

  _julianDay += ch_day + islamicA_to_julianDay(year, month, day) + (_miliSeconds / 86400000);

  // let date = julianDay_to_islamicA(_julianDay);

  return [
    ...julianDay_to_persian(_julianDay),
    ...miliSeconds_to_time(_miliSeconds),
    _julianDay
  ];
  // return {
  //   year: date[0], month: date[1], day: date[2], ...miliSeconds_to_time(_miliSeconds),
  //   dayOfWeek: ((~~(_julianDay - 0.5) + 3) % 7),
  //   timeStamp: julianDay_to_timeStamp(_julianDay),
  //   julianDay: _julianDay,
  //   toArray: () => [year, month, day, hour, minute, second, miliSecond]
  // };
}


// const roozeHafteh = ['شنبه', 'یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'];

const roozeHafteh = new Proxy(
  ['شنبه', 'یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'],
  {
    get(target, prop) {
      if (prop >= 0 && prop <= 6) {
        return target[prop];
      } else if (prop > 6) {
        return target[prop % 7];
      } else if (prop < 0) {
        return target[6 - ((Math.abs(prop) - 1) % 7)];
      } else {
        return 'نامعلوم'; // default value
      }
    }
  }
);
// diff
// roozShomar(1300)

export const TarikhObject = class {
  constructor() {
    this.setNow();
  }

  setNow() {
    this._all = timeStamp_to_all(Date.now());
  }

  set time(time) {
    this._all.time = [time[0] || 0, time[1] || 0, time[2] || 0, time[3] || 0];
    return this._all;
  }

  get time() {
    return this._all.time;
  }

  set hour(hour) {
    this._all.time[0] = hour;
    return this._all;
  }

  get hour() {
    return this._all.time[0];
  }

  set minute(minute) {
    this._all.time[1] = minute;
    return this._all;
  }

  get minute() {
    return this._all.time[1];
  }

  set second(second) {
    this._all.time[2] = second;
    return this._all;
  }

  get second() {
    return this._all.time[2];
  }

  set miliSecond(miliSecond) {
    this._all.time[3] = miliSecond;
    return this._all;
  }

  get miliSecond() {
    return this._all.time[3];
  }


  set timeStamp(timeStamp) {
    this._all = timeStamp_to_all(timeStamp);
  }

  get timeStamp() {
    return this._all.timeStamp;
  }


  // setJulianDay(JulianDay) {
  //   this._all = julianDay_to_all(JulianDay);
  // }

  set julianDay(JulianDay) {
    this._all = julianDay_to_all(JulianDay);
  }

  get julianDay() {
    return this._all.JulianDay;
  }

  _setJulianDayToOnlyDates(JulianDay) {
    const a = julianDay_to_all(JulianDay);
    [
      this._all.julianDay,
      this._all.persian,
      this._all.gregorian,
      this._all.islamic,
      this._all.islamicA,
      this._all.dayOfWeek
    ] = [
        ~~(a.julianDay) + (this._all.julianDay % 1),
        a.persian,
        a.gregorian,
        a.islamic,
        a.islamicA,
        a.dayOfWeek
      ];
  }

  getPersian() {
    return this._all.persian;
  }

  get persian() {
    return this._all.persian;
  }

  get persianYear() {
    return this._all.persian[0];
  }

  get persianMonth() {
    return this._all.persian[1];
  }

  get persianDay() {
    return this._all.persian[2];
  }


  getGregorian() {
    return this._all.gregorian;
  }

  get gregorian() {
    return this._all.gregorian;
  }

  get gregorianYear() {
    return this._all.gregorian[0];
  }

  get gregorianMonth() {
    return this._all.gregorian[1];
  }

  get gregorianDay() {
    return this._all.gregorian[2];
  }


  getIslamic() {
    return this._all.islamic;
  }

  get islamic() {
    return this._all.islamic;
  }

  get islamicYear() {
    return this._all.islamic[0];
  }

  get islamicMonth() {
    return this._all.islamic[1];
  }

  get islamicDay() {
    return this._all.islamic[2];
  }


  getIslamicA() {
    return this._all.islamicA;
  }

  get islamicA() {
    return this._all.islamicA;
  }

  get islamicAYear() {
    return this._all.islamicA[0];
  }

  get islamicAMonth() {
    return this._all.islamicA[1];
  }

  get islamicADay() {
    return this._all.islamicA[2];
  }


  setPersian(year, month, day) {
    this._all = this._setJulianDayToOnlyDates(persian_to_julianDay(year, month, day));
    return this._all;
  }

  set persian(persian) {
    this._all = this.setPersian(persian[0], persian[1], persian[2]);
    return this._all;
  }

  set persianYear(year) {
    this.setPersian(year, this._all.persian[1], this._all.persian[2]);
    return this._all;
  }

  set persianMonth(month) {
    this.setPersian(this._all.persian[0], month, this._all.persian[2]);
    return this._all;
  }

  set persianDay(day) {
    this.setPersian(this._all.persian[0], this._all.persian[1], day);
    return this._all;
  }


  setGregorian(year, month, day) {
    this._all = this._setJulianDayToOnlyDates(gregorian_to_julianDay(year, month, day));
    return this._all;
  }

  set gregorian(gregorian) {
    this._all = this.setGregorian(gregorian[0], gregorian[1], gregorian[2]);
    return this._all;
  }

  set gregorianYear(year) {
    this.setGregorian(year, this._all.gregorian[1], this._all.gregorian[2]);
    return this._all;
  }

  set gregorianMonth(month) {
    this.setGregorian(this._all.gregorian[0], month, this._all.gregorian[2]);
    return this._all;
  }

  set gregorianDay(day) {
    this.setGregorian(this._all.gregorian[0], this._all.gregorian[1], day);
    return this._all;
  }


  setIslamic(year, month, day) {
    this._all = this._setJulianDayToOnlyDates(islamic_to_julianDay(year, month, day));
    return this._all;
  }

  set islamic(islamic) {
    this._all = this.setIslamic(islamic[0], islamic[1], islamic[2]);
    return this._all;
  }

  set islamicYear(year) {
    this.setIslamic(year, this._all.islamic[1], this._all.islamic[2]);
    return this._all;
  }

  set islamicMonth(month) {
    this.setIslamic(this._all.islamic[0], month, this._all.islamic[2]);
    return this._all;
  }

  set islamicDay(day) {
    this.setIslamic(this._all.islamic[0], this._all.islamic[1], day);
    return this._all;
  }


  setIslamicA(year, month, day) {
    this._all = this._setJulianDayToOnlyDates(islamicA_to_julianDay(year, month, day));
    return this._all;
  }

  set islamicA(islamicA) {
    this._all = this.setIslamicA(islamicA[0], islamicA[1], islamicA[2]);
    return this._all;
  }

  set islamicAYear(year) {
    this.setIslamicA(year, this._all.islamicA[1], this._all.islamicA[2]);
    return this._all;
  }

  set islamicAMonth(month) {
    this.setIslamicA(this._all.islamicA[0], month, this._all.islamicA[2]);
    return this._all;
  }

  set islamicADay(day) {
    this.setIslamicA(this._all.islamicA[0], this._all.islamicA[1], day);
    return this._all;
  }









}


export {
  change_persian,






  gregorian_to_julianDay,
  gregorian_to_julianDay as miladi_be_roozeJulian,
  persian_to_julianDay,
  persian_to_julianDay as shamsi_be_roozeJulian,
  julianDay_to_persian,
  julianDay_to_persian as roozeJulian_be_shamsi,
  julianDay_to_gregorian,
  julianDay_to_gregorian as roozeJulian_be_miladi,
  gregorian_to_persian,
  gregorian_to_persian as miladi_be_shamsi,
  persian_to_gregorian,
  persian_to_gregorian as shamsi_be_miladi,
  islamicA_to_julianDay,
  islamicA_to_julianDay as ghamari_be_roozeJulianA,
  julianDay_to_islamicA,
  julianDay_to_islamicA as roozeJulian_be_ghamariA,
  gregorian_to_islamic,
  gregorian_to_islamic as miladi_be_ghamari,
  gregorian_to_islamicA,
  gregorian_to_islamicA as miladi_be_ghamariA,
  islamic_to_gregorian,
  islamic_to_gregorian as ghamari_be_miladi,
  islamicA_to_gregorian,
  islamicA_to_gregorian as ghamariA_be_miladi,
  persian_to_islamic,
  persian_to_islamic as shamsi_be_ghamari,
  persian_to_islamicA,
  persian_to_islamicA as shamsi_be_ghamariA,
  islamic_to_persian,
  islamic_to_persian as ghamari_be_shamsi,
  islamicA_to_persian,
  islamicA_to_persian as ghamariA_be_shamsi,
  julianDay_to_islamic,
  julianDay_to_islamic as roozeJulian_be_ghamari,
  islamic_to_julianDay,
  islamic_to_julianDay as ghamari_be_roozeJulian,
  julianDay_to_all,
  roozeJulian_be_hameh,
  timeStamp_to_all,
  mohreZaman_be_hameh,
  timeStamp_to_persian,
  timeStamp_to_persian as mohreZaman_be_shamsi,
  timeStamp_to_islamic,
  timeStamp_to_islamic as mohreZaman_be_ghamari,
  timeStamp_to_gregorian,
  timeStamp_to_gregorian as mohreZaman_be_miladi,
  persian_to_timeStamp,
  persian_to_timeStamp as shamsi_be_mohreZaman,
  islamic_to_timeStamp,
  islamic_to_timeStamp as ghamari_be_mohreZaman,
  gregorian_to_timeStamp,
  gregorian_to_timeStamp as miladi_be_mohreZaman,
  is_persian_Leap,
  is_persian_Leap as kabiseh_shamsi_hast,
  is_gregorian_Leap,
  is_gregorian_Leap as kabiseh_miladi_hast,
  is_islamic_Leap,
  is_islamic_Leap as kabiseh_ghamari_hast,
  is_islamicA_Leap,
  is_islamicA_Leap as kabiseh_ghamariA_hast,
  timeStamp_to_julianDay,
  timeStamp_to_julianDay as mohreZaman_be_roozeJulian,
  julianDay_to_timeStamp,
  julianDay_to_timeStamp as roozeJulian_be_mohreZaman,
  now_gregorian,
  now_gregorian as alan_miladi,
  now_persian,
  now_persian as alan_shamsi,
  now_islamic,
  now_islamic as alan_ghamari,
  now_islamicA,
  now_islamicA as alan_ghamariA,
  now_julianDay,
  now_julianDay as alan_roozeJulian,
  now_timeStamp,
  now_timeStamp as alan_mohreZaman,
  now_timeStampS,
  now_timeStampS as alan_mohreZamanS
}

// export default {
//   gregorian_to_julianDay,
//   miladi_be_roozeJulian: gregorian_to_julianDay,
//   persian_to_julianDay,
//   shamsi_be_roozeJulian: persian_to_julianDay,
//   julianDay_to_persian,
//   roozeJulian_be_shamsi: julianDay_to_persian,
//   julianDay_to_gregorian,
//   roozeJulian_be_miladi: julianDay_to_gregorian,
//   gregorian_to_persian,
//   miladi_be_shamsi: gregorian_to_persian,
//   persian_to_gregorian,
//   shamsi_be_miladi: persian_to_gregorian,
//   islamicA_to_julianDay,
//   ghamari_be_roozeJulianA: islamicA_to_julianDay,
//   julianDay_to_islamicA,
//   roozeJulian_be_ghamariA: julianDay_to_islamicA,
//   gregorian_to_islamic,
//   miladi_be_ghamari: gregorian_to_islamic,
//   islamic_to_gregorian,
//   ghamari_be_miladi: islamic_to_gregorian,
//   persian_to_islamic,
//   shamsi_be_ghamari: persian_to_islamic,
//   islamic_to_persian,
//   ghamari_be_shamsi: islamic_to_persian,
//   julianDay_to_islamic,
//   roozeJulian_be_ghamari: julianDay_to_islamic,
//   islamic_to_julianDay,
//   ghamari_be_roozeJulian: islamic_to_julianDay,
//   julianDay_to_all,
//   roozeJulian_be_hameh,
//   timeStamp_to_all,
//   mohreZaman_be_hameh,
//   timeStamp_to_persian,
//   mohreZaman_be_shamsi: timeStamp_to_persian,
//   timeStamp_to_islamic,
//   mohreZaman_be_ghamari: timeStamp_to_islamic,
//   timeStamp_to_gregorian,
//   mohreZaman_be_miladi: timeStamp_to_gregorian,
//   persian_to_timeStamp,
//   shamsi_be_mohreZaman: persian_to_timeStamp,
//   islamic_to_timeStamp,
//   ghamari_be_mohreZaman: islamic_to_timeStamp,
//   gregorian_to_timeStamp,
//   miladi_be_mohreZaman: gregorian_to_timeStamp,
//   is_persian_Leap,
//   kabiseh_shamsi_hast: is_persian_Leap,
//   is_gregorian_Leap,
//   kabiseh_miladi_hast: is_gregorian_Leap,
//   is_islamic_Leap,
//   kabiseh_ghamari_hast: is_islamic_Leap,
//   timeStamp_to_julianDay,
//   mohreZaman_be_roozeJulian: timeStamp_to_julianDay,
//   julianDay_to_timeStamp,
//   roozeJulian_be_mohreZaman: julianDay_to_timeStamp
// }