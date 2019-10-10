import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.Collections;
import java.util.HashSet;
import java.util.stream.Collectors;

class Card {
  int points;
  char suit;
  Card(int points, char suit) {
    this.points = points;
    this.suit = suit;
  }
}

@SuppressWarnings("serial")
class Poker {

  private final List<List<Card>> hands;
  private static final Map<String, Integer> CardRank = new HashMap<String, Integer>(){{
    put("A", 14);
    put("K", 13);
    put("Q", 12);
    put("J", 11);
    put("10", 10);
    put("9", 9);
    put("8", 8);
    put("7", 7);
    put("6", 6);
    put("5", 5);
    put("4", 4);
    put("3", 3);
    put("2", 2);
  }};

  private static final String[] stringifyPoints = {
    null, "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"
  };

  Poker(List<String> hands) {
    List<List<Card>> newHands = new ArrayList<List<Card>>();

    for (String hand : hands) {
      List<Card> newCards = new ArrayList<Card>(); 
      for (String card: hand.split(" ")) {
        newCards.add(new Card(CardRank.get(card.substring(0, card.length() - 1)), card.charAt(card.length() - 1)));
      }
      newHands.add(newCards);
    }
    this.hands = newHands;
  }

  List<String> getBestHands() {
    List<List<Card>> bestHands = new ArrayList<List<Card>>();

    // add first hand to bestHands
    bestHands.add(this.hands.get(0));

    // step through remaining hands and either ignore, add or replace
    for (int i = 1; i < this.hands.size(); i++) {
      List<Card> currHand = this.hands.get(i);
      int compareHandsResult = compareHands(bestHands.get(0), currHand);
      if (compareHandsResult == 0) {
        // hands are equal
        bestHands.add(currHand);
      } else if (compareHandsResult > 0) {
        // currHand is better
        bestHands.clear();
        bestHands.add(currHand);
      }
    }

    return stringifyHands(bestHands);
  }

