export default class Gigasecond {
  _date: Date;

  constructor(d: Date) {
    this._date = new Date(d.getTime() + 1e9 * 1000);
  }

  date() {
    return this._date;
  }
}