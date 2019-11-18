from collections import Counter

FULL_PRICE = 800

group_totals = {
  1: FULL_PRICE,
  2: FULL_PRICE * .95,
  3: FULL_PRICE * .90,
  4: FULL_PRICE * .80,
  5: FULL_PRICE * .75
}

def calculate_total(books):
  if len(books) == 0:
    return 0

  lowest = None
  c = Counter(books)

  # iterate over all possible series lengths, starting with highest
  for i in range(max(c.keys()), 0, -1):
    cost = 0
    book_count = 0
    # sorted list of counter key/value pairs
    temp = [list(x) for x in c.most_common()]

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
      cost += len(group) * group_totals[len(group)]
    # if this cost is lowest, replace current lowest
    if not lowest or cost < lowest:
      lowest = cost

  return lowest