SHARPS = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
FLATS = ['F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E']
USES_SHARPS = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'a', 'e', 'b', 'f#', 'c#', 'g#', 'd#']
NUM_KEYS = 12

class Scale(object):
    def __init__(self, tonic):
        self.tonic = tonic

    def chromatic(self):
        return SHARPS if self.tonic in USES_SHARPS else FLATS

    def interval(self, intervals):
        res = []
        keys = SHARPS if self.tonic in USES_SHARPS else FLATS

        # get start index of tonic (normalizing for minor keys)
        idx = keys.index(
            self.tonic[0].upper()
            + (self.tonic[1] if len(self.tonic) > 1 else '')
        )

        for interval in intervals:
            res.append(keys[idx])
            if interval == 'm':
                step = 1
            elif interval == 'M':
                step = 2
            else:
                step = 3
            idx = (idx+step)%NUM_KEYS

        return res

