class Proverb {
    private final String phrase;
    Proverb(String[] words) {
        StringBuilder s = new StringBuilder();
        if (words.length > 0) {
            for (int i = 0; i < words.length - 1; i++) {
                s.append("For want of a " + words[i] + " the " + words[i + 1] + " was lost.\n");
            }
            s.append("And all for the want of a " + words[0] + ".");
        }
        this.phrase = s.toString();
    }

    String recite() {
        return this.phrase;
    }
}
