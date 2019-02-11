import java.util.List;
import java.util.ArrayList;

class Series {
  private final String s;

  Series(String s) {
    this.s = s;
  }

  public List<String> slices(int n) {
    if (n > this.s.length()) {
      throw new IllegalArgumentException("Slice size is too big.");
    }
    if (n < 1) {
      throw new IllegalArgumentException("Slice size is too small.");
    }
    List<String> series = new ArrayList<String>();
    for (int i = 0; i <= this.s.length() - n; i++) {
      series.add(this.s.substring(i, i + n));
    }
    return series;
  }
}