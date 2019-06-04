class Clock {
  private static final int MINUTES_IN_DAY = 24 * 60;
  private int minutes;

  Clock(int h, int m) {
    minutes = normalizeMinutes(h * 60 + m);
  }

  void add(int m) {
    minutes = normalizeMinutes(minutes + m);
  }

  @Override
  public String toString() {
    return String.format("%02d:%02d", minutes / 60, minutes % 60);
  }

  @Override
  public boolean equals(Object clock) {
    return minutes == ((Clock)clock).minutes;
  }

  private int normalizeMinutes(int m) {
    return ((m % MINUTES_IN_DAY) + MINUTES_IN_DAY) % MINUTES_IN_DAY;
  }
}