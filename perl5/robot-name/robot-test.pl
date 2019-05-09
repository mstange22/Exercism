use 5.10.0;
use strict;
use warnings;

use RobotName qw(name);

my $robot = RobotName->new;
my $name = $robot->name;
print "name: $name\n";