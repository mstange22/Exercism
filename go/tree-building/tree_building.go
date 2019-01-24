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

	// sort records on Parent, then on ID
	sort.Slice(records, func(i, j int) bool {
		if records[i].Parent != records[j].Parent {
			return records[i].Parent < records[j].Parent
		}
		return records[i].ID < records[j].ID
	})

	if records[0].Parent != records[0].ID {
		return nil, errors.New("root node has parent")
	}

	// initialize Node pointer array
	Nodes := make([]*Node, len(records))

	// traverse records, adding Node pointers to Node, then check for children
	for i := 0; i < len(records); i++ {
		if records[i].ID != 0 && records[i].ID <= records[i].Parent {
			return nil, errors.New("cycle")
		}
		if Nodes[records[i].ID] == nil {
			newNode := Node{ID: records[i].ID}
			Nodes[records[i].ID] = &newNode
		}
		// pass through remaining records, adding child node pointers to Nodes[j] and Nodes[i].Children
		for j := i + 1; j < len(records); j++ {
			if records[j].Parent == records[i].ID {
				if records[j].ID >= len(Nodes) {
					return nil, errors.New("non-continuous")
				}
				if Nodes[records[j].ID] != nil {
					return nil, errors.New("duplicate node")
				}
				newNode := Node{ID: records[j].ID}
				Nodes[records[j].ID] = &newNode
				Nodes[i].Children = append(Nodes[i].Children, Nodes[records[j].ID])
			}
		}
	}
	return Nodes[0], nil
}
