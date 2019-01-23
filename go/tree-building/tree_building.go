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

	// process records - check values and add Node pointers to array
	for i := 0; i < len(records); i++ {
		if records[i].ID != 0 && records[i].ID <= records[i].Parent {
			return nil, errors.New("cycle directly")
		}
		if records[i].ID > len(Nodes)-1 {
			return nil, errors.New("non-continuous")
		}
		if Nodes[records[i].ID] != nil {
			return nil, errors.New("duplicate node")
		}
		newNode := Node{ID: records[i].ID}
		Nodes[records[i].ID] = &newNode
	}

	// run through records again, capturing Children
	for i := range records {
		for j := i + 1; j < len(records); j++ {
			if records[j].Parent == records[i].ID {
				Nodes[i].Children = append(Nodes[i].Children, Nodes[records[j].ID])
			}
		}
	}
	return Nodes[0], nil
}
