package listops

// IntList is an array of ints.
type IntList []int

type binFunc func(int, int) int
type predFunc func(int) bool
type unaryFunc func(int) int

// Foldr returns something
func (iList IntList) Foldr(f binFunc, n int) int {
	for i := iList.Length() - 1; i >= 0; i-- {
		n = f(iList[i], n)
	}
	return n
}

// Foldl returns something
func (iList IntList) Foldl(f binFunc, n int) int {
	for _, v := range iList {
		n = f(n, v)
	}
	return n
}

// Filter filters an IntList.
func (iList IntList) Filter(f predFunc) IntList {
	filteredList := IntList{}
	for _, v := range iList {
		if f(v) {
			filteredList = filteredList.Append(IntList{v})
		}
	}
	return filteredList
}

// Length returns the length of an IntList
func (iList IntList) Length() (length int) {
	for range iList {
		length++
	}
	return
}

// Map maps over an IntList.
func (iList IntList) Map(f unaryFunc) IntList {
	mappedList := make(IntList, len(iList))
	for i, v := range iList {
		mappedList[i] = f(v)
	}
	return mappedList
}

// Reverse reverses an IntList.
func (iList IntList) Reverse() IntList {
	rev := make(IntList, iList.Length())
	for i := 0; i < iList.Length(); i++ {
		rev[i] = iList[iList.Length()-1-i]
	}
	return rev
}

// Append appends and int onto an IntList
func (iList IntList) Append(iList2 IntList) IntList {
	app := make(IntList, iList.Length()+iList2.Length())
	for i := 0; i < iList.Length(); i++ {
		app[i] = iList[i]
	}
	for i := iList.Length(); i < iList.Length()+iList2.Length(); i++ {
		app[i] = iList2[i-iList.Length()]
	}
	return app
}

// Concat concatenates two IntLists
func (iList IntList) Concat(iListArr []IntList) IntList {
	length := iList.Length()
	for _, list := range iListArr {
		length += list.Length()
	}
	newList := make(IntList, length)
	index := 0
	for _, v := range iList {
		newList[index] = v
		index++
	}
	for _, list := range iListArr {
		for _, v := range list {
			newList[index] = v
			index++
		}
	}
	return newList
}
