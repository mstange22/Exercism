import java.util.stream.IntStream;
import java.util.stream.Collectors;

class House {
  private final String[][] verses = { { null },
    { "house that Jack built.", null },
    { "malt ", "lay in" },
    { "rat ", "ate" },
    { "cat ", "killed" },
    { "dog ", "worried" },
    { "cow with the crumpled horn ", "tossed" },
    { "maiden all forlorn ", "milked" },
    { "man all tattered and torn ", "kissed" },
    { "priest all shaven and shorn ", "married" },
    { "rooster that crowed in the morn ", "woke" },
    { "farmer sowing his corn ", "kept" },
    { "horse and the hound and the horn ", "belonged to" },
  };

  String verse(int n) {
    StringBuilder res = new StringBuilder("This is the " + verses[n][0]);
    for (int i = n; i > 1; i--) {
      res.append("that " + verses[i][1] + " the " + verses[i - 1][0]);
    }
    return res.toString();
  }

  String verses(int start, int end) {
    return IntStream.rangeClosed(start, end)
      .mapToObj(i -> verse(i))
      .collect(Collectors.joining("\n"));
  }

  String sing() {
    return verses(1, 12);
  }
}