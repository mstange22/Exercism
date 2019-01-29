import java.util.Map;
import java.util.HashMap;

class RnaTranscription {
    private Map<Character, Character> rnaMap = new HashMap<>();

    RnaTranscription() {
        rnaMap.put('G', 'C');
        rnaMap.put('C', 'G');
        rnaMap.put('T', 'A');
        rnaMap.put('A', 'U');
    }

    String transcribe(String dnaStrand) {
        String res = "";
        for (char c : dnaStrand.toCharArray()) {
            res += rnaMap.get(c);
        }
        return res;
    }
}
