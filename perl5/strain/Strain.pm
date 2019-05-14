package Strain;
use strict;
use warnings;

sub keep {
  my ($data, $func) = @_;
  my @res;
  for (@$data) {
    push @res, $_ if $func->($_);
  }
  return \@res;
}

sub discard {
  my ($data, $func) = @_;
  return keep($data, sub { !$func->(shift) });
}

1;
