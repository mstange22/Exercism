class Luhn {
  bool valid(String input) {
    if (input.trim().length <= 1) {
      return false;
    }
    var sum = 0;
    var zero = '0'.codeUnitAt(0);
    var nine = '9'.codeUnitAt(0);
    var counter = 0;
    for (var digit in input.split('').reversed) {
      if (digit != ' ') {
        var code = digit.codeUnitAt(0);
        if (code < zero || code > nine) {
          return false;
        }
        if (counter % 2 == 1) {
          sum += digit == '9' ? 9 : (int.parse(digit) * 2) % 9;
        } else {
          sum += int.parse(digit);
        }
        counter++;
      }
    }
    return sum % 10 == 0;
  }
}
