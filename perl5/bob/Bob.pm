# Declare package 'Bob'
package Bob;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(hey);

sub hey {
  my ($msg) = @_;
  $msg =~ s/^\s+|\s+$//g;
  if ($msg eq '') {
    return 'Fine. Be that way!';
  }
  if ((substr $msg, -1) eq '?') {
    if (uc($msg) eq $msg && $msg =~ /[A-Z]/) {
      return 'Calm down, I know what I\'m doing!';
    }
    return 'Sure.'
  }
  if (uc($msg) eq $msg && $msg =~ /[A-Z]/) {
    return 'Whoa, chill out!';
  }
  return 'Whatever.'
}

1;
