import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

class DiamondPrinter {

    List<String> printToList(char a) {
        List<String> res = new ArrayList<String>();
        int diff = a - 'A';

        for (int i = 0; i <= diff; i++) {
            StringBuilder s1 = new StringBuilder();
            // build first half of line
            s1.append(spaces(diff - i) + (char)('A' + i) + spaces(i));
            StringBuilder s2 = new StringBuilder(s1);
            s1.append(s2.reverse().substring(1));
            res.add(s1.toString());
        }

        // quit now if only 'A'
        if (a == 'A') return res;

        // create bottom half by reflecting top half
        List<String> bottom = new ArrayList<String>(res);
        Collections.reverse(bottom);
        res.addAll(bottom.subList(1, bottom.size()));
        return res;
    }

    private String spaces(int n) {
        StringBuilder res = new StringBuilder();
        for (int i = 0; i < n; i++) {
            res.append(' ');
        }
        return res.toString();
    }

}
