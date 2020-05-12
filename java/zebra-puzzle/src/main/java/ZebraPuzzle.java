import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.Arrays;

class ZebraPuzzle {
  Map<Integer, Map<String, String>> houses;

  List<String> COLORS = Arrays.asList("red", "blue", "yellow", "green", "ivory");
  List<String> INHABITANTS = Arrays.asList("Englishman", "Spaniard", "Norwegian", "Japanese", "Ukrainian");
  List<String> SMOKES = Arrays.asList("Old Gold", "Kools", "Chesterfields", "Lucky Strike", "Parliaments");
  List<String> DRINKS = Arrays.asList("orange juice", "coffee", "tea", "milk", "water");
  List<String> PETS = Arrays.asList("snails", "dog", "fox", "horse", "zebra");

  boolean checkSolution() {
    return false;
  }
  
  ZebraPuzzle() {
    // start with color in first house
    for (int i = 0; i < 5; i++) {
      houses = new HashMap<>();
      Map<String, String> firstHouse = new HashMap<>();
      firstHouse.put("color", COLORS.get(i));
      houses.put(0, firstHouse);
      boolean isSolved = checkAllCombinations() {
        
      }
    }
  }
}
