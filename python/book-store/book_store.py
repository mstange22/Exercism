from collections import Counter

FULL_PRICE = 800

group_totals = {
  1: FULL_PRICE,
  2: FULL_PRICE * .95,
  3: FULL_PRICE * .90,
  4: FULL_PRICE * .80,
  5: FULL_PRICE * .75
}

def get_group(book_counts, group_size):
  # if len(book_counts) < group_size:
  #   return []

  group = []

  for book in book_counts:
    # if there are remaining books at this position, add to current group
    if book[1] > 0:
      group.append(book[0])
      book[1] -= 1
    # stop if reach this current i number of books
    if len(group) == group_size:
      break
  
  return group



def calculate_total(books):
  if len(books) == 0:
    return 0

  lowest = None
  c = Counter(books)

  # iterate over all possible series lengths, starting with highest
  for series_count in range(len(c.keys()), 0, -1):
    cost = 0
    book_count = 0
    # sorted list of counter key/value pairs
    working_book_counts = [list(x) for x in c.most_common()]

    # need to test all possible subgroups
    # curr_test_group_count = series_count
    # while curr_test_group_count > 1:

    # get cost for all books in temp list for this i max grouping value
    while book_count < len(books):
      # get the largest possible group for this i
      group = get_group(working_book_counts, series_count)
      book_count += len(group)
      # build the group of up to i books (or however many are left)
      # for book in working_book_counts:
      #   # if there are remaining books at this position, add to current group
      #   if book[1] > 0:
      #     group.append(book[0])
      #     book[1] -= 1
      #     book_count += 1
      #   # stop if reach this current i number of books
      #   if len(group) == series_count:
      #     break
      cost += len(group) * group_totals[len(group)]
    # if this cost is lowest, replace current lowest
    if not lowest or cost < lowest:
      lowest = cost

  return lowest

# print(calculate_total([2, 2]))
print(calculate_total([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3]))