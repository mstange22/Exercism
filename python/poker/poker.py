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

def get_highest_card(hand):
  cards = hand.split(' ')
  card_values = []
  for card in cards:
    card_value = card[:-1]
    card_values.append(card_points[card_value])
  return max(card_values)

def best_hands(hands):
  if len(hands) == 1:
    return hands

  highest_cards = [get_highest_card(hand) for hand in hands]
  print(highest_cards)
  idx = highest_cards.index(max(highest_cards))
  
  return [hands[idx]]
