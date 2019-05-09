use 5.10.0;
use strict;
use warnings;

use BinarySearch qw(binary_search);

my %input = (
  "array" => [1, 3, 4, 6, 8, 9, 11],
  "value" => 6,
);

binary_search(\%input);