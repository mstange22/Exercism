class HighScores(object):
    def __init__(self, scores):
        self.scores = scores
    
    def latest(self):
        return self.scores[-1]

    def personal_best(self):
        return max(self.scores)

    def personal_top(self):
        return sorted(self.scores, reverse=True)[:3]
    
    def report(self):
        latest = self.scores[-1]
        best = max(self.scores)
        str1 = 'Your latest score was {latest}.'
    if latest == best:
            return str1 + ' That\'s your personal best!'
        return str1 + f' That\'s {best - latest} short of your personal best!'