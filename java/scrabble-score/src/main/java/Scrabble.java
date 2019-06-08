import java.util.Map;
import java.util.HashMap;

class Scrabble {
    private int score = 0;
    private static final Map<Character, Integer> points = new HashMap<Character, Integer>();

    static {
        int[] letterScores = { 1, 2, 3, 4, 5, 8, 10 };
        String[] letters = { "AEIOULNRST", "DG", "BCMP", "FHVWY", "K", "JX", "QZ" };
        for (int i = 0; i < letterScores.length; i++) {
            assignPointsToLetters(letters[i], letterScores[i]);
        }
    }

    private static void assignPointsToLetters(String letters, int value) {
        for (char c : letters.toCharArray()) {
            points.put(c, value);
        }
    }

    Scrabble(String word) {
        for (char c : word.toCharArray()) {
            score += points.get(Character.toUpperCase(c));
        }
    }

    int getScore() {
        return score;
    }
}