  private int compareHands(List<Card> bestHand, List<Card> currHand) {
    // make copies of both hands for sorting / removing cards as needed
    List<Card> sortedBestHand = new ArrayList<Card>(bestHand);
    List<Card> sortedCurrHand = new ArrayList<Card>(currHand);
    Collections.sort(sortedBestHand, (a, b) -> a.points - b.points);
    Collections.sort(sortedCurrHand, (a, b) -> a.points - b.points);

    // straight flush
    if (isStraight(sortedBestHand) && isFlush(sortedBestHand)) {
      // if currHand is not a straight flush
      if (!isStraight(sortedCurrHand) || !isFlush(sortedCurrHand)) {
        return -1;
      }
    } else if (isStraight(sortedCurrHand) && isFlush(sortedCurrHand)) {
      return 1;
    }

    // four of a kind
    if (isFourOfAKind(sortedBestHand)) {
      if (!isFourOfAKind(sortedCurrHand)) {
        return -1;
      }
      // two four of a kinds
      int bestFour = fourOfAKind(sortedBestHand);
      int currFour = fourOfAKind(sortedCurrHand);
      if (bestFour != currFour) {
        return currFour - bestFour;
      }
      sortedBestHand = removeCards(sortedBestHand, bestFour);
      sortedCurrHand = removeCards(sortedCurrHand, currFour);
    } else if (isFourOfAKind(sortedCurrHand)) {
      return 1;
    }

    // full house
    if (isFullHouse(sortedBestHand)) {
      if (!isFullHouse(sortedCurrHand)) {
        return -1;
      }
      // two fulls
      List<Integer> bestFull = fullHouse(sortedBestHand);
      List<Integer> currFull = fullHouse(sortedCurrHand);
      if (bestFull.get(0) == currFull.get(0)) {
        return currFull.get(1) - bestFull.get(1);
      }
      return currFull.get(0) - bestFull.get(0);
    } else if (isFullHouse(sortedCurrHand)) {
      return 1;
    }

    // flush
    if (isFlush(sortedBestHand)) {
      if (!isFlush(sortedCurrHand)) {
        return -1;
      }
      // both flushes
    } else if (isFlush(sortedCurrHand)) {
      return 1;
    }

    // straight
    if (isStraight(sortedBestHand)) {
      if (!isStraight(sortedCurrHand)) {
        return -1;
      }
      // both straights - just check for ace low
      if (sortedBestHand.get(sortedBestHand.size() - 1).points == 14 && sortedBestHand.get(sortedBestHand.size() - 2).points == 5) {
        sortedBestHand.add(0, sortedBestHand.remove(sortedBestHand.size() - 1));
      }
      if (sortedCurrHand.get(sortedCurrHand.size() - 1).points == 14 && sortedCurrHand.get(sortedCurrHand.size() - 2).points == 5) {
        sortedCurrHand.add(0, sortedCurrHand.remove(sortedCurrHand.size() - 1));
      }

    } else if (isStraight(sortedCurrHand)) {
      return 1;
    }

    // three of a kind
    if (hasThreeOfAKind(sortedBestHand)) {
      if (!hasThreeOfAKind(sortedCurrHand)) {
        return -1;
      }
      // both have three of a kind
      int bestHandThree = threeOfAKind(sortedBestHand);
      int currHandThree = threeOfAKind(sortedCurrHand);
      if (bestHandThree != currHandThree) {
        return currHandThree - bestHandThree;
      }
      // same triplet
      sortedBestHand = removeCards(sortedBestHand, bestHandThree);
      sortedCurrHand = removeCards(sortedCurrHand, currHandThree);
    } else if (hasThreeOfAKind(sortedCurrHand)) {
      return 1;
    }

    // pairs
    if (hasPair(sortedBestHand)) {
      if (!hasPair(sortedCurrHand)) {
        return -1;
      }
      int bestHandPair = largestPair(sortedBestHand);
      int currHandPair = largestPair(sortedCurrHand);

      // remove pairs and compare remaining cards
      sortedBestHand = removeCards(sortedBestHand, bestHandPair);
      sortedCurrHand = removeCards(sortedCurrHand, currHandPair);

      // two pairs?
      if (hasPair(sortedBestHand)) {
        if (!hasPair(sortedCurrHand)) {
          return -1;
        }
        // both have 2 pairs
        if (bestHandPair != currHandPair) {
          return currHandPair - bestHandPair;
        } else { // same highest pair
          bestHandPair = largestPair(sortedBestHand);
          currHandPair = largestPair(sortedCurrHand);
          if (bestHandPair != currHandPair) {
            return currHandPair - bestHandPair;
          }
          // remove second pairs and compare remaining cards
          sortedBestHand = removeCards(sortedBestHand, largestPair(sortedBestHand));
          sortedCurrHand = removeCards(sortedCurrHand, largestPair(sortedCurrHand));
        }
      } else if (hasPair(sortedCurrHand)) {
        return 1;
      }

      if (bestHandPair != currHandPair) {
        return currHandPair - bestHandPair;
      }
    } else if (hasPair(sortedCurrHand)) {
      return 1;
    }

    // compare remaining cards
    return compareHighestCards(sortedBestHand, sortedCurrHand);
  }

  private int compareHighestCards(List<Card> hand1, List<Card> hand2) {
    int highestHand1Card = 0;
    int highestHand2Card = 0; 
    int index = hand1.size() - 1;
    do {
      highestHand1Card = hand1.get(index).points;
      highestHand2Card = hand2.get(index).points;
      index--;
    } while (index >= 0 && highestHand1Card == highestHand2Card);

    return highestHand2Card - highestHand1Card;
  }

  private List<Card> removeCards(List<Card> hand, int cardPoints) {
    return new ArrayList<Card>(
      hand.stream()
        .filter(card -> card.points != cardPoints)
        .collect(Collectors.toList())
      );
  }

  private boolean isFourOfAKind(List<Card> hand) {
    HashMap<Integer, Integer> cardCount = new HashMap<Integer, Integer>();
    for (Card card : hand) {
      if (cardCount.containsKey(card.points)) {
        cardCount.put(card.points, cardCount.get(card.points) + 1);
      } else {
        cardCount.put(card.points, 1);
      }
    }
    return cardCount.containsValue(4);
  }

  private int fourOfAKind(List<Card> hand) {
    HashMap<Integer, Integer> cardCount = new HashMap<Integer, Integer>();
    for (Card card : hand) {
      if (cardCount.containsKey(card.points)) {
        cardCount.put(card.points, cardCount.get(card.points) + 1);
      } else {
        cardCount.put(card.points, 1);
      }
    }
    for (int key : cardCount.keySet()) {
      if (cardCount.get(key) == 4) {
        return key;
      }
    }
    return -1;
  }

