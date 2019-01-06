from random import randint
from math import floor

def modifier(constitution):
    return floor((constitution - 10) / 2)

class Character:
    def __init__(self):
        self.strength = randint(1, 6) + randint(1, 6) + randint(1, 6)
        self.dexterity = randint(1, 6) + randint(1, 6) + randint(1, 6)
        self.constitution = randint(1, 6) + randint(1, 6) + randint(1, 6)
        self.intelligence = randint(1, 6) + randint(1, 6) + randint(1, 6)
        self.wisdom = randint(1, 6) + randint(1, 6) + randint(1, 6)
        self.charisma = randint(1, 6) + randint(1, 6) + randint(1, 6)
        self.hitpoints = 10 + modifier(self.constitution)

    def ability(self):
        return self.strength