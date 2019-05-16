package Sieve;
use strict;
use warnings;

sub new {
  my ($class, $n) = @_;
  return bless { n => $n }, $class;
}

sub primes {
  my $n = shift->{n};
  my @res;
  my %marked;
  for my $i (2..$n) {
    if (not exists $marked{$i}) {
      $marked{$i} = 1;
      push @res, $i;
      for (my $j = $i; $j <= $n; $j += $i) {
        $marked{$j} = 1;
      }
    }
  }
  return \@res;
}

1;
