export default class Words {
  count(s: string) {
    const counter = new Map<string, number>();
    for (const word of s.trim().split(/[\s]+/).map(e => e.toLowerCase())) {
        counter.set(word, (counter.get(word) || 0) + 1);
    }
    return counter;
  }
}
