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
  my $counter = 0;
  for my $i (0 .. $length - 1) {
    if (substr($strand1, $i, 1) ne substr($strand2, $i, 1)) {
      $counter++;
    }
  }
  return $counter;
}

1;
