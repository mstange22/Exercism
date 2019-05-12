card_points = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'J': 11,
  'Q': 12,
  'K': 13,
  'A': 14,
}

hand_points = {
  'straight_flush': 100,
  'four_of_a_kind': 90,
  'full_house': 80,
  'flush': 75,
  'straight': 70,
  'three_of_a_kind': 60,
  'two_pair': 40,
  'one_pair': 20,
  'high_card': 10,
}

def get_highest_card(hand):
  cards = hand.split(' ')
  card_values = []
  for card in cards:
    card_value = card[:-1]
    card_values.append(card_points[card_value])
  return max(card_values)

def get_highest_cards(hands):
  highest_cards = [get_highest_card(hand) for hand in hands]
  print('highest cards:', highest_cards)
  max_idx = highest_cards.index(max(highest_cards))
  # max_val = highest_cards[max_idx]
  # highest_cards[max_idx] = 0
  # if max(highest_cards) == max_val:
  #     # there is a tie for largest card
  #     print('here')
  return [hands[max_idx]]

def best_hands(hands):
  if len(hands) == 1:
    return hands

  highest_cards = get_highest_cards(hands)

  return highest_cards

# hands = [
#     "4D 5S 6S 8D 3C",
#     "2S 4C 7S 9H 10H",
#     "3S 4S 5D 6H JH",
#     "3H 4H 5C 6C JD",
# ]

# print('res:', best_hands(hands))