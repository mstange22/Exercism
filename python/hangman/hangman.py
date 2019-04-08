STATUS_WIN = "win"
STATUS_LOSE = "lose"
STATUS_ONGOING = "ongoing"


class Hangman(object):
    def __init__(self, word):
        self.remaining_guesses = 9
        self.status = STATUS_ONGOING
        self.word = word
        self.masked_word = ['_'] * len(word)
        self.guesses = set()

    def guess(self, char):
        if self.status != STATUS_ONGOING:
            raise  ValueError('Game over')
        
        if char in self.guesses or char not in self.word:
            self.remaining_guesses -= 1
            if self.remaining_guesses == -1:
                self.status = STATUS_LOSE
        else:
            self.guesses.add(char)
            indicies = [i for i, c in enumerate(self.word) if c == char]
            for i in indicies:
                self.masked_word[i] = char
            if self.word == ''.join(self.masked_word):
                self.status = STATUS_WIN

    def get_masked_word(self):
        return ''.join(self.masked_word)

    def get_status(self):
        return self.status
