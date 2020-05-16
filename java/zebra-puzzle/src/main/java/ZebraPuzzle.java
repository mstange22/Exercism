import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Collectors;

class ZebraPuzzle {

  private static final Map<Integer, Map<String, String>> houses = new HashMap<>();
  private static final List<Property> properties = new ArrayList<>();
  private static final Map<String, Map<String, Integer>> indexes = new HashMap<>();

  static {

    String[] PROPERTIES = { "colors", "inhabitants", "smokes", "drinks", "pets" };

    for (int i = 0; i < 5; i++) {
      Map<String, String> newHouse = new HashMap<>();
      Map<String, Integer> newIndexes = new HashMap<>();
      houses.put(new Integer(i), newHouse);
      indexes.put(PROPERTIES[i], newIndexes);
    }

    // seed known info
    houses.get(0).put("color", "yellow");
    indexes.get("colors").put("yellow", 0);
    houses.get(0).put("inhabitant", "Norwegian");
    indexes.get("inhabitants").put("Norwegian", 0);
    houses.get(0).put("smoke", "Kools");
    indexes.get("smokes").put("Kools", 0);

    houses.get(1).put("color", "blue");
    indexes.get("colors").put("blue", 1);
    houses.get(1).put("pet", "horse");
    indexes.get("pets").put("horse", 1);

    houses.get(2).put("drink", "milk");
    indexes.get("drinks").put("milk", 2);

    properties.add(new Property(
      "inhabitants",
      Arrays.asList("Spaniard", "Japanese", "Ukrainian", "Englishman"),
      Arrays.asList(1, 2, 3, 4)
    ));
    properties.add(new Property(
      "smokes",
      Arrays.asList("Old Gold", "Chesterfields", "Lucky Strike", "Parliaments"),
      Arrays.asList(1, 2, 3, 4)
    ));
    properties.add(new Property(
      "drinks",
      Arrays.asList("orange juice", "coffee", "tea", "water"),
      Arrays.asList(0, 1, 3, 4)
    ));
    properties.add(new Property(
      "pets",
      Arrays.asList("snails", "dog", "fox", "zebra"),
      Arrays.asList(0, 2, 3, 4)
    ));

    solvePuzzle();
  }

  private static void solvePuzzle() {
    for (String currColor : Arrays.asList("red", "ivory")) {
      if (currColor == "red") {
        houses.get(2).put("color", "red");
        houses.get(3).put("color", "ivory");
        houses.get(4).put("color", "green");
        indexes.get("colors").put("red", 2);
        indexes.get("colors").put("ivory", 3);
        indexes.get("colors").put("green", 4);
      } else {
        houses.get(2).put("color", "ivory");
        houses.get(3).put("color", "green");
        houses.get(4).put("color", "red");
        indexes.get("colors").put("ivory", 2);
        indexes.get("colors").put("green", 3);
        indexes.get("colors").put("red", 4);
      }
      // check all possible combinations until solved
      boolean isSolved = checkProperties(properties.get(0).houseIndexes, properties.get(0).elements, 0);
      if (isSolved) {
        return;
      }
    }
  }

  private static boolean checkProperties(List<Integer> remainingHouses, List<String> remainingElements, int propertyIndex) {
    // no more current properties
    if (remainingHouses.size() == 0 || remainingElements.size() == 0) {
      propertyIndex += 1;

      // no more properties
      if (propertyIndex == properties.size()) {
        return checkSolution();
      } else { // check next property
        List<Integer> nextPropertyHouses = properties.get(propertyIndex).houseIndexes;
        List<String> nextPropertyElements = properties.get(propertyIndex).elements;
        return checkProperties(nextPropertyHouses, nextPropertyElements, propertyIndex);
      }
    }

    // check current property
    String currProperty = properties.get(propertyIndex).name;
    int currHouseIndex = remainingHouses.get(0);

    for (String currElement : remainingElements) {
      houses.get(currHouseIndex).put(currProperty.substring(0, currProperty.length() - 1), currElement);
      indexes.get(currProperty).put(currElement, currHouseIndex);


      List<String> newRemainingElements = remainingElements.stream()
        .filter(element -> element.compareTo(currElement) != 0)
        .collect(Collectors.toList());

      boolean isSolved = checkProperties(remainingHouses.subList(1, remainingHouses.size()), newRemainingElements, propertyIndex);
      if (isSolved) {
        return true;
      }
    }
  
    return false;
  }

  private static boolean checkSolution() {
    Map<String, Integer> colors = indexes.get("colors");
    Map<String, Integer> inhabitants = indexes.get("inhabitants");
    Map<String, Integer> smokes = indexes.get("smokes");
    Map<String, Integer> drinks = indexes.get("drinks");
    Map<String, Integer> pets = indexes.get("pets");

    // successful result must satisfy all (variable) conditions
    if (colors.get("red") == inhabitants.get("Englishman") && inhabitants.get("Spaniard") == pets.get("dog") &&
      colors.get("green") == drinks.get("coffee") && inhabitants.get("Ukrainian") == drinks.get("tea") &&
      smokes.get("Old Gold") == pets.get("snails") && (Math.abs(smokes.get("Chesterfields") - pets.get("fox")) == 1) &&
      smokes.get("Lucky Strike") == drinks.get("orange juice") && inhabitants.get("Japanese") == smokes.get("Parliaments")) {
        return true;
    }
    return false;
  }

  String getWaterDrinker() {
    for (Map.Entry<Integer, Map<String, String>> entry : houses.entrySet()) {
      if (entry.getValue().get("drink").compareTo("water") == 0) {
        return entry.getValue().get("inhabitant");
      }
    }
    return "";
  }

  String getZebraOwner() {
    for (Map.Entry<Integer, Map<String, String>> entry : houses.entrySet()) {
      if (entry.getValue().get("pet").compareTo("zebra") == 0) {
        return entry.getValue().get("inhabitant");
      }
    }
    return "";
  }

}
