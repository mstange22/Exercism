#ifndef PALINDROME_PRODUCTS
#define PALINDROME_PRODUCTS

typedef struct factor_t {
  int factor_a;
  int factor_b;
  struct factor_t* next;
} factor_t;

typedef struct product_t {
  int smallest;
  int largest;
  struct factor_t factors_sm[2];
  struct factor_t factors_lg[2];
  char *error;
} product_t;

product_t *get_palindrome_product(const int lower, const int upper);
void free_product(product_t *product);

#endif
