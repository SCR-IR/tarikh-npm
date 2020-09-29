

const toFaNum = (enNum_) => {
  let enNum = "" + enNum_;
  let fa = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  let out = "";
  for (let i in enNum) {
    out += (parseInt(enNum[i]) == enNum[i]) ? fa[parseInt(enNum[i])] : enNum[i];
  }

  return out;
}



const toEnNum = (faNum_) => {
  let faNum = "" + faNum_;
  let fa = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9'
  };

  let out = "";
  for (let i in faNum) {
    out += (fa[faNum[i]] !== undefined) ? fa[faNum[i]] : faNum[i];
  }

  return out;
}



const to2Digit = (num) => {
  return (parseInt(num) > 9) ? '' + num : '0' + num;
}

export {
  toFaNum,
  toEnNum,
  to2Digit
}

// export default {
//   toFaNum,
//   toEnNum,
//   to2Digit
// }
