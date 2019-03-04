const convert = (char, rot) => {
  const A = 'A'.charCodeAt();
  const upperCode = char.toUpperCase().charCodeAt();
  const shift = ((upperCode - A + rot) % 26) + A - upperCode;
  return String.fromCharCode((char.charCodeAt() + shift));
};

export default {
  rotate: (s, rot) => {
    let res = '';
    for (let i = 0; i < s.length; i++) {
      let c = s[i];
      if (/[a-zA-Z]/.test(c)) c = convert(c, rot);
      res += c;
    }
    return res;
  },
};
