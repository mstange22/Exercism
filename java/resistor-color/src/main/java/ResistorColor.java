class ResistorColor {
    private final String[] resistorColors = {"black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"};
    int colorCode(String color) {
        for (int i = 0; i < resistorColors.length; i++) {
            if (resistorColors[i].equals(color)) {
                return i;
            }
        }
        return -1;
    }

    String[] colors() {
        return this.resistorColors;
    }
}
