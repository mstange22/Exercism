package AllYourBase;
use strict;
use warnings;

sub convert_base {
  my ($input_digits, $input_base, $output_base) = @_;
  die "base must be greater than 1" if $input_base <= 1 or $output_base <= 1;
  my $base_10_num = 0;
  my @output_digits;

  # convert input_digits to base 10
  my @reversed_digits = reverse @{$input_digits};
  for (my $i = 0; $i < scalar @reversed_digits; $i++) {
    my $digit = $reversed_digits[$i];
    die "negative digit not allowed" if $digit < 0;
    die "digit equal of greater than the base" if $digit >= $input_base;
    $base_10_num += $digit * ($input_base ** $i);
  }

  push @output_digits, 0 if $base_10_num == 0;

  #convert base 10 number to output_base digits
  while ($base_10_num > 0) {
    use integer;
    unshift @output_digits, ($base_10_num % $output_base);
    $base_10_num /= $output_base;
  }

  return \@output_digits;
}

1;
