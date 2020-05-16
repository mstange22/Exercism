import java.util.List;

class Property {
  String name;
  List<String> elements;
  List<Integer> houseIndexes;

  Property(String name, List<String> elements, List<Integer> houseIndexes) {
    this.name = name;
    this.elements = elements;
    this.houseIndexes = houseIndexes;
  }
}