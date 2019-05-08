use 5.10.0;
use strict;
use warnings;

my $module = 'Accumulate';
use Accumulate;

my $res = Accumulate->accumulate([1, 2, 3, 4, 5], sub { $_[0] * $_[0] });
foreach my $el (@$res) {
  print "res el: $el\n";
}
