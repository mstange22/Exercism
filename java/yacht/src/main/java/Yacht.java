import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;

class Yacht {
    private int score = 0;

    Yacht(int[] dice, YachtCategory yachtCategory) {
        Set<Integer> distinctDice = new HashSet<>();
        Map<Integer, Integer> dieCounts = new HashMap<>();
        int totalOfAllDice = 0;
        for (int i : dice) {
            distinctDice.add(i);
            int count = dieCounts.containsKey(i) ? dieCounts.get(i) : 0;
            dieCounts.put(i, count + 1);
            totalOfAllDice += i;
        } 
        switch (yachtCategory) {
            case YACHT:
                if (distinctDice.size() == 1) {
                    this.score = 50;
                }
                break;
            case ONES:
                getNumberScore(dice, 1);
                break;
            case TWOS:
                getNumberScore(dice, 2);
                break;
            case THREES:
                getNumberScore(dice, 3);
                break;
            case FOURS:
                getNumberScore(dice, 4);
                break;
            case FIVES:
                getNumberScore(dice, 5);
                break;
            case SIXES:
                getNumberScore(dice, 6);
                break;
            case FULL_HOUSE:
                if (distinctDice.size() == 2) {
                    for (int key : dieCounts.keySet()) {
                        if (dieCounts.get(key) == 3) {
                            this.score = totalOfAllDice;
                        }
                    }
                }
                break;
            case FOUR_OF_A_KIND:
                if (distinctDice.size() == 2 || distinctDice.size() == 1) {
                    for (int key : dieCounts.keySet()) {
                        int rollCount = dieCounts.get(key);
                        if (rollCount == 4 || rollCount == 5) {
                            this.score = 4 * key;
                        }
                    }
                }
                break;
            case BIG_STRAIGHT:
                if (distinctDice.size() == 5 && !dieCounts.keySet().contains(1)) {
                    this.score = 30;
                }
                break;
            case LITTLE_STRAIGHT:
                if (distinctDice.size() == 5 && !dieCounts.keySet().contains(6)) {
                    this.score = 30;
                }
                break;
            case CHOICE:
                this.score = totalOfAllDice;
                break;
            default:
                break;
        }
    }

    private void getNumberScore(int []dice, int n) {
        for (int die : dice) {
            if (die == n) {
                this.score += n;
            }
        }
    }

    int score() {
        return this.score;
    }

}
