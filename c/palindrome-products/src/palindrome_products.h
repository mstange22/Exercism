#ifndef PALINDROME_PRODUCTS
#define PALINDROME_PRODUCTS

#define MAX_FACTORS 16

typedef struct factor_t {
  int factor_a;
  int factor_b;
  struct factor_t* next;
} factor_t;

typedef struct product_t {
  int smallest;
  int largest;
  factor_t *factors_sm;
  factor_t *factors_lg;
  char *error;
} product_t;

product_t *get_palindrome_product(const int lower, const int upper);
void free_product(product_t *product);

#endif
