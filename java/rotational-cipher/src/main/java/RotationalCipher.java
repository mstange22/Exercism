class RotationalCipher {
    private final int shiftKey;

    RotationalCipher(int shiftKey) {
        this.shiftKey = shiftKey;
    }

    String rotate(String data) {
        return data.codePoints()
            .mapToObj(c -> Character.isLetter(c) ? rotateLetter(c) : c)
            .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
            .toString();
    }

    int rotateLetter(int c) {
        int charVal = Character.toUpperCase(c) - 'A';
        int offset = (charVal + shiftKey) % 26 - charVal;
        return c + offset;
    }
}