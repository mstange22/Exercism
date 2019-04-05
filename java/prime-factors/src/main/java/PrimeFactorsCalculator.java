import java.util.ArrayList;
import java.util.List;

class PrimeFactorsCalculator {

  List<Long> calculatePrimeFactorsOf(Long n) {
    List<Long> factors = new ArrayList<>();
    for (long i = 2; i <= n; i++) {
      while (n % i == 0) {
        factors.add(i);
        n /= i;
      }
    }
    return factors;
  }
}
