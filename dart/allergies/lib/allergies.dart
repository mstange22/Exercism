class Allergies {
  Map<String, int> map = {
    "eggs": 1,
    "peanuts": 2,
    "shellfish": 4,
    "strawberries": 8,
    "tomatoes": 16,
    "chocolate": 32,
    "pollen": 64,
    "cats": 128,
  };

  bool allergicTo(String allergy, int score) => score & map[allergy] > 0;

  List<String> list(int score) => map.keys.where((k) => score & map[k] > 0).toList();
}
