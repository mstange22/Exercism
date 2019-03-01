MAX_MINUTES = 60 * 24

class Clock(object):
    def __init__(self, hour, minute):
        self.minute = (((hour % 24) * 60) + minute) % MAX_MINUTES

    def __repr__(self):
        (hour, minute) = divmod(self.minute, 60)
        return f'{hour:02}:{minute:02}'

    def __eq__(self, other):
        return self.minute == other.minute

    def __add__(self, minutes):
        return Clock(0, self.minute + minutes)

    def __sub__(self, minutes):
        return self + -minutes