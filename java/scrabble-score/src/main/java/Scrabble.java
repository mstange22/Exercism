import java.util.Map;
import java.util.HashMap;

class Scrabble {
    private int score;

    private static final Map<Character, Integer> points = new HashMap<Character, Integer>();

    static {
        assignPointsToLetters(points, "AEIOULNRST", 1);
        assignPointsToLetters(points, "DG", 2);
        assignPointsToLetters(points, "BCMP", 3);
        assignPointsToLetters(points, "FHVWY", 4);
        assignPointsToLetters(points, "K", 5);
        assignPointsToLetters(points, "JX", 8);
        assignPointsToLetters(points, "QZ", 10);
    }

    private static void assignPointsToLetters(Map<Character, Integer> points, String letters, int value) {
        for (char c : letters.toCharArray()) {
            points.put(c, value);
        }
    }

    Scrabble(String word) {
        int accumulatedScore = 0;
        for (char c : word.toCharArray()) {
            accumulatedScore += points.get(Character.toUpperCase(c));
        }
        this.score = accumulatedScore;
    }

    int getScore() {
        return this.score;
    }
}