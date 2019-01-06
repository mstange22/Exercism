def slices(series, length):
  if length == 0:
    raise ValueError('Test slice cannot be zero')
  if length < 0:
    raise ValueError('Test slice cannot be negative')
  if len(series) == 0:
    raise ValueError('Empty series is invalid')
  if length > len(series):
    raise ValueError('Series does not have enough characters')

  series_list = list(series)
  return [''.join(series_list[i:i+length]) for i in range(len(series_list) - length + 1)]