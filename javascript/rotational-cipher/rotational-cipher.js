const RotationalCipher = {
  rotate: (s, rot) => {
    let res = '';
    for (let i = 0; i < s.length; i++) {
      if (!/[a-zA-Z]/.test(s[i])) res += s[i];
      else res += String.fromCharCode(s[i].charCodeAt()
        + ((
            (s[i].toUpperCase().charCodeAt() - 'A'.charCodeAt()) + rot) % 26)
            - (s[i].toUpperCase().charCodeAt() - 'A'.charCodeAt()
        ));
    }
    return res;
  },
};

export default RotationalCipher;