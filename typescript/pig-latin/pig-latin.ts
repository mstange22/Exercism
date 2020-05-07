export default class PigLatin {
  static translate = (phrase: string) =>
    phrase.split(' ').map((word) => /^([aeiou]|xr|yt)/.test(word) ? word + 'ay' :
      word.replace(/^([^aeiou]+(?=y)|[^aeiou]*qu|[^aeiou]+)([a-z]+)/, '$2$1') + 'ay'
    ).join(' ')
}
