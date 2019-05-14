package Gigasecond;
use strict;
use warnings;
use DateTime;

sub new {
  my ($class, $year, $month, $day) = @_;
  return bless {
    dt => DateTime->new(year => $year, month => $month, day => $day),
  }, $class;
}

sub date {
  return shift->{dt}->add( seconds => 1e9 )->truncate( to => "day" );
}

1;
