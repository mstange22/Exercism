const translateWord = (word) => {
  if (/^([aeiou]|xr|yt)/.test(word)) return word + 'ay';
  return word.replace(/^([^aeiou]+(?=y)|[^aeiou]*qu|[^aeiou]+)([a-z]+)/, '$2$1') + 'ay';
};

export const translator = {
  translate: (phrase) => phrase.split(' ').map(translateWord).join(' ')
};