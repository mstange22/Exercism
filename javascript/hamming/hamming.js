export const compute = (s1, s2) => {
  if (s1.length !== s2.length) throw new Error('left and right strands must be of equal length');
  return s1.split('').filter((char, index) => char != s2[index]).length;
};