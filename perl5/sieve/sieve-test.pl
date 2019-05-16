use 5.10.0;
use strict;
use warnings;
use Data::Dumper;
use Sieve qw(new primes);

my @expected = [2, 3, 5, 7];

# print Dumper \%params;
my $sieve = Sieve->new(10);
my $primes = $sieve->primes;
print "primes: @{$primes}\n";