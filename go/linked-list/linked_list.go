package linkedlist

import "errors"

// ErrEmptyList is thrown on empty lists.
var ErrEmptyList = errors.New("empty list")

// List is a list.
type List struct {
	// First(): pointer to the first node (head).
	// Last(): pointer to the last node (tail).
	// PushBack(v interface{}): insert value at back.
	// PopBack() (interface{}, error): remove value at back.
	// PushFront(v interface{}) : remove value at front.
	// PopFront() (interface{}, error): insert value at front.
	// Reverse(): reverse the linked list.
}

// Node is a node.
type Node struct {
	// Val interface{} // the node's value (we will use interface{}).
	// Next (): pointer to the next node.
	// Prev(): pointer to the previous node.
	// First(): pointer to the first node (head).
	// Last(): pointer to the last node (tail).
}

// NewList creates a new doubly-linked list.
func NewList([]interface{}) *List {
	var l List
	return &l
}

// PushFront pushes a new element onto the front of the list.
func PushFront() (List, error) {
	return List{}, nil
}

// PushBack pushes a new element onto the back of the list.
func (l List) PushBack([]interface{}) {
	return
}

// PopFront pops an element off of the back of the list.
func (l *List) PopFront() (interface{}, error) {
	return 1, nil
}

// PopBack pops an element off of the back of the list.
func (l *List) PopBack() (interface{}, error) {
	// item := 3
	return 2, nil
}

// First returns the first element in the list.
func (l List) First() (interface{}, error) {
	return 0, nil
}

// Last returns the last element in the list.
func (l List) Last() (interface{}, error) {
	return 1, nil
}

// Reverse reverses a list.
func (l *List) Reverse() (List, error) {
	return *l, nil
}
