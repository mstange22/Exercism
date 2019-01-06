const numBottles = (num) => `${num === 0 ? 'No more' : num} bottle${num === 1 ? '' : 's'}`;

const Beer = {
  verse: (num) => {
    const res1 = `${numBottles(num)} of beer on the wall, ${numBottles(num).toLowerCase()} of beer.`
    let res2 = `${num === 0 ? (
      'Go to the store and buy some more'
    ) : (
      `Take ${num === 1 ? 'it' : 'one'} down and pass it around` 
    )}, ${num === 0 ? '99 bottles' : numBottles(num - 1).toLowerCase()} of beer on the wall.`
    return res1 + '\n' + res2 + '\n'
  },
  sing: (start = 99, end = 0) => {
    let res = '';
    for (let i = start; i >= end; i--) {
      res += (Beer.verse(i) + '\n');
    }
    return res.slice(0, -1);
  },
};

export default Beer;