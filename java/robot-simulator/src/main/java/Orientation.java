public enum Orientation {

    NORTH,
    EAST,
    SOUTH,
    WEST;

    public static Orientation fromInteger(int x) {
        switch(x) {
            case 0:
                return NORTH;
            case 1:
                return EAST;
            case 2:
                return SOUTH;
            case 3:
                return WEST;
        }
        return null;
    }
}
