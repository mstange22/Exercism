const parts = [ [''],
    ['first', 'a Partridge in a Pear Tree'],
    ['second', 'two Turtle Doves'],
    ['third', 'three French Hens'],
    ['fourth', 'four Calling Birds'],
    ['fifth', 'five Gold Rings'],
    ['sixth', 'six Geese-a-Laying'],
    ['seventh', 'seven Swans-a-Swimming'],
    ['eighth', 'eight Maids-a-Milking'],
    ['ninth', 'nine Ladies Dancing'],
    ['tenth', 'ten Lords-a-Leaping'],
    ['eleventh', 'eleven Pipers Piping'],
    ['twelfth', 'twelve Drummers Drumming'],
]

class TwelveDays {
    static recite = (startVerse: number, endVerse: number): string =>  {
        let res = ''
        for (let verseNum = startVerse; verseNum <= endVerse; verseNum++) {
            let currVerse = `On the ${parts[verseNum][0]} day of Christmas my true love gave to me: `
            for (let i = verseNum; i > 1; i--) {
                currVerse += i !== 2 ? `${parts[i][1]}, ` : `${parts[i][1]}, and `
            }
            currVerse += `${parts[1][1]}.\n`
            res += currVerse
        }
        return res
    }
}

export default TwelveDays
