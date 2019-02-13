const spaces = n => new Array(n).fill(' ').join('');

export class Diamond {
  makeDiamond(letter) {
    const a = 'A'.charCodeAt();
    const diff = letter.charCodeAt() - a;

    // build the top half
    let top = '';
    for (let i = 0; i <= diff; i++) {
      // build the first half (plus one space)
      const first = spaces(diff - i) + String.fromCharCode(a + i) + spaces(i);
      // reflect the first half (minus a space)
      const second = first.slice(0, -1).split('').reverse().join('');
      top += `${first}${second}\n`;
    }

    // reflect the top half, minus middle (and newline) to get bottom half
    const bottom = top.split('\n').reverse().slice(2).join('\n');
    return `${top}${bottom}${letter !== 'A' ? '\n' : ''}`;
  }
}
