class Markdown {

    String parse(String markdown) {

        String[] lines = markdown.split("\n");
        StringBuilder res = new StringBuilder();
        boolean activeList = false;

        for (String line : lines) {
            line = parseBoldAndEm(line);
          
            if (line.startsWith("*")) {
                if (!activeList) {
                    activeList = true;
                    res.append("<ul>");
                }
                line = String.format("<li>%s</li>", line.substring(2));
            } else {
                if (activeList) {
                    res.append("</ul>");
                    activeList = false;
                }

                if (line.startsWith("#")) {
                    line = parseHeader(line);
                } else {
                    line = String.format("<p>%s</p>", line);
                }
            }

            res.append(line);
        }

        return activeList ? res.append("</ul>").toString() : res.toString();
    }

    private String parseHeader(String line) {
        int count = 0;

        while (line.charAt(count) == '#') {
            count++;
        }

        return count == 0 ? null : String.format("<h%d>%s</h%d>", count, line.substring(count + 1), count);
    }

    private String parseBoldAndEm(String line) {
        line = line.replaceAll("__(.+)__", "<strong>$1</strong>");
        return line.replaceAll("_(.+)_", "<em>$1</em>");
    }
}