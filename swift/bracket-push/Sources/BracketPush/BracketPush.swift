func paired(text: String) -> Bool {
    var brackets = [String]()
    let bracketMap = ["[": "]", "(": ")", "{": "}"]
    
    for char in text {
        if  bracketMap.keys.contains(String(char)) {
            brackets.append(bracketMap[String(char)]!)
        } else if bracketMap.values.contains(String(char)) {
            if brackets.popLast() != String(char) {
                return false
            }
        }
    }
    return brackets.isEmpty
}
