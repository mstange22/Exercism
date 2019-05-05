package Clock;
use strict;
use warnings;

use constant MINUTES_IN_DAY => 60 * 24;

sub new {
  my ($class, $attributes) = @_;
  return bless {
    minutes => ($attributes->{hour} * 60 + $attributes->{minute}) % MINUTES_IN_DAY,
  }, $class;
}

sub time {
  my ($self) = @_;
  return sprintf("%02d:%02d", $self->{minutes} / 60, $self->{minutes} % 60);
}

sub add_minutes {
  my ($self, $amount) = @_;
  my $new_minutes = $self->{minutes} + $amount;
  $self->{minutes} = $new_minutes % MINUTES_IN_DAY;
  return $self;
}

sub subtract_minutes {
  my ($self, $amount) = @_;
  $amount %= MINUTES_IN_DAY;
  my $new_minutes = $self->{minutes} - $amount + MINUTES_IN_DAY;
  $self->{minutes} = ($new_minutes) % MINUTES_IN_DAY;
  return $self;
}

1;
