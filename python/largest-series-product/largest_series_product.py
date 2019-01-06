def largest_product(series, size):
  if len(series) == 0 and size > 0:
    raise ValueError('empty series with non-zero span')
  if size < 0:
    raise ValueError('negative size')
  if size > len(series):
    raise ValueError('size larger than series length')
  if len(series) == 0 or size == 0:
    return 1

  max_val = 0
  
  for i in range(len(series) - size + 1):
    try:
      prod = eval('*'.join(num for num in series[i:i+size]))
    except:
      raise ValueError('unsupported character')
    if prod > max_val:
      max_val = prod
  
  # get initial prod
  # prod = reduce(lambda x, y: x * y, list_int[:size])
  
  # if prod > max:
  #   max = prod
  
  # for j in range(size, len(list_int)):
  #   # divide off first element if not zero
  #   if list_int[j-size] != 0:
  #     prod /= list_int[j-size]
  #   else:
  #     # get product of other size - 1 values
  #     prod = 1
  #     for k in range(j-size + 1, j):
  #       prod *= list_int[k]
    
  #   # add element at j to product
  #   prod *= list_int[j]
  #   if prod > max:
  #     max = prod
  return max_val