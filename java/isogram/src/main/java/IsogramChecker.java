import java.util.HashMap;
import java.util.Map;

class IsogramChecker {
    boolean isIsogram(String phrase) {
        Map<Character, Boolean> hm = new HashMap<>();
        for (int i = 0; i < phrase.length(); i++) {
            char c = Character.toLowerCase(phrase.charAt(i));
            if (c >= 'a' && c <= 'z') {
                if (hm.containsKey(c)) {
                    return false;
                }
                hm.put(c, true);
            }
        }
        return true;
    }
}