export const encode = (s) => {
  let res = '';
  for (let i = 0, count = 1; i < s.length; i++) {
    if (s[i + 1] === s[i]) {
      count++;
    } else if (count > 1) {
        res += `${count}${s[i]}`;
        count = 1;
    } else {
      res += s[i];
    }
  }

  return res;
}

export const decode = (s) => {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/\d/)) {
      let multiplier = s[i];
      while (s[i + 1].match(/[\d]/)) {
        multiplier += s[i + 1];
        i++;
      }
      const count = Number(multiplier);
      for (let j = 1; j < count; j++) {
        res += s[i + 1];
      }
    } else {
      res += s[i];
    }
  }

  return res;
}