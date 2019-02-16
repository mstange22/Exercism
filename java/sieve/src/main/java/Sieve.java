import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

class Sieve {
    private final List<Integer> primes = new ArrayList<Integer>();

    // flag composite numbers with map 
    private final Map<Integer, Boolean> nonPrimes = new HashMap<Integer, Boolean>();

    Sieve(int maxPrime) {
        // increment until find next available unflagged number
        for (int i = 2; i <= maxPrime; i++) {
            if (!nonPrimes.containsKey(i)) {
                // first unflagged number is prime
                primes.add(i);
                // mark all multiples as not prime
                for (int j = i + i; j <= maxPrime; j += i) {
                    nonPrimes.put(j, true);
                }
            }
        }
    }

    List<Integer> getPrimes() {
        return this.primes;
    }
}
