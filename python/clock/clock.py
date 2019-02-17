MAX_MINUTES = 60 * 24

class Clock(object):
    def __init__(self, hour, minute):
        self.minute = (((hour % 24) * 60) + minute) % MAX_MINUTES

    def __repr__(self):
        return f'{(self.minute // 60):02}' + ':' + f'{(self.minute % 60):02}'

    def __eq__(self, other):
        return self.minute == other.minute

    def __add__(self, minutes):
        return Clock(0, self.minute + minutes)

    def __sub__(self, minutes):
        return Clock(0, self.minute - minutes)