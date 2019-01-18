import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.ArrayList;

class ProteinTranslator {
    private Map<String, String> cm = new HashMap<>();

    ProteinTranslator() {
        cm.put("AUG", "Methionine");
        cm.put("UUU", "Phenylalanine");
        cm.put("UUC", "Phenylalanine");
        cm.put("UUA", "Leucine");
        cm.put("UUG", "Leucine");
        cm.put("UCU", "Serine");
        cm.put("UCC", "Serine");
        cm.put("UCA", "Serine");
        cm.put("UCG", "Serine");
        cm.put("UAU", "Tyrosine");
        cm.put("UAC", "Tyrosine");
        cm.put("UGU", "Cysteine");
        cm.put("UGC", "Cysteine");
        cm.put("UGG", "Tryptophan");
        cm.put("UAA", "STOP");
        cm.put("UAG", "STOP");
        cm.put("UGA", "STOP");
    }

    List<String> translate(String rnaSequence) {
        List<String> res = new ArrayList<>();
        for (int i = 0; i < rnaSequence.length() - 2; i++) {
            String protein = cm.get(rnaSequence.substring(i, i + 3));
            if (protein == "STOP") {
                return res;
            }
            res.add(protein);
            i += 2;
        }
        return res;
    }
}