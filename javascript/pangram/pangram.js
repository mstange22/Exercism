export const isPangram = (s) => {
  const seen = new Set();
  for (const c of s.toLowerCase()) {
    if (/[a-z]/.test(c) && !seen.has(c)) {
      seen.add(c);
    }
  }
  return seen.size === 26;
}