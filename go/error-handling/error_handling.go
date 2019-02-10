package erratum

import (
	"errors"
	"fmt"
)

type fn func() (Resource, error)

// Use attempts to use a resourse
func Use(opener fn, s string) error {
	var res Resource
	var err error
	for true {
		res, err = opener()
		if err != nil {
			if _, ok := err.(TransientError); !ok {
				return err
			}
			continue
		}
		defer func() {
			if r := recover(); r != nil {
				fmt.Println("Recovered:", r.(FrobError).Error())
				res.Defrob(r.(FrobError).Error())
				err = errors.New(r.(FrobError).Error())
			}
		}()
		res.Frob(s)
		defer res.Close()
		break
	}

	fmt.Println("error:", err)
	return err
}
