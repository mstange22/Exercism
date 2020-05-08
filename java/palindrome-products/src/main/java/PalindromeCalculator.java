import java.util.SortedMap; 
import java.util.TreeMap;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

public class PalindromeCalculator {

  SortedMap<Long, List<List<Integer>>> getPalindromeProductsWithFactors(final int min, final int max) {
    if (min > max || max < min) {
      throw new IllegalArgumentException("invalid input: min must be <= max");
    }

    final SortedMap<Long, List<List<Integer>>> res = new TreeMap<Long, List<List<Integer>>>();

    for (int i = min; i <= max; i++) {
      for (int j = min; j <= max; j++) {
        final Long prod = new Long(i * j);

        if (isPalindrome(prod)) {
          final List<Integer> factors = Arrays.asList(i, j);

          if (!res.containsKey(prod)) {
            final List<List<Integer>> allFactors = new ArrayList<>();
            allFactors.add(factors);
            res.put(prod, allFactors);
          } else {
            final List<List<Integer>> existingFactors = res.get(prod);
            final List<Integer> otherFactors = Arrays.asList(j, i);
            if (!existingFactors.contains(factors) && !existingFactors.contains(otherFactors)) {
              existingFactors.add(factors);
            }
          }
        }
      }
    }
    return res;
  }

  private boolean isPalindrome(final Long prod) {
    final String s = prod.toString();
    for (int i = 0; i < s.length() / 2; i++) {
      if (s.charAt(i) != s.charAt(s.length() - 1 - i)) {
        return false;
      }
    }
    return true;
  }

}
