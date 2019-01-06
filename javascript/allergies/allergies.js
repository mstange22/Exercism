const ALLERGENS = [
  'eggs', 'peanuts', 'shellfish', 'strawberries',
  'tomatoes', 'chocolate', 'pollen', 'cats',
];

class Allergies {
  constructor(score) {
    this.allergies = (score % 256)
      .toString(2)
      .split('')
      .reverse()
      .reduce((allergies, bit, index) => bit === '1' ? [...allergies, ALLERGENS[index]] : allergies, []);
  }

  list() {
    return this.allergies;
  }

  allergicTo(allergen) {
    return this.allergies.includes(allergen);
  }
}

export default Allergies;