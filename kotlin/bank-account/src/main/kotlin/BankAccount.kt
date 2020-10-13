class BankAccount {
    private var isClosed: Boolean = false
    private var _balance: Long = 0
    public val balance: Long
        get() = when {
            isClosed -> throw IllegalStateException("Account Closed")
            else -> _balance
        }

    @Synchronized fun adjustBalance(amount: Long) {
        if (isClosed) throw IllegalStateException("Account Closed")
        _balance += amount
    }

    fun close() {
        isClosed = true
    }
}
