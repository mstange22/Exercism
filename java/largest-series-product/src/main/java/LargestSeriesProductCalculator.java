import java.util.stream.IntStream;
import java.util.stream.Collectors;
import java.util.List;

class LargestSeriesProductCalculator {

    private final String digits;
    private int largest = 0;

    LargestSeriesProductCalculator(String inputNumber) {
        if (!inputNumber.matches("^[0-9]*$")) {
            throw new IllegalArgumentException("String to search may only contain digits.");
        }
        this.digits = inputNumber;
    }

    long calculateLargestProductForSeriesLength(int numberOfDigits) {
        if (numberOfDigits < 0) {
            throw new IllegalArgumentException("Series length must be non-negative.");
        }
        if (numberOfDigits > this.digits.length()) {
            throw new IllegalArgumentException("Series length must be less than or equal to the length of the string to search.");
        }

        IntStream.rangeClosed(0, this.digits.length() - numberOfDigits)
            .mapToObj(i -> digits.substring(i, i + numberOfDigits))
            .collect(Collectors.toList())
            .forEach(s -> {
                int prod = 1;
                for (char c : s.toCharArray()) {
                    prod *= (c - '0');
                }
                if (prod > this.largest) {
                    this.largest = prod;
                }
            });
        return this.largest;
    }
}
