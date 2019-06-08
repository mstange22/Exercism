import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

class BankAccount {
  private boolean isOpen = false;
  private double balance = 0;
  private final ReadWriteLock readWriteLock = new ReentrantReadWriteLock();
  private final Lock writeLock = readWriteLock.writeLock();

  public double getBalance() throws BankAccountActionInvalidException {
    if (!isOpen) {
      throw new BankAccountActionInvalidException("Account closed");
    }
    return balance;
  }

  void open() {
    isOpen = true;
  }

  void close() {
    isOpen = false;
  }

  void deposit(double amount) throws BankAccountActionInvalidException {
    if (!isOpen) {
      throw new BankAccountActionInvalidException("Account closed");
    }
    if (amount <= 0) {
      throw new BankAccountActionInvalidException("Cannot deposit or withdraw negative amount");
    }
    writeLock.lock();
    try {
      balance += amount;
    } finally {
      writeLock.unlock();
    }
  }

  void withdraw(double amount) throws BankAccountActionInvalidException {
    if (!isOpen) {
      throw new BankAccountActionInvalidException("Account closed");
    }
    if (amount <= 0) {
      throw new BankAccountActionInvalidException("Cannot deposit or withdraw negative amount");
    }
    if (balance == 0) {
      throw new BankAccountActionInvalidException("Cannot withdraw money from an empty account");
    }
    if (amount > balance) {
      throw new BankAccountActionInvalidException("Cannot withdraw more money than is currently in the account");
    }
    writeLock.lock();
    try {
      balance -= amount;
    } finally {
      writeLock.unlock();
    }
  }
}