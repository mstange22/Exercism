package twelve

// Parts holds the unique elements of a verse
type Parts struct {
	day  string
	gift string
}

var verseParts = []Parts{
	{},
	{day: "first", gift: "a Partridge in a Pear Tree."},
	{day: "second", gift: "two Turtle Doves, and "},
	{day: "third", gift: "three French Hens, "},
	{day: "fourth", gift: "four Calling Birds, "},
	{day: "fifth", gift: "five Gold Rings, "},
	{day: "sixth", gift: "six Geese-a-Laying, "},
	{day: "seventh", gift: "seven Swans-a-Swimming, "},
	{day: "eighth", gift: "eight Maids-a-Milking, "},
	{day: "ninth", gift: "nine Ladies Dancing, "},
	{day: "tenth", gift: "ten Lords-a-Leaping, "},
	{day: "eleventh", gift: "eleven Pipers Piping, "},
	{day: "twelfth", gift: "twelve Drummers Drumming, "},
}

// Verse returns a verse of the song
func Verse(verse int) string {
	res := "On the " + verseParts[verse].day + " day of Christmas my true love gave to me: "
	for curr := verse; curr >= 1; curr-- {
		res += verseParts[curr].gift
	}
	return res
}

// Song returns the entire song
func Song() string {
	res := ""
	for i := 1; i <= 12; i++ {
		res += (Verse(i) + "\n")
	}
	return res
}
