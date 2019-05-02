import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.util.HashSet;
import java.util.Collections;

class Matrix {
    private final List<List<Integer>> values;

    Matrix(List<List<Integer>> values) {
        this.values = values;
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
        return isMax(i, j) && isMin(i, j);
    }

    private boolean isMax(int i, int j) {
        int value = this.values.get(i).get(j);
        List<Integer> row = new ArrayList<>(this.values.get(i));
        Collections.sort(row);
        return value == row.get(row.size() - 1);
    }

    private boolean isMin(int i, int j) {
        int value = this.values.get(i).get(j);
        List<Integer> col = new ArrayList<>();
        for (List<Integer> row: this.values) {
            col.add(row.get(j));
        }
        Collections.sort(col);
        return value == col.get(0);
    }

}
