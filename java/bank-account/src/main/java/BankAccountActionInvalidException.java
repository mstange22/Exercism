class BankAccountActionInvalidException extends Exception {
    static final long serialVersionUID = 0;
    BankAccountActionInvalidException(String message) {
        super(message);
    }
}
