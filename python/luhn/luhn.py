class Luhn(object):
    def __init__(self, card_num):
        self.valid = False

        # replace spaces and validate digits
        card_num = card_num.replace(" ", '')
        if len(card_num) < 2 or any([not item.isdigit() for item in card_num]):
            return

        # use list comprehension with slice assignment
        numbers_list = [int(item) for item in card_num]
        numbers_list[-2::-2] = (item * 2 - 9 if 2 * item > 9 else item * 2 for item in numbers_list[-2::-2])

        self.valid = sum(numbers_list) % 10 == 0

    def is_valid(self):
        return self.valid

