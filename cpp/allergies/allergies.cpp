#include "allergies.h"

using namespace std;

allergies::allergy_test::allergy_test(int score) {
  bits = score % 256;
}

bool allergies::allergy_test::is_allergic_to(string allergen) {
  return bits & bit_map[allergen];
}

unordered_set<string> allergies::allergy_test::get_allergies() {
  unordered_set<string> allergies;
  map<string, int>::iterator it;
  for (it = bit_map.begin(); it != bit_map.end(); it++){
    if (bits & it->second) {
      allergies.insert(it->first);
    }
  }
  return allergies;
}