const proverb = (...args) => {
  let res = '';
  let qualifier = null;
  if (typeof args[args.length - 1] === 'object') qualifier = args.pop();
  for (let i = 0; i < args.length - 1; i++) {
    res += `For want of a ${args[i]} the ${args[i + 1]} was lost.\n`;
  }
  return res + `And all for the want of a ${qualifier ? `${qualifier.qualifier} ` : ''}${args[0]}.`
};

export default proverb;