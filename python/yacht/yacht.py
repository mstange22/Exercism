from collections import Counter

YACHT = lambda x: 50 if len(set(x)) == 1 else 0
ONES = lambda x: numbers(x, 1)
TWOS = lambda x: numbers(x, 2)
THREES = lambda x: numbers(x, 3)
FOURS = lambda x: numbers(x, 4)
FIVES = lambda x: numbers(x, 5)
SIXES = lambda x: numbers(x, 6)
FULL_HOUSE = lambda x: full_house(x)
FOUR_OF_A_KIND = lambda x: four(x)
LITTLE_STRAIGHT = lambda x: 30 if len(set(x)) == 5 and 6 not in set(x) else 0
BIG_STRAIGHT = lambda x: 30 if len(set(x)) == 5 and 1 not in set(x) else 0
CHOICE = sum

def score(dice, category):
  return category(dice)

def numbers(dice, num):
  return dice.count(num) * num

def four(dice):
  fours = [die for die in set(dice) if dice.count(die) >= 4]
  return 4 * fours[0] if len(fours) > 0 else 0

def full_house(dice):
  return sum(dice) if sorted(Counter(dice).values()) == [2, 3] else 0