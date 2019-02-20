import java.util.stream.IntStream;
import java.util.stream.Collectors;

class FoodChain {
  private static final int FLY = 1;
  private static final int BIRD = 3;
  private static final int HORSE = 8;

  private final String[][] songParts = {{null},
    { "fly", "I don't know why she swallowed the fly. Perhaps she'll die." },
    { "spider", "It wriggled and jiggled and tickled inside her.\n" },
    { "bird", "How absurd to swallow a bird!\n" },
    { "cat", "Imagine that, to swallow a cat!\n" },
    { "dog", "What a hog, to swallow a dog!\n" },
    { "goat", "Just opened her throat and swallowed a goat!\n" },
    { "cow", "I don't know how she swallowed a cow!\n" },
    { "horse", "She's dead, of course!" },
  };

  String verse(int verse) {
    StringBuilder s = new StringBuilder("I know an old lady who swallowed a " + songParts[verse][0] + ".\n");
    // if swallowed a horse, she dead.
    if (verse == HORSE) return s.toString() + songParts[HORSE][1];
    s.append(songParts[verse][1]);

    for (int i = verse; i > 1; i--) {
      s.append("She swallowed the " + songParts[i][0] + " to catch the " + songParts[i - 1][0]);
      if (i == BIRD) s.append(" that wriggled and jiggled and tickled inside her");
      s.append(".\n");
    }
    // if this is verse 1, we've already said she might die.
    if (verse != FLY) s.append(songParts[FLY][1]);
    return s.toString();
  }

  String verses(int start, int end) {
    return IntStream.rangeClosed(start, end)
      .mapToObj(i -> verse(i))
      .collect(Collectors.joining("\n\n"));
  }
}