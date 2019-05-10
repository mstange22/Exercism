package PhoneNumber;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(clean_number);

sub clean_number {
  my $num = shift;
  die "letters not permitted" if $num =~ /[a-zA-Z]/;

  #strip acceptable punctuation
  $num =~ s/[-().+ ]+//g;

  die "punctuations not permitted" if $num =~ /\D/;

  # validate / normalize length
  die "incorrect number of digits" if length $num < 10;
  die "more than 11 digits" if length $num > 11;

  if (length $num == 11) {
    die "11 digits must start with 1" if substr($num, 0, 1) ne "1";
    $num = substr $num, 1;
  }

  # 10 digits left
  my $first = substr $num, 0, 1;
  my $exchange = substr $num, 3, 1;
  die "area code cannot start with zero" if $first eq "0";
  die "area code cannot start with one" if $first eq "1";
  die "exchange code cannot start with zero" if $exchange eq "0";
  die "exchange code cannot start with one" if $exchange eq "1";
  return $num;
}

1;
