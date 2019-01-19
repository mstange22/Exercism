package grains

import "errors"

// Square returns the number of grains on any given chessboard square
func Square(square int) (uint64, error) {
	if square <= 0 || square > 64 {
		return 0, errors.New("square must be between 1 and 64 (inclusive)")
	}
	return 1 << uint64(square-1), nil
}

// Total returns the number of grains on all squares
func Total() uint64 {
	return (1 << uint64(64)) - 1
}
