package Accumulate;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(accumulate);

sub accumulate {
  my ($input, $func) = @_;
  my @res;
  push @res, $func->($_) foreach @$input;
  return \@res;
}