class CustomCheckedException extends Exception {
    static final long serialVersionUID = 0;

    CustomCheckedException() {
        super();
    }

    CustomCheckedException(String message) {
        super(message);
    }

}
