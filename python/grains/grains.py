def on_square(integer_number):
  if integer_number < 1 or integer_number > 64:
    raise ValueError('Number must be between 1 & 64 (inclusive).')
  return 1 << integer_number - 1


def total_after(integer_number):
  if integer_number < 1 or integer_number > 64:
    raise ValueError('Number must be between 1 & 64 (inclusive).')
  return (1 << integer_number) - 1
