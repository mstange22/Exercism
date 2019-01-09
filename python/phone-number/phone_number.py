import re
class Phone(object):
  def __init__(self, phone_number):
    stripped_number = re.sub('[^0-9]','', phone_number)
    if stripped_number[0] == '1':
      stripped_number = stripped_number[1:]
    if len(stripped_number) != 10:
        raise ValueError('invalid number')
    if re.search('^[01]+|^[0-9]{3}[01]+', stripped_number):
      raise ValueError('invalid number')
    self.number = stripped_number
    self.area_code = stripped_number[:3] if len(stripped_number) else stripped_number[1:4]
  
  def pretty(self):
    return '(' + self.area_code + ') ' + self.number[3:6] + "-" + self.number[6:]

