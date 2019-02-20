class BeerSong {
  String sing(int start, int num) {
    StringBuilder s = new StringBuilder();
    for (int i = start; i > start - num; i--) {
      s.append((i == 0 ? "No more" : i) + (i == 1 ? " bottle" : " bottles") + " of beer on the wall, "
        + (i == 0 ? "no more" : i) + (i == 1 ? " bottle" : " bottles") + " of beer.\n");
      if (i == 0) {
        s.append("Go to the store and buy some more, 99 bottles of beer on the wall.\n\n");
      } else {
        s.append("Take " + (i == 1 ? "it" : "one") + " down and pass it around, "
          + (i == 1 ? "no more" : i - 1) + (i == 2 ? " bottle" : " bottles")
          + " of beer on the wall.\n\n");
      }
    }
    return s.toString();
  }

  String singSong() {
    return sing(99, 100);
  }
}