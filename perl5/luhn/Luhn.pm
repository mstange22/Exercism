package Luhn;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(is_luhn_valid);

sub is_luhn_valid {
  my ($input) = @_;
  $input =~ s/\s//g;
  if ($input =~ /\D/ || length($input) <= 1) {
    return 0;
  }
  my $sum = 0;
  foreach my $i (0 .. length($input) - 1) {
    my $digit = substr($input, length($input) - 1 - $i, 1);
    if ($i % 2 == 1) {
      $sum += $digit == 9 ? 9 : ($digit * 2) % 9;
    } else {
      $sum += $digit;
    }
  }
  return $sum % 10 == 0;
}

1;
