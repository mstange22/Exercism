import java.lang.Math;
import java.util.Stack;

class BaseConverter {

  private int base10Num;

  BaseConverter(int base, int[] digits) {
    if (base <= 1) {
      throw new IllegalArgumentException("Bases must be at least 2.");
    }

    for (int i = 0; i < digits.length; i++) {
      int currentDigitIndex = digits.length - 1 - i;
      if (digits[currentDigitIndex] < 0) {
        throw new IllegalArgumentException("Digits may not be negative.");
      }
      if (digits[currentDigitIndex] >= base) {
        throw new IllegalArgumentException("All digits must be strictly less than the base.");
      }
      base10Num += digits[currentDigitIndex] * Math.pow(base, i);
    }
  }

  int[] convertToBase(int base) {
    if (base <= 1) {
      throw new IllegalArgumentException("Bases must be at least 2.");
    }

    if (base10Num == 0) {
      return new int[]{0};
    }

    int temp = base10Num;
    Stack<Integer> tempStack = new Stack<>();

    while (temp > 0) {
      tempStack.push(temp % base);
      temp /= base;
    }

    int[] digits = new int[tempStack.size()];

    for (int i = 0; i < digits.length; i++) {
      digits[i] = tempStack.pop();
    }

    return digits;
  }
}