export class GradeSchool {
  constructor() {
    this.school = {};
  }

  add(name, grade) {
    if (this.school[grade]) {
      this.school[grade].push(name);
    } else {
      this.school[grade] = [name];
    }
  }

  roster() {
    return Object.keys(this.school).sort().reduce((accum, key) => {
      accum[key] = [...this.school[key]].sort();
      return accum;
    }, {});
  }

  grade(grade) {
    if (!this.school[grade]) return [];
    return [...this.school[grade]].sort();
  }
}
