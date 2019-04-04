class PrimeCalculator {

    int nth(int n) {
        if (n == 0) throw new IllegalArgumentException();
        int counter = 0;
        int curr = 2;
        while (true) {
            if (isPrime(curr)) {
                counter++;
                if (counter == n) {
                    return curr;
                }
            }
            curr++;
        }
    }

    boolean isPrime(int n) {
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

}
