from datetime import timedelta

def add_gigasecond(moment):
  return moment + timedelta(seconds=1000000000)