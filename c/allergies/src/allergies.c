#include "allergies.h"
#include <stdlib.h>

bool is_allergic_to(allergen_t allergen, int score)
{
  return allergen & score;
}

void get_allergens(int score, allergen_list_t* allergen_list)
{
  allergen_list->allergens = malloc(ALLERGEN_COUNT * sizeof(allergen_t));
  allergen_list->count = 0;

  for (allergen_t allergen = ALLERGEN_EGGS; allergen <= ALLERGEN_CATS; allergen *= 2)
  {
    if (score & allergen)
    {
      allergen_list->allergens[allergen_list->count] = allergen;
      allergen_list->count++;
    }
  }
}
