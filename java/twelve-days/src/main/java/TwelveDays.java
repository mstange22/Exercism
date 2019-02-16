import java.util.stream.IntStream;
import java.util.stream.Collectors;

class TwelveDays {
    private final String[][] verseParts = { null,
        { "first", "a Partridge in a Pear Tree.\n" },
        { "second", "two Turtle Doves, and" },
        { "third", "three French Hens," },
        { "fourth", "four Calling Birds," },
        { "fifth", "five Gold Rings," },
        { "sixth", "six Geese-a-Laying," },
        { "seventh", "seven Swans-a-Swimming," },
        { "eighth", "eight Maids-a-Milking," },
        { "ninth", "nine Ladies Dancing," },
        { "tenth", "ten Lords-a-Leaping," },
        { "eleventh", "eleven Pipers Piping," },
        { "twelfth", "twelve Drummers Drumming," },
    };

    String verse(int verseNumber) {
        return new StringBuilder(
            "On the " + this.verseParts[verseNumber][0] + " day of Christmas my true love gave to me:"
            + IntStream.range(0, verseNumber)
                .mapToObj(i -> " " + verseParts[verseNumber - i][1])
                .collect(Collectors.joining())
        ).toString();
    }

    String verses(int startVerse, int endVerse) {
        return IntStream.rangeClosed(startVerse, endVerse)
            .mapToObj(this::verse)
            .collect(Collectors.joining("\n"));
    }
    
    String sing() {
        return verses(1, 12);
    }
}
