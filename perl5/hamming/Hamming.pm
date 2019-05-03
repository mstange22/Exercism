package Hamming;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(hamming_distance);

sub hamming_distance {
  my ($strand1, $strand2) = @_;
  my $length = length $strand1;
  if (length $strand2 != $length) {
    throw Exception('left and right strands must be of equal length');
  }
  return scalar grep {substr($strand1, $_, 1) ne substr($strand2, $_, 1)} 0.. $length-1;
}

1;
