def collatz_steps(number):
  steps = 0
  if number <= 0:
    raise ValueError('Number must be greater than 0')
  while number > 1:
    if number % 2 == 0:
      number /= 2
    else:
      number = (number * 3) + 1
    steps += 1
  return steps
