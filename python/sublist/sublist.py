EQUAL = 1
SUBLIST = 2
SUPERLIST = 3
UNEQUAL = 4

def check_lists(first_list, second_list):
  if len(first_list) == 0:
    if len(second_list) == 0:
      return EQUAL
    return SUBLIST
  if len(second_list) == 0:
    return SUPERLIST

  if first_list == second_list:
    return EQUAL

  if is_sublist(first_list, second_list):
    return SUBLIST
  
  if is_sublist(second_list, first_list):
    return SUPERLIST

  return UNEQUAL

def is_sublist(first_list, second_list):
  for i, num in enumerate(second_list):
    if num == first_list[0]:
      # found potential match, continue checking
      for j in range(1, len(first_list)):
        if j+i == len(second_list) or first_list[j] != second_list[j+i]:
          break
        if j == len(first_list) - 1:
          return True
  return False

    