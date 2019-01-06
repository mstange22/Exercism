from random import randint

class Robot(object):
    name_list = []
    def __init__(self):
        self.reset()
    
    def reset(self):
        name = ''
        for i in range(5):
            if (i < 2):
                name += chr(randint(ord('A'), ord('Z')))
            else:
                name += str(randint(0, 9))

        if (name in self.name_list):
            self.reset()
        else:
            self.name = name
            self.name_list.append(name)
