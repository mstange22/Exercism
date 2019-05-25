import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.util.HashSet;

class Matrix {
    private final List<List<Integer>> values;

    Matrix(List<List<Integer>> matrix) {
        this.values = matrix;
    }

    Set<MatrixCoordinate> getSaddlePoints() {
        Set<MatrixCoordinate> res = new HashSet<MatrixCoordinate>();
        for (int i = 0; i < this.values.size(); i++) {
            for (int j = 0; j < this.values.get(i).size(); j++) {
                if (isSaddlePoint(i, j)) {
                    res.add(new MatrixCoordinate(i, j));
                }
            }
        }
        return res;
    }

    private boolean isSaddlePoint(int i, int j) {
        return isRowMax(i, j) && isColumnMin(i, j);
    }

    private boolean isRowMax(int i, int j) {
        int value = this.values.get(i).get(j);
        List<Integer> row = new ArrayList<>(this.values.get(i));
        for (int digit : row) {
            if (value < digit) {
                return false;
            }
        }
        return true;
    }

    private boolean isColumnMin(int i, int j) {
        int value = this.values.get(i).get(j);
        List<Integer> col = new ArrayList<>();
        for (List<Integer> row: this.values) {
            col.add(row.get(j));
        }
        for (int digit : col) {
            if (value > digit) {
                return false;
            }
        }
        return true;
    }

}
