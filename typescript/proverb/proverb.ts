const Proverb = (...args: string[]): string => {
  const res: string[] = []
  for (let i = 0; i < args.length - 1; i++) {
    res.push(`For want of a ${args[i]} the ${args[i + 1]} was lost.`)
  }
  return [...res, `And all for the want of a ${args[0]}.`].join('\n');
}

export default Proverb