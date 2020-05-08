class CustomUncheckedException extends RuntimeException {
    static final long serialVersionUID = 0;

    CustomUncheckedException() {
        super();
    }

    CustomUncheckedException(String message) {
        super(message);
    }

}
