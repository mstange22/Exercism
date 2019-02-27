import java.util.stream.Stream;
import java.util.stream.IntStream;

class Matrix {
    private int[][] rows;

    Matrix(String matrixAsString) {
        rows = Stream.of(matrixAsString.split("\n"))
            .map(i -> Stream.of(i.split(" "))
                .mapToInt(j -> Integer.parseInt(j))
                .toArray())
            .toArray(int[][]::new);
    }

    int[] getRow(int rowNumber) {
        return rows[rowNumber];
    }

    int[] getColumn(int columnNumber) {
        return IntStream.range(0, this.rows.length)
            .map(i -> this.rows[i][columnNumber])
            .toArray();
    }
}
