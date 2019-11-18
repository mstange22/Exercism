class Robot(var gridPosition: GridPosition = GridPosition(0, 0), var orientation: Orientation = Orientation.NORTH) {

    fun advance() {
        gridPosition = when (orientation) {
            Orientation.NORTH -> GridPosition(gridPosition.x, gridPosition.y + 1)
            Orientation.EAST -> GridPosition(gridPosition.x + 1, gridPosition.y)
            Orientation.SOUTH -> GridPosition(gridPosition.x, gridPosition.y - 1)
            Orientation.WEST -> GridPosition(gridPosition.x - 1, gridPosition.y)
            else -> GridPosition(0, 0)
        }
    }

    fun turnLeft() {
        orientation = Orientation.values()[(orientation.ordinal - 1 + 4) % 4]
    }

    fun turnRight() {
        orientation = Orientation.values()[(orientation.ordinal + 1) % 4]
    }

    fun simulate(instructions: String) {
        for (i in instructions) {
            when (i) {
                'A' -> advance()
                'L' -> turnLeft()
                'R' -> turnRight()
            }
        }
    }
}
