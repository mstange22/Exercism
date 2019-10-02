from collections import Counter

FIVE_BOOK = .75
FOUR_BOOK = .80
THREE_BOOK = .90
TWO_BOOK = .95

def calculate_group_total(books):
  res = len(books) * 800
  if len(books) == 5:
    res *= FIVE_BOOK
  elif len(books) == 4:
    res *= FOUR_BOOK
  elif len(books) == 3:
    res *= THREE_BOOK
  elif len(books) == 2:
    res *= TWO_BOOK
  return res

def calculate_total(books):
  if len(books) == 0:
    return 0

  costs = []
  c = Counter(books)

  # iterate over all possible series lengths, starting with highest
  for i in range(max(c.keys()), 0, -1):
    cost = 0
    book_count = 0
    # sorted list of counter key/value pairs
    temp = list(map(lambda x: list(x), sorted(dict(c).items(), key=lambda x: x[1], reverse=True)))

    # get cost for all books in temp list for this i max grouping value
    while book_count < len(books):
      # get the largest possible group for this i
      group = []
      # build the group of up to i books (or however many are left)
      for book in temp:
        # if there are remaining books at this position, add to current group
        if book[1] > 0:
          group.append(book[0])
          book[1] -= 1
          book_count += 1
        # stop if reach this current i number of books
        if len(group) == i:
          break
      cost += calculate_group_total(group)
    # add the cost for this grouping method
    costs.append(cost)

  return min(costs)