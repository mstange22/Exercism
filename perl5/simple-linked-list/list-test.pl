use 5.10.0;
use strict;
use warnings;

my $module = 'LinkedList';
use LinkedList;

sub elem { $module->new( @_ ) }
sub array { $module->from_array( [@_] ) }
# my $two = LinkedList->new(1);
# my $one = LinkedList->new(1, $two);
my $e = array(1..5)
# my $one = array(1);
# my $res = $one->data();
# print "res: $res\n";