def binary_search(list_of_numbers, number):
  if len(list_of_numbers) == 0:
    raise ValueError('Not found')
  min = 0
  max = len(list_of_numbers) - 1
  while min <= max:
    mid = (min + max) // 2
    if list_of_numbers[mid] == number:
      return mid
    if list_of_numbers[mid] > number:
      max = mid - 1
    else:
      min = mid + 1
  
  raise ValueError('Not found')