package Grains;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(grains_on_square total_grains);

sub grains_on_square {
  my ($square) = @_;
  return 1 << ($square - 1);
}

sub total_grains {
  return Math::BigInt->new(1)->blsft(64) - 1;
}

1;
