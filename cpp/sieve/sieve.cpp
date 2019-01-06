#include "sieve.h"
#include <iostream>

vector<int> sieve::primes(const int max) {
  vector<int> primes;
  vector<int> sieve(max + 1);

  // initialize all values in range to be prime
  fill(sieve.begin(), sieve.end(), 1);

  for (int i = 2; i <= max; i++) {
    // skip ahead to first element not marked as prime
    while (sieve[i] == 0 && i < max) {
      i++;
    }
    
    // mark all multiples of i as not prime
    for (int k = i + i; k <= max; k += i) {
      sieve[k] = 0;
    }
  }

  // build primes vector to return
  for (size_t i = 2; i < sieve.size(); i++) {
    if (sieve[i] == 1) {
      primes.push_back(i);
    }
  }

  return primes;
}