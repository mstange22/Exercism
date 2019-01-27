from random import randint

class Cipher(object):
    def __init__(self, key=None):
        if key == None:        
            key = ''.join(chr(randint(ord('a'), ord('z'))) for _ in range(100))
        self.key = key

    def encode(self, text):
        arr = list(text)
        for i, char in enumerate(arr):
            shift = ord(self.key[i%len(self.key)]) - ord('a')
            arr[i] = chr(((ord(char) - ord('a') + shift) % 26) + ord('a'))
        return ''.join(arr)
        # one-liner:
        # return ''.join(chr(((ord(char) - ord('a') + ord(self.key[i%len(self.key)]) - ord('a')) % 26) + ord('a')) for i, char in enumerate(list(text)))

    def decode(self, text):
        arr = list(text)
        for i, char in enumerate(arr):
            shift = ord(self.key[i%len(self.key)]) - ord('a')
            arr[i] = chr(((ord(char) - shift - ord('a') + 26) % 26) + ord('a'))
        # one-liner:
        # return ''.join(chr(((ord(char) - (ord(self.key[i%len(self.key)]) - ord('a')) - ord('a') + 26) % 26) + ord('a')) for i, char in enumerate(list(text)))