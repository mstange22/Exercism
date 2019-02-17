import threading

class BankAccount(object):
    def __init__(self):
        self.balance = 0
        self.isOpen = False
        self.lock = threading.Lock()

    def get_balance(self):
        if not self.isOpen:
            raise ValueError('account is closed')
        return self.balance

    def open(self):
        if self.isOpen:
            raise ValueError('account already open')
        self.isOpen = True

    def deposit(self, amount):
        if not self.isOpen:
            raise ValueError('account is closed')
        if amount < 0:
            raise ValueError('negative deposit')
        
        with self.lock:
            self.balance += amount

    def withdraw(self, amount):
        if amount < 0:
            raise ValueError('negative withdrawal')
        if amount > self.balance:
            raise ValueError('overdrawn')
        
        with self.lock:
            self.balance -= amount

    def close(self):
        if not self.isOpen:
            raise ValueError('account already closed')
        
        with self.lock:
            self.isOpen = False
            self.balance = 0
