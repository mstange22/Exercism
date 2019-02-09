card_values = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9
  '10': 10,
  'J': 11,
  'Q': 12,
  'K': 13,
  'A': 14,
}

def best_hands(hands):
  if len(hands) == 1:
    return hands

  poker_hands = []
  
  # check max card
  for i, hand in enumerate(hands):
    cards = hand.split()
    max_card = 0
    for card in cards:
      if len(card) == 3:
        card_value = 10
      else:
        card_value = int(card_values[card[0])
      if card_value > max_card:
        max_card = card_value

    poker_hands.append = {
      'hand': cards,
      'max_card': max_card,
    }
  
  for hand in poker_hands
    
      
