#!/usr/bin/perl
use strict;
use warnings;

my $string1 = "A";
my $string2 = "A";

my $length1 = length($string1);
print "length: $length1\n";

for my $i (0 .. $length1 - 1) {
  print "i: $i\n";
  my $char1 = substr $string1, $i, 1;
  my $char2 = substr $string2, $i, 1;
  print "char1: $char1\n";
  print "char2: $char2\n";
  if (substr($string1, $i, 1) eq substr($string2, $i, 1)) {
    print "same\n";
  } else {
    print "not same";
  }
}