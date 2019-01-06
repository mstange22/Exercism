class Raindrops {
  convert(num) {
    let res = '';
    if (num % 3 === 0) res += 'Pling';
    if (num % 5 === 0) res += 'Plang';
    if (num % 7 === 0) res += 'Plong';
    return res === '' ? num.toString() : res;
  }
}

export default Raindrops;