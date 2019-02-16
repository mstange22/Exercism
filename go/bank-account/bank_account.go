package account

import "sync"

// Account is a representation of a bank account.
type Account struct {
	balance int64
	isOpen  bool
	mutex   sync.Mutex
}

// Open *Account
func Open(initialDeposit int64) *Account {
	if initialDeposit < 0 {
		return nil
	}

	a := Account{
		balance: initialDeposit,
		isOpen:  true,
	}
	return &a
}

// Close closes an account.
func (a *Account) Close() (int64, bool) {
	a.mutex.Lock()
	if !a.isOpen {
		return 0, false
	}
	closeoutAmount := a.balance
	a.balance = 0
	a.isOpen = false
	a.mutex.Unlock()
	return closeoutAmount, true
}

// Balance returns the current balance of an account.
func (a *Account) Balance() (balance int64, ok bool) {
	if !a.isOpen {
		return 0, false
	}
	return a.balance, true
}

// Deposit deposits funds into an account
func (a *Account) Deposit(amount int64) (newBalance int64, ok bool) {
	// a.mutex.Lock()
	if !a.isOpen || a.balance+amount < 0 {
		return 0, false
	}
	a.balance += amount
	// defer a.mutex.Unlock()
	return a.balance, true
}
