class BeerSong {
  List<String> recite(num start, num numVerses) {
    List<String> res = [];
    for (num i = 0; i < numVerses; i++) {
      num currBottles = start - i;
      String numBottles = currBottles == 0 ? "No more" : "${currBottles}";
      String numBottlesLower = currBottles == 0 ? "no more" : "${currBottles}";
      String oneBottle = currBottles == 1 ? "it" : "one";
      String bottlesRemaining = currBottles == 1 ? 'no more' : "${currBottles - 1}";
      res.add("${numBottles} bottle${currBottles == 1 ? '' : 's'} of beer on the wall, ${numBottlesLower} bottle${currBottles == 1 ? '' : 's'} of beer.");
      res.add(currBottles == 0 ? (
        "Go to the store and buy some more, 99 bottles of beer on the wall."
      ) : "Take ${oneBottle} down and pass it around, ${bottlesRemaining} bottle${currBottles == 2 ? '' : 's'} of beer on the wall.");
      if (numVerses > 0 && i != numVerses - 1) {
        res.add('');
      }
    }
    return res;
  }
}
