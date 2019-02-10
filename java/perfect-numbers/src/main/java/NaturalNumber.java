import java.util.stream.IntStream;

class NaturalNumber {

  private Classification classification;

  NaturalNumber(int n) {
    if (n < 1) {
      throw new IllegalArgumentException("You must supply a natural number (positive integer)");
    }

    int sum = IntStream.rangeClosed(1, n / 2).filter(i -> n % i == 0).sum();

    if (sum == 1) {
      this.classification = Classification.DEFICIENT;
    } else if (sum == n) {
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
