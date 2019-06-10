def rebase(input_base, digits, output_base):
  if input_base <= 1 or output_base <= 1:
    raise ValueError('invalid')

  base_10_num = 0

  for i, digit in enumerate(reversed(digits)):
    if digit < 0 or digit >= input_base:
      raise ValueError('invalid')
    base_10_num += digit * (input_base ** i)
  
  res = []

  while base_10_num > 0:
    res = [base_10_num % output_base] + res
    base_10_num //= output_base

  return res