use 5.10.0;
use strict;
use warnings;

my $module = 'Clock';
use Clock;

my $clock = Clock->new({
  hour   => 0,
  minute => 3,
});

print "time: ", $clock->time, "\n";

$clock->subtract_minutes(4);

print "new time: ", $clock->time, "\n";
