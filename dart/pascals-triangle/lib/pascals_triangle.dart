class PascalsTriangle {
  List<List<int>> rows(num rows) {
    List<List<int>> res = [];
    for (int i = 0; i < rows; i++) {
      List<int> row = [];
      for (int j = 0; j <= i; j++) {
        if (j == 0 || j == i) {
          row.add(1);
        } else {
          row.add(res[i - 1][j - 1] + res[i - 1][j]);
        }
      }
      res.add(row);
    }
    return res;
  }
}
