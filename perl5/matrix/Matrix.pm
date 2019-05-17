package Matrix;
use strict;
use warnings;

sub new {
  my ($class, $matrix) = @_;
  return bless { rows => [map { [split] } split "\n", $matrix] }, $class;
}

sub rows {
  my ($self, $n) = @_;
  return $self->{rows}->[$n];
}

sub columns {
  my ($self, $n) = @_;
  return [map { $_->[$n] } @{$self->{rows}}];
}

1;
