use 5.10.0;
use strict;
use warnings;

my $module = 'Cipher';
use Cipher;

my $cipher = Cipher->new('dddddddddddddddddddd');

my $res = $cipher->encode('surjudpplqjlvdzhvrph');
print "res: ", $res, "\n";
