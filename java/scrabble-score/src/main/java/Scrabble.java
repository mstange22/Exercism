import java.util.Map;
import java.util.HashMap;

class Scrabble {

    private Map<String, Integer> hm = new HashMap();
    private Map<Character, Integer> cm = new HashMap();
    private int score = 0;

    Scrabble(String word) {
        hm.put("AEIOULNRST", 1);
        hm.put("DG", 2);
        hm.put("BCMP", 3);
        hm.put("FHVWY", 4);
        hm.put("K", 5);
        hm.put("JX", 8);
        hm.put("QZ", 10);

        // build <char, int> map from <string, int> map
        for (String key : hm.keySet()) {
            for (char c : key.toCharArray()) {
                cm.put(c, hm.get(key));
            }
        }
        
        for (char c : word.toCharArray()) {
            this.score += cm.get(Character.toUpperCase(c));
        }
    }

    int getScore() {
        return this.score;
    }

}
