class Luhn(object):
    def __init__(self, card_num):
        self.valid = False

        if card_num.strip() == '0':
            return

        sum = 0
        valid_digits = 0

        for char in reversed(list(card_num)):
            if (char >= '0' and char <= '9'):
                if (valid_digits % 2 == 1):
                    prod = 2 * int(char)
                    if prod > 9:
                        sum += prod - 9
                    else:
                        sum += prod
                else:
                    sum += int(char)

                valid_digits += 1

            elif char != ' ':
                return

        self.valid = sum % 10 == 0

    def is_valid(self):
        return self.valid