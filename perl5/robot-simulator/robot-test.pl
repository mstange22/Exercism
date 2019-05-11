use 5.10.0;
use strict;
use warnings;

my $module = 'Robot';
use Robot;
my $robot = Robot->new();

# my $sim_module = "Simulator";
# my $simulator = $sim_module->new;

# $simulator->place($robot, { x => -2, y => 1, direction => "east" });
# $simulator->evaluate($robot, "RLAALAL");
# print "res: ", $res, "\n";

$robot->at(0, 0);
$robot->orient('east');
$robot->turn_right;
# is_deeply $robot->coordinates, [0, 1],