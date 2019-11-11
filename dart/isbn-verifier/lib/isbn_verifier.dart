bool isValid(String input) {
  var stripped = input.toUpperCase().replaceAll(new RegExp(r'[^0-9X]'), '');
  if (stripped.length != 10) {
    return false;
  }
  var sum = 0;
  for(int i = 0; i < stripped.length; i++) {
    if (stripped[i] == 'X') {
        if (i == 9) {
          sum += 10;
        } else {
          return false;
        }
    } else {
      sum += int.parse(stripped[i]) * (10 - i);
    }
  }
  return sum % 11 == 0;
}