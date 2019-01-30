import java.util.stream.IntStream;

class IsbnVerifier {

    boolean isValid(String stringToVerify) {

        StringBuilder s = new StringBuilder();

        for (int i = 0; i < stringToVerify.length(); i++) {
            char c = stringToVerify.charAt(i);
            // if digit or last char is X
            if (Character.isDigit(c) || (c == 'X' && s.length() == 9)) {
                s.append(c);
            }
        }

        if (s.length() != 10) {
            return false;
        }
        
        return IntStream.range(0, s.length())
            .map(i -> s.charAt(i) == 'X' ? 10 : (int)(s.charAt(i) - '0') * (10 - i))
            .sum() % 11 == 0;
    }
}
