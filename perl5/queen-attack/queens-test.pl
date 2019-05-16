use 5.10.0;
use strict;
use warnings;
use Data::Dumper;
use Queens qw(new white black);

my %params = (
  white => [3, 7],
  black => [6, 1],
);

print "in test, params: ", %params, "\n";
print Dumper \%params;

my $queen = Queens->new(%params);
my $white_res = $queen->white;
print "white: $white_res\n";
