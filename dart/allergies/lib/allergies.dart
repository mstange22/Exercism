class Allergies {
  Map<String, int> ALLERGENS = {
    "eggs": 1,
    "peanuts": 2,
    "shellfish": 4,
    "strawberries": 8,
    "tomatoes": 16,
    "chocolate": 32,
    "pollen": 64,
    "cats": 128,
  };

  bool allergicTo(String allergen, int score) {
    return score & ALLERGENS[allergen] == ALLERGENS[allergen];
  }

  List<String> list(int score) {
    return ALLERGENS.keys.where((key) => score % 256 & ALLERGENS[key] == ALLERGENS[key]).toList();
  }
}
