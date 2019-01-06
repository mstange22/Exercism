// Package bob returns what a teenager would say.
package bob

import "regexp"

// Hey returns:
// "Sure." if question
// "Whoa, chill out!" if yell (UPPER)
// "Calm down, I know what I'm doing!" if yell a question
// "Fine. Be that way!" if you address him without actually saying anything.
// "Whatever." to anything else
func Hey(remark string) string {
	question := regexp.MustCompile("[?]+[ ]*$")
	shouting := regexp.MustCompile("^[0-9A-Z !?,%^*@#$()*^]*[A-Z]+[0-9A-Z !?,%^*@#$()*^]*$")
	nothing := regexp.MustCompile("^[ \t\n\r]+$")

	switch {
	case remark == "" || nothing.MatchString(remark):
		return "Fine. Be that way!"
	case question.MatchString(remark) && shouting.MatchString(remark):
		return "Calm down, I know what I'm doing!"
	case shouting.MatchString(remark):
		return "Whoa, chill out!"
	case question.MatchString(remark):
		return "Sure."
	default:
		return "Whatever."
	}
}
