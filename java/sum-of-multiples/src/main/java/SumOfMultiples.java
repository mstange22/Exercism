import java.util.Set;
import java.util.HashSet;

class SumOfMultiples {
    private Set<Integer> multiples = new HashSet<Integer>();

    SumOfMultiples(int number, int[] set) {
        for (int i : set) {
            for (int multiple = i; multiple < number; multiple += i) {
                if (multiple == 0) break;
                multiples.add(multiple);
            }
        }
    }

    int getSum() {
        return multiples.stream().mapToInt(Integer::intValue).sum();
    }
}
