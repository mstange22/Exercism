package Queens;
use strict;
use warnings;

sub invalid_positions {
  for my $queen (@_) {
    for my $coord (@$queen) {
      return 1 if $coord < 0 || $coord > 7;
    }
  }
  return 0;
}

sub queens_are_equal {
  my ($white, $black) = @_;
  return $white->[0] == $black->[0] && $white->[1] == $black->[1];
}

sub new {
  my ($class, %params) = @_;
  %params or %params = (
    white => [0, 3],
    black => [7, 3],
  );
  die "ArgumentError" if queens_are_equal($params{white}, $params{black});
  die "ArgumentError" if invalid_positions($params{white}, $params{black});
  return bless \%params, $class;
}

sub white { shift->{white} }

sub black { shift->{black} }

sub to_string {
  my $self = shift;
  my @res = map { [("O") x 8] } 0..7;
  $res[$self->{white}->[0]][$self->{white}->[1]] = "W";
  $res[$self->{black}->[0]][$self->{black}->[1]] = "B";
  return join "\n", map({ join " ", @$_ } @res), "";
}

sub can_attack {
  my $self = shift;
  return 1 if $self->{white}->[0] == $self->{black}->[0];
  return 1 if $self->{white}->[1] == $self->{black}->[1];
  return 1 if abs ($self->{white}->[0] - $self->{black}->[0])
    == abs ($self->{white}->[1] - $self->{black}->[1]);
  return 0;
}

1;
