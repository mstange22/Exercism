package Beer;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(verse sing);

sub verse {
  my $n = shift;
  my $start_amt = $n == 0 ? "No more" : $n;
  my $c_start_amt = lc $start_amt;
  my $bottle_txt = $n == 1 ? "bottle" : "bottles";
  my $res = "${start_amt} ${bottle_txt} of beer on the wall, ${c_start_amt} ${bottle_txt} of beer.\n";
  my $pronoun = $n == 1 ? "it" : "one";
  $n--;
  $bottle_txt = $n == 1 ? "bottle" : "bottles";
  my $remaining = $n == 0 ? "no more" : $n;
  if ($n < 0) {
    $res .= "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
  } else {
    $res .= "Take ${pronoun} down and pass it around, ${remaining} ${bottle_txt} of beer on the wall.\n";
  }
  return $res;
}

sub sing {
  my ($upper, $lower) = @_;
  $lower //= 0;
  my $res;
  for (my $i = $upper; $i >= $lower; $i--) {
    $res .= sprintf("%s\n", verse($i));
  }
  return $res;
}