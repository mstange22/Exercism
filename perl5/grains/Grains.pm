package Grains;
use strict;
use warnings;
use Carp;
use Exporter 'import';
our @EXPORT_OK = qw(grains_on_square total_grains);

sub grains_on_square {
  my ($square) = @_;
  if ($square < 1 || $square > 64) {
    throw Exception('square must be between 1 and 64');
  }
  return 1 << ($square - 1);
}

sub total_grains {
  return Math::BigInt->new(1)->blsft(64) - 1;
}

1;
