package erratum

// Opener is a function that opens a resource.
type Opener func() (Resource, error)

// Use attempts to use a resourse.
func Use(opener Opener, s string) (e error) {
	var res Resource
	var err error
	res, err = opener()
	for err != nil {
		if _, ok := err.(TransientError); !ok {
			e = err
			return e
		}
		res, err = opener()
	}

	defer func() {
		if err := recover(); err != nil {
			if frob, ok := err.(FrobError); ok {
				res.Defrob(frob.defrobTag)
			}
			e = err.(error)
		}
		res.Close()
	}()

	res.Frob(s)

	return e
}
