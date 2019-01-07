export class HighScores {
  constructor(scores) {
    this.scores = scores;
    this.latest = scores[scores.length - 1];
    this.highest = Math.max(...scores);
    this.getTopScores();
    this.getReport();
  }

  getTopScores() {
    this.top = [];
    const temp = this.scores.slice();
    for (let i = 0; i < this.scores.length && i < 3; i++) {
      this.top.push(temp.splice(temp.findIndex(t => t === Math.max(...temp)), 1)[0]);
    }
  }

  getReport() {
    const diff = this.highest - this.latest;
    this.report = `Your latest score was ${this.latest}. That's${diff > 0 ? (
      ` ${diff} short of`
     ) : ''} your personal best!`;
  }
}