package Triangle;
use strict;
use warnings;

sub triangle {
  my ($n) = @_;
  print "n: $n\n";
  my @res;
  for my $i (1 .. $n) {
    print "i: $i\n";
    my @row = [1];
    for my $j (1 .. $n) {
      my $prev;
      if ($j > 0) {
        my $prev = $res[$i - 1][$j - 1];
      } else {
        $prev = 0;
      }
      push @row, $res[$i - 1][$j - 1] + $res[$i - 1][$j];
    }
    push @res, @row;
  }
  return \@res;
}

sub is_triangle {

}

sub row {

}

1;
