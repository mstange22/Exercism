package matrix

import (
	"errors"
	"strconv"
	"strings"
)

// Matrix is the matrix.
type Matrix struct {
	rows [][]int
}

// New is a Matrix constructor.
func New(matrix string) (Matrix, error) {
	m := Matrix{}
	stringRows := strings.Split(matrix, "\n")

	for _, row := range stringRows {
		charSlice := strings.Split(row, " ")
		intSlice := []int{}
		for _, r := range charSlice {
			i, err := strconv.Atoi(r)
			if err != nil {
				return m, err
			}
			intSlice = append(intSlice, i)
		}
		if len(m.rows) > 0 && len(intSlice) != len(m.rows[0]) {
			return m, errors.New("different row length")
		}
		m.rows = append(m.rows, intSlice)
	}
	return m, nil
}

// Rows returns the rows of a matrix.
func (m Matrix) Rows() [][]int {
	res := [][]int{}

	for _, r := range m.rows {
		newRow := make([]int, len(r))
		copy(newRow, r)
		res = append(res, newRow)
	}
	return res
}

// Cols returns the rows of a matrix.
func (m Matrix) Cols() [][]int {
	res := [][]int{}
	for i, row := range m.rows {
		for j, r := range row {
			if i == 0 {
				col := []int{r}
				res = append(res, col)
			} else {
				res[j] = append(res[j], r)
			}
		}
	}
	return res
}

// Set sets a value of the matrix given coordinates and a value
func (m Matrix) Set(r, c, val int) bool {
	if r < 0 || r >= len(m.rows[0]) || c < 0 || c >= len(m.rows) {
		return false
	}
	m.rows[r][c] = val
	return true
}
