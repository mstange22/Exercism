class Bob {
    hey = (input: string): string => {
        input = input.trim()
        if (!Boolean(input)) {
            return 'Fine. Be that way!'
        }
        if (/[A-Z]/.test(input) && input === input.toUpperCase()) {
            return input.endsWith('?') ? 'Calm down, I know what I\'m doing!' : 'Whoa, chill out!'
        }
        return input.endsWith('?') ? 'Sure.' : 'Whatever.'
    }
}

export default Bob