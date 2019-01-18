class Acronym {
    String acronym = "";

    Acronym(String phrase) {
        String [] arr = phrase.split("[- ]+");
        for (String s : arr) {
            acronym += Character.toUpperCase(s.charAt(0));
        }
    }

    String getAcronym() {
        return acronym;
    }
}
