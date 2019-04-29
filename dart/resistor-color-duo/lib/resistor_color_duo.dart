class ResistorColorDuo {
  var colors = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
  ];

  int value(List<String> pair) {
    return colors.indexOf(pair[0]) * 10 + colors.indexOf(pair[1]);
  }
}
