import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.List;

class Poker {

  private final List<String> hands;
  private static final Map<String, Integer> CardRank = new HashMap<String, Integer>();

  static {
    CardRank.put("A", 14);
    CardRank.put("K", 13);
    CardRank.put("Q", 12);
    CardRank.put("J", 11);
    CardRank.put("10", 10);
    CardRank.put("9", 9);
    CardRank.put("8", 8);
    CardRank.put("7", 7);
    CardRank.put("6", 6);
    CardRank.put("5", 5);
    CardRank.put("4", 4);
    CardRank.put("3", 3);
    CardRank.put("2", 2);
  }

  Poker(List<String> hands) {
    this.hands = hands;
  }

  List<String> getBestHands() {
    List<String> bestHands = new ArrayList<String>();
    String bestHand = this.hands.get(0);
    bestHands.add(bestHand);

    for (int i = 1; i < this.hands.size(); i++) {
      String currHand = this.hands.get(i);
      int compareHandsResult = compareHands(bestHand, currHand);
      if (compareHandsResult == 0) {
        // hands are equal
        bestHands.add(currHand);
      } else if (compareHandsResult > 0) {
        // currHand is better
        bestHands.clear();
        bestHands.add(currHand);
        bestHand = currHand;
      }
    }

    return bestHands;
  }

  private int compareHands(String bestHand, String currHand) {
    return getHighestCard(currHand) - getHighestCard(bestHand);
  }

  private int getHighestCard(String hand) {
    String[] cards = hand.split(" ");
    int highestCard = 0;
    for (int i = 0; i < cards.length; i++) {
      String currCard = cards[i].substring(0, cards[i].length() - 1);
      int currCardValue = CardRank.get(currCard);
      if (currCardValue > highestCard) {
        highestCard = currCardValue;
      }
    }
    return highestCard;
  }

}