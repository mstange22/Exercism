ALLERGENS = [
    { 'value': 1, 'name': 'eggs'},
    { 'value': 2, 'name': 'peanuts'},
    { 'value': 4, 'name': 'shellfish'},
    { 'value': 8, 'name': 'strawberries'},
    { 'value': 16, 'name': 'tomatoes'},
    { 'value': 32, 'name': 'chocolate'},
    { 'value': 64, 'name': 'pollen'},
    { 'value': 128, 'name': 'cats'},
]

class Allergies(object):
    def __init__(self, score):
        self._lst = [a['name'] for a in ALLERGENS if score & a['value'] == a['value']]

    def is_allergic_to(self, item):
        return item in self._lst

    @property
    def lst(self):
        return self._lst
