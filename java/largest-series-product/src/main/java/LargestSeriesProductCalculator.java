import java.util.stream.IntStream;
import java.util.stream.Collectors;
import java.util.Collections;
import java.util.stream.Stream;

class LargestSeriesProductCalculator {

    private final String digits;

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

        return IntStream.rangeClosed(0, this.digits.length() - numberOfDigits)
            .mapToObj(i -> digits.substring(i, i + numberOfDigits))
            .mapToInt(substring -> substring.chars()
                .map(c -> Character.getNumericValue(c))
                .reduce(1, (a, b) -> a * b)
            ).max().orElse(0);
    }
}
