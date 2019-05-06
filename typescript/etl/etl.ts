const transform = (old: { [key: string]: string[] }) => {
  return Object.keys(old).reduce((transformed: { [letter: string]: number }, key: string) => {
    old[key].forEach((letter: string) => {
      transformed[letter.toLowerCase()] = Number(key)
    })
    return transformed
  }, {})
}

export default transform