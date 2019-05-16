package Sieve;
use strict;
use warnings;

sub new {
  my ($class, $n) = @_;
  return bless { n => $n }, $class;
}

sub primes {
  my $n = shift->{n};
  my @res = (0) x ($n + 1);
  for my $i (2..$n) {
    if (not $res[$i]) {
      for (my $j = 2 * $i; $j <= $n; $j += $i) {
        $res[$j] = 1;
      }
    }
  }
  return [grep { $res[$_] == 0 } 2..$n];
}

1;
