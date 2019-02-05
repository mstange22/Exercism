class RomanNumeral {
  private String translated = "";
  int numbers[] = { 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 };
  String roman[] = { "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" };

  RomanNumeral(int num) {
    for (int i = 0; i < numbers.length; i++) {
      while (num >= numbers[i]) {
        translated += roman[i];
        num -= numbers[i];
      }
    }
  }

  String getRomanNumeral() {
    return translated;
  }
}