const Proverb = (...args: string[]): string => {
  let res = ''
  for (let i = 0; i < args.length - 1; i++) {
    res += `For want of a ${args[i]} the ${args[i + 1]} was lost.\n`
  }
  return res + `And all for the want of a ${args[0]}.`
}

export default Proverb