  private boolean isFullHouse(List<Card> hand) {
    HashMap<Integer, Integer> cardCount = new HashMap<Integer, Integer>();
    for (Card card : hand) {
      if (cardCount.containsKey(card.points)) {
        cardCount.put(card.points, cardCount.get(card.points) + 1);
      } else {
        cardCount.put(card.points, 1);
      }
    }
    return cardCount.containsValue(3) && cardCount.containsValue(2);
  }

  private List<Integer> fullHouse(List<Card> hand) {
    List<Integer> full = new ArrayList<Integer>();
    HashMap<Integer, Integer> cardCount = new HashMap<Integer, Integer>();
    for (Card card : hand) {
      if (cardCount.containsKey(card.points)) {
        cardCount.put(card.points, cardCount.get(card.points) + 1);
        // add triplet to return list
        if (cardCount.get(card.points) == 3) {
          full.add(card.points);
        }
      } else {
        cardCount.put(card.points, 1);
      }
    }
    for (int key : cardCount.keySet()) {
      if (cardCount.get(key) == 2) {
        full.add(key);
      }
    }
    return full;
  }

  private boolean isFlush(List<Card> hand) {
    char suit = hand.get(0).suit;
    for (Card card : hand) {
      if (card.suit != suit) {
        return false;
      }
    }
    return true;
  }

  private boolean isStraight(List<Card> hand) {
    List<Integer> cardPoints = hand.stream()
      .map(card -> card.points)
      .collect(Collectors.toList());

    // less than 5 unique cards
    HashSet<Integer> cardSet = new HashSet<Integer>(cardPoints);
    if (cardSet.size() < 5) {
      return false;
    }

    // handle ace low
    if (cardPoints.get(cardPoints.size() - 1) == 14) {
      if (cardPoints.get(cardPoints.size() - 2) == 5) {
        return true;
      }
    }

    return cardPoints.get(cardPoints.size() - 1) == cardPoints.get(0) + 4;
  }

  private boolean hasThreeOfAKind(List<Card> hand) {
    HashMap<Integer, Integer> cardCount = new HashMap<Integer, Integer>();
    for (Card card : hand) {
      if (cardCount.containsKey(card.points)) {
        cardCount.put(card.points, cardCount.get(card.points) + 1);
      } else {
        cardCount.put(card.points, 1);
      }
    }
    return cardCount.containsValue(3);
  }

  private int threeOfAKind(List<Card> hand) {
    HashMap<Integer, Integer> cardCount = new HashMap<Integer, Integer>();
    for (Card card : hand) {
      if (cardCount.containsKey(card.points)) {
        cardCount.put(card.points, cardCount.get(card.points) + 1);
      } else {
        cardCount.put(card.points, 1);
      }
    }
    for (int key : cardCount.keySet()) {
      if (cardCount.get(key) == 3) {
        return key;
      }
    }
    return -1;
  }

  private boolean hasPair(List<Card> hand) {
    List<Integer> cardList = hand.stream().map(card -> card.points).collect(Collectors.toList());
    HashSet<Integer> cards = new HashSet<Integer>(cardList);

    return cards.size() < hand.size();
  }

  private int largestPair(List<Card> hand) {
    HashSet<Integer> cards = new HashSet<>();
    List<Integer> pairs = new ArrayList<>();
    for (Card card : hand) {
      if (cards.contains(card.points)) {
        pairs.add(card.points);
      } else {
        cards.add(card.points);
      }
    }
    Collections.sort(pairs);
    return pairs.get(pairs.size() - 1);
  }

  private String stringifyHand(List<Card> hand) {
    List<String> cards = new ArrayList<String>();
    for (Card card : hand) {
      cards.add(stringifyPoints[card.points] + card.suit);
    }
    return String.join(" ", cards);
  }

  private List<String> stringifyHands(List<List<Card>> hands) {
    List<String> res = new ArrayList<String>();
    for (List<Card> hand : hands) {
      res.add(stringifyHand(hand));
    }
    return res;
  }

}