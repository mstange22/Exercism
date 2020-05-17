from math import sqrt

def is_prime(n: int) -> bool:
    for i in range(2, int(sqrt(n)) + 1):
        if n % i == 0:
            return False
    
    return True

def prime(number: int) -> int:
    if number < 1:
        raise ValueError("Error: Number must be positive")

    primes = [2]
    test_val = 3

    while len(primes) <= number:
        if is_prime(test_val):
            primes.append(test_val)
        test_val += 1

    return primes[number - 1]
