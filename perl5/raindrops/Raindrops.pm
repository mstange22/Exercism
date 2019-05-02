package Raindrops;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(raindrop);

my @SOUNDS = (
  {
    number => 3,
    sound => 'Pling',
  },
  {
    number => 5,
    sound => 'Plang',
  },
  {
    number => 7,
    sound => 'Plong',
  }
);

sub raindrop {
  my ($number) = @_;
  my $res = '';
  for my $i (0 .. $#SOUNDS) {
    if (int($number) % $SOUNDS[$i]{number} == 0) {
      $res = $res . $SOUNDS[$i]{sound};
    }
  }
  return $res eq '' ? $number : $res;
}

1;
