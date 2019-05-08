package PhoneNumber;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(clean_number);

sub clean_number {
  my $num = shift;
  print "$num\n";
  $num =~ s/[-(). ]+//g;
  die "letters not permitted" if $num =~ /[A-Za-z]/;
  die "punctuations not permitted" if $num =~ /\D/;
  die "incorrect number of digits" if length $num < 10 || length $num > 11;
  if (length $num == 11 && substr $num, 0, 1 eq "1") {
    return substr $num, 1;
  }
  print "$num\n";
  return $num;
}

1;
