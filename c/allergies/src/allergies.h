#ifndef ALLERGIES_H
#define ALLERGIES_H

#include <stdbool.h>

typedef enum {
   ALLERGEN_EGGS = 1,
   ALLERGEN_PEANUTS = 2,
   ALLERGEN_SHELLFISH = 4,
   ALLERGEN_STRAWBERRIES = 8,
   ALLERGEN_TOMATOES = 16,
   ALLERGEN_CHOCOLATE = 32,
   ALLERGEN_POLLEN = 64,
   ALLERGEN_CATS = 128,
   ALLERGEN_COUNT = 8
} allergen_t;

typedef struct {
   int count;
   allergen_t *allergens;
} allergen_list_t;

bool is_allergic_to(allergen_t, int);
void get_allergens(int, allergen_list_t*);

#endif
