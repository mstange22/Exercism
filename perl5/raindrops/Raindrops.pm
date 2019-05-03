package Raindrops;
use strict;
use warnings;
use Exporter 'import';
use Readonly;
our @EXPORT_OK = qw(raindrop);

my Readonly::Array @SOUNDS = (
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
  my $res = q();
  for my $i (0 .. $#SOUNDS) {
    if (int($number) % $SOUNDS[$i]{number} == 0) {
      $res = $res . $SOUNDS[$i]{sound};
    }
  }
  return $res eq q() ? $number : $res;
}

1;
