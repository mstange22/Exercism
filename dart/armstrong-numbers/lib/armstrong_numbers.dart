import 'dart:math';

class ArmstrongNumbers {
  bool isArmstrongNumber(int n) {
    // convert to string and get length
    String digits = n.toString();
    int length = digits.length;

    // split into list and fold into sum
    int sum = digits.split("")
      .fold(0, (sum, char) => sum + pow(int.parse(char), length).round());

    return sum == n;
  }
}
