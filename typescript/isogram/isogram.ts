class Isogram {
    static isIsogram(s: string) {
        const map: { [letter: string]: boolean } = {}
        for (const char of s) {
            if (char !== ' ' && char !== '-') {
                if (map[char.toLowerCase()]) {
                    return false
                }
                map[char.toLowerCase()] = true
            }
        }
        return true
    }
}

export default Isogram
