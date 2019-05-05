package RomanNumerals;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(to_roman);

my @ROMAN = (
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
);

sub to_roman {
  my $number = shift;
  my $res = '';
  foreach my $el (@ROMAN) {
    while ($number >= $el->[0]) {
      $res = $res . $el->[1];
      $number -= $el->[0];
    }
  }
  return $res;
}

1;
