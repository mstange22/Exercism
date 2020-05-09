import java.util.stream.IntStream;
import java.util.stream.Collectors;

class CryptoSquare {
  String normalized;
  int rows = 0;
  int cols;

  CryptoSquare(final String phrase) {
    normalized = phrase.toLowerCase().replaceAll("[^0-9a-z]", "");
    cols = (int)Math.ceil(Math.sqrt(normalized.length()));
    if (cols != 0) {
      rows = (int)Math.ceil(normalized.length() / (double)cols);
    }
  }

  String getCiphertext() {
    String[] chunks = getChunks();
    return IntStream.range(0, cols)
      .mapToObj(i -> this.getSection(chunks, i)).collect(Collectors.joining(" "));
  }

  String getSection(String[] chunks, int i) {
    return IntStream.range(0, rows)
      .mapToObj(j -> chunks[j].length() > i ? Character.toString(chunks[j].charAt(i)) : " ")
      .collect(Collectors.joining(""));
  }

  String[] getChunks() {
    return IntStream.range(0, rows)
      .mapToObj(this::getChunk).toArray(String[]::new);
  }

  String getChunk(int i) {
    int start = i * cols;
    int end = start + cols > normalized.length() ? normalized.length() : start + cols ;
    return normalized.substring(start, end);
  }
}