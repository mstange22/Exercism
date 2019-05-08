use 5.10.0;
use strict;
use warnings;


use Anagram qw(match);

# my $res = match("diaper", ["hello", "world", "zombies", "pants"]);
my $res = match("master", @{["stream", "pigeon", "maters"]});


print("res: ", @$res, "\n")