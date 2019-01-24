package tree

import (
	"errors"
	"sort"
)

// Record is a record.
type Record struct {
	ID     int
	Parent int
}

// Node is a node.
type Node struct {
	ID       int
	Children []*Node
}

// Build builds a tree of Node pointers from an array of Records.
func Build(records []Record) (*Node, error) {
	if len(records) == 0 {
		return nil, nil
	}
	sort.Slice(records, func(i, j int) bool {
		return records[i].ID < records[j].ID
	})
	if records[0].Parent != records[0].ID {
		return nil, errors.New("root node has parent")
	}

	// construct array-based implementation of Node pointer tree
	Nodes := make([]*Node, len(records))

	// traverse records, adding Node pointers to Nodes
	// add current node to its parent's Children array
	for i := 0; i < len(records); i++ {
		if records[i].ID != 0 && records[i].ID <= records[i].Parent {
			return nil, errors.New("cycle")
		}
		if records[i].ID != i {
			return nil, errors.New("duplicate node")
		}

		newNode := Node{ID: i}
		Nodes[i] = &newNode

		if i != 0 {
			parentID := records[i].Parent
			Nodes[parentID].Children = append(Nodes[parentID].Children, Nodes[i])
		}
	}
	return Nodes[0], nil
}
