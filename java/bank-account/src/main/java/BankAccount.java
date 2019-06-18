import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

class BankAccount {
  private boolean isOpen = false;
  private double balance = 0;
  private final ReadWriteLock readWriteLock = new ReentrantReadWriteLock();
  private final Lock writeLock = readWriteLock.writeLock();
  private final Lock readLock = readWriteLock.readLock();

  public double getBalance() throws BankAccountActionInvalidException {
    readLock.lock();
    double balanceToReturn;
    try {
      if (!isOpen) {
        throw new BankAccountActionInvalidException("Account closed");
      }
      balanceToReturn = balance;
    } finally {
      readLock.unlock();
    }
    return balanceToReturn;
  }

  void open() {
    writeLock.lock();
    try {
      isOpen = true;
    } finally {
      writeLock.unlock();
    }
  }

  void close() {
    writeLock.lock();
    try {
      isOpen = false;
    } finally {
      writeLock.unlock();
    }
  }

  void deposit(double amount) throws BankAccountActionInvalidException {
    if (amount <= 0) {
      throw new BankAccountActionInvalidException("Cannot deposit or withdraw negative amount");
    }
    writeLock.lock();
    try {
      if (!isOpen) {
        throw new BankAccountActionInvalidException("Account closed");
      }
      balance += amount;
    } finally {
      writeLock.unlock();
    }
  }

  void withdraw(double amount) throws BankAccountActionInvalidException {
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
      if (!isOpen) {
        throw new BankAccountActionInvalidException("Account closed");
      }
      balance -= amount;
    } finally {
      writeLock.unlock();
    }
  }
}