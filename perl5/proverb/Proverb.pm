package Proverb;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(proverb);

sub proverb {
  my ($things, $qualifier) = @_;
  my $original = $qualifier ? "$qualifier $things->[0]" : "$things->[0]";
  my $res = '';
  foreach my $i (0 .. scalar(@$things) - 2) {
    $res = $res . "For want of a $things->[$i] the $things->[$i+1] was lost.\n";
  }
  return $res . "And all for the want of a $original.";
}

1;
