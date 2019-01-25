package linkedlist

import "errors"

// ErrEmptyList is thrown on empty lists.
var ErrEmptyList = errors.New("empty list")

// List is a list.
type List interface {
	PushFront()
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
func (l *List) PushBack() ([]interface{}, error) {
	return
}

// PopFront pops an element off of the back of the list.
func (l *List) PopFront() ([]interface{}, error) {
	return
}

// PopBack pops an element off of the back of the list.
func (l *List) PopBack() ([]interface{}, error) {
	return
}

// First returns the first element in the list.
func (l List) First() ([]interface{}, error) {
	return
}

// Last returns the last element in the list.
func (l List) Last() ([]interface{}, error) {
	return
}

// Reverse reverses a list.
func (l *List) Reverse() ([]interface{}, error) {
	return
}
