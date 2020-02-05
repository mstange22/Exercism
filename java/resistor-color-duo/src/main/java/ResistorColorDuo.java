import java.util.stream.IntStream;

class ResistorColorDuo {

    static String[] COLORS = {
        "black", "brown", "red", "orange", "yellow", "green",
        "blue", "violet", "grey", "white"
    };

    int value(String[] colors) {
        return IntStream.range(0, 2)
            .map(i -> IntStream.range(0, COLORS.length)
                .filter(j -> COLORS[j] == colors[i])
                .findFirst()
                .orElse(-1) * (int)Math.pow(10, 1 - i)
            ).sum();
    }
}