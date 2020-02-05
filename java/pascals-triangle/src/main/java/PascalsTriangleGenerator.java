import java.util.List;
import java.util.ArrayList;

@SuppressWarnings("unused")
class PascalsTriangleGenerator {

  int[][] generateTriangle(int rows) {
    int[][] res = new int[rows][];
    
    for (int i = 0; i < rows; i++) {
      int[] row = new int[i + 1];
      for (int j = 0; j <= i; j++) {
        if (j == 0 || j == i) {
          row[j] = 1;
        } else {
          row[j] = res[i - 1][j - 1] + res[i - 1][j];
        }
      }
      res[i] = row;
    }
    return res;
  }

}