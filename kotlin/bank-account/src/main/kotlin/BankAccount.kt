class BankAccount {
    private var isClosed: Boolean = false
    var balance: Long = 0
        get() = when {
            isClosed -> throw IllegalStateException("Account Closed")
            else -> field
        }
        private set

    @Synchronized fun adjustBalance(amount: Long) {
        if (isClosed) throw IllegalStateException("Account Closed")
        balance += amount
    }

    fun close() {
        isClosed = true
    }
}
