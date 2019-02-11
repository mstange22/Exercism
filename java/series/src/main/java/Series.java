import java.util.List;
import java.util.stream.IntStream;
import java.util.stream.Collectors;

class Series {
  private final String digits;

  Series(String stringOfDigits) {
    this.digits = stringOfDigits;
  }

  public List<String> slices(int n) {
    if (n > this.digits.length()) {
      throw new IllegalArgumentException("Slice size is too big.");
    }
    if (n < 1) {
      throw new IllegalArgumentException("Slice size is too small.");
    }
    return IntStream.rangeClosed(0, this.digits.length() - n)
      .mapToObj(i -> this.digits.substring(i, i + n))
      .collect(Collectors.toList());
  }
}