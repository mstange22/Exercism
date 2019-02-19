import java.util.Set;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

class WordSearcher {

  private final Map<String, Optional<WordLocation>> foundWords = new HashMap<>();

  Map<String, Optional<WordLocation>> search(Set<String> words, char[][] grid) {
    for (String word : words) {
      // check all cells in grid for possible start of match
      for (int i = 0; i < grid.length; i++) {
        for (int j = 0; j < grid[i].length; j++) {
          if (grid[i][j] == word.charAt(0)) {
            // check each direction, passing in x and y increments
            boolean match = checkAdjacentCells(word, grid, i, j, 1, 0);
            if (!match) match = checkAdjacentCells(word, grid, i, j, -1, 0);
            if (!match) match = checkAdjacentCells(word, grid, i, j, 0, 1);
            if (!match) match = checkAdjacentCells(word, grid, i, j, 0, -1);
            if (!match) match = checkAdjacentCells(word, grid, i, j, 1, 1);
            if (!match) match = checkAdjacentCells(word, grid, i, j, -1, -1);
            if (!match) match = checkAdjacentCells(word, grid, i, j, 1, -1);
            if (!match) match = checkAdjacentCells(word, grid, i, j, -1, 1);
          }
        }
      }
      if (!foundWords.containsKey(word)) {
        foundWords.put(word, Optional.empty());
      }
    }
    return foundWords;
  }

  private boolean checkAdjacentCells(String word, char[][] grid, int y, int x, int xInc, int yInc) {
    Pair start = new Pair(x + 1, y + 1);
    x += xInc;
    y += yInc;
    int currentLetterIndex = 1;
    int matchedLetters = 1;
    while (checkYCondition(grid.length, y, yInc) && checkXCondition(grid[y].length, x, xInc) && grid[y][x] == word.charAt(currentLetterIndex)) {
      matchedLetters++;
      if (matchedLetters == word.length()) {
        foundWords.put(word, Optional.of(new WordLocation(start, new Pair(x + 1, y + 1))));
        return true;
      }
      x += xInc;
      y += yInc;
      currentLetterIndex++;
    }
    return false;
  }

  private boolean checkXCondition(int rowLength, int x, int xInc) {
    if (xInc < 0) return x >= 0;
    if (xInc > 0) return x < rowLength;
    return true;
  }

  private boolean checkYCondition(int columnLength, int y, int yInc) {
    if (yInc < 0) return y >= 0;
    if (yInc > 0) return y < columnLength;
    return true;
  }
}