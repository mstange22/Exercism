package Robot;
use strict;
use warnings;
use List::Util qw(none);

our @directions = qw(north east south west);

our %func_map = (
  L => qw(turn_left),
  R => qw(turn_right),
  A => qw(advance),
);

our %advance_map = (
  north => [0, 1],
  east => [1, 0],
  south => [0, -1],
  west => [-1, 0],
);

our %bearing_map = (
  north => 0,
  east => 1,
  south => 2,
  west => 3,
);

sub new {
  my ($class) = @_;
  return bless {}, $class;
}

sub orient {
  my ($self, $direction) = @_;
  die "ArgumentError" if none { $direction eq $_ } @directions;
  $self->{bearing} = $direction;
}

sub bearing {
  return shift->{bearing};
}

sub turn_right {
  my ($self) = @_;
  $self->{bearing} = $directions[($bearing_map{$self->{bearing}} + 1) % 4];
}

sub turn_left {
  my ($self) = @_;
  $self->{bearing} = $directions[($bearing_map{$self->{bearing}} - 1) % 4];
}

sub at {
  my ($self, $x, $y) = @_;
  $self->{coordinates} = [$x, $y];
}

sub coordinates {
  return shift->{coordinates};
}

sub advance {
  my ($self) = @_;
  $self->{coordinates} = [
    $self->{coordinates}[0] + $advance_map{$self->{bearing}}[0],
    $self->{coordinates}[1] + $advance_map{$self->{bearing}}[1],
  ];
}

package Simulator;
use strict;
use warnings;

sub new {
  my ($class) = @_;
  return bless {}, $class;
}

sub place {
  my ($self, $robot, $info) = @_;
  $robot->at($info->{x}, $info->{y});
  $robot->orient($info->{direction});
}

sub evaluate {
  my ($self, $robot, $instructions) = @_;
  $robot->$_() for @{$self->instructions($instructions)};
}

sub instructions {
  my ($self, $instructions) = @_;
  return [map { $func_map{$_} } split "", $instructions];
}