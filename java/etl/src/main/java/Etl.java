import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Etl {
    Map<String, Integer> transform(Map<Integer, List<String>> old) {

        Map<String, Integer> map = new HashMap<>();

        for (Integer letterValue : old.keySet()) {

            for (String letter : old.get(letterValue)) {
                map.put(letter.toLowerCase(), letterValue);
            }
        }
        return map;
    }
}
