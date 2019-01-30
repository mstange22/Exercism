class LuhnValidator {

    boolean isValid(String s) {
        // return false on short input
        if (s.trim().length() <= 1) {
            return false;
        }
        int sum = 0;

        // counter actual digits
        int count = 0;

        // loop through string, ignoring spaces
        for (int i = s.length() - 1; i >= 0; i--) {
            char c = s.charAt(i);

            // return false on bad input
            if (c != ' ' && !Character.isDigit(c)) {
                return false;
            }
            
            if (Character.isDigit(c)) {
                // double every other digit
                if (count % 2 == 1) {
                    int prod = (int)(c - '0') * 2;
                    if (prod > 9) {
                        sum += (prod - 9);
                    } else {
                        sum += prod;
                    }
                } else {
                    sum += (int)(c - '0');
                }
                count++;
            }
        }
        return sum % 10 == 0;
    }
}
