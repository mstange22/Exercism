export const convert = (num, oldBase, newBase) => {
  let temp = 0;
  let newNum = [];
  if (!oldBase || oldBase <= 1 || !Number.isInteger(oldBase)) throw new Error('Wrong input base');
  if (!newBase || newBase <= 1 || !Number.isInteger(newBase)) throw new Error('Wrong output base');
  if (num.length === 0 || (num.length > 1 && num[0] === 0)) throw new Error('Input has wrong format');

  // iterate through num building a temp decimal number
  for (let i = 0, exp = num.length - 1; i < num.length; i++, exp--) {
    if (num[i] !== 0) {
      if (num[i] < 0 || num[i] >= oldBase) throw new Error('Input has wrong format');
      temp += num[i] * (oldBase ** exp);
    }
  }

  // iterate through temp decimal number, building the newBase number
  while (temp > 0) {
    newNum.unshift(temp % newBase);
    temp = Math.trunc(temp / newBase)
  }
  return newNum.length > 0 ? newNum : [0];
};