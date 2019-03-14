/* eslint no-bitwise: 0 */
const encode = (values) => {
  let res = [];
  values.forEach((value) => {
    const bits = value.toString(2);
    const bytes = [];
    let byte = '';
    for (let i = bits.length - 1; i >= 0; i--) {
      byte = bits[i] + byte;
      if (byte.length === 7 || i === 0) {
        bytes.push(byte);
        byte = '';
      }
    }
    res = [
      ...res,
      ...bytes
        .map((s, i) => (i === 0 ? parseInt(s, 2) : parseInt(s, 2) | 128))
        .reverse(),
    ];
  });
  return res;
};

const decode = (bytes) => {
  const res = [];
  let n = '';
  bytes.forEach((byte, i) => {
    if (byte & 128) {
      if (i === bytes.length - 1) throw new Error('Incomplete sequence');
      const binaryString = (byte - 128).toString(2);
      n += '0000000'.substring(binaryString.length) + binaryString;
    } else if (n === '') {
      res.push(byte);
    } else {
      const binaryString = byte.toString(2);
      const leastSignificantByte = '0000000'.substring(binaryString.length) + binaryString;
      res.push(parseInt(n + leastSignificantByte, 2));
      n = '';
    }
  });
  return res;
};

export { encode, decode };
