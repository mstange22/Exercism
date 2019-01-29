public class PangramChecker {

    public boolean isPangram(String input) {
        input = input.toLowerCase();
        for (char c : "abcdefghijklmnopqrstuvwxyz".toCharArray()) {
            if (input.indexOf(c) == -1) {
                return false;
            }
        }
        return true;
    }

}
