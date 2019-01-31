const isVowel = (c) => {
  return 'aeiou'.includes(c);
}

export const translator = {
  translate: (phrase) => {
    return phrase.split(' ')
      .map((word) => {
        if (isVowel(word[0]) || word.startsWith('yt') || word.startsWith('xr')) {
          return word + 'ay';
        }
        let consonantGroup = '';
        let index = 0;
        while (!isVowel(word[index]) && (index === 0 || word[index] !== 'y')) {
          consonantGroup += word[index];
          index++;
        }
        if (word[index - 1] == 'q' && word[index] == 'u') {
          consonantGroup += 'u';
          index++;
        }
        return word.slice(index) + consonantGroup + "ay"
      }).join(' ');
  },
};