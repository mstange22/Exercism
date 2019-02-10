import java.util.List;
import java.util.ArrayList;

class NaturalNumber {
  private List<Integer> factors = new ArrayList<Integer>();
  private Classification classification;

  NaturalNumber(int n) {
    if (n < 1) {
      throw new IllegalArgumentException("You must supply a natural number (positive integer)");
    }
    if (n == 1) {
      this.classification = Classification.DEFICIENT;
      return;
    }
    factors.add(1);
    int sum = 0;
    for (int i = 2; i <= n / 2; i++) {
      if (n % i == 0) {
        factors.add(i);
      }
    }
    for (int i = 0; i < factors.size(); i++) {
      sum += factors.get(i);
    }
    if (sum == n) {
      this.classification = Classification.PERFECT;
    } else if (sum > n) {
      this.classification = Classification.ABUNDANT;
    } else {
      this.classification = Classification.DEFICIENT;
    }
  }

  public Classification getClassification() {
    return this.classification;
  }
}
