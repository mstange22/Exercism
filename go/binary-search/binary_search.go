package binarysearch

// SearchInts searches slice for a value
// returns index of value if found if exists in slice, else -1
func SearchInts(slice []int, val int) int {
	if len(slice) == 0 || val < slice[0] || val > slice[len(slice)-1] {
		return -1
	}

	min, max := 0, len(slice)

	for min < max {
		mid := (max + min) / 2
		if slice[mid] < val {
			min = mid + 1
		} else {
			max = mid
		}
	}
	if slice[min] == val {
		return min
	}
	return -1
}
