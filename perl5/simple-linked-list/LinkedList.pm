package LinkedList;
use strict;
use warnings;

sub new {
  my ($class, $data, $next) = @_;
  return bless {
    data => $data,
    next => $next,
  }, $class;
}

sub from_array {
  my ($self, $values) = @_;
  print "values: $values\n";

  my $prev;
  for my $value (reverse @{$values}) {
    $prev = $self->new($value, $prev);
  }
  return $prev;
}

sub to_array {
  my $self = shift;
  my @values = ();
  do {
    push @values, $self->data();
  } while ($self = $self->next());
  return \@values;
}

sub reverse {
  my ($self) = @_;
  my $head;
  do {
    $head = (ref $self)->new($self->data(), $head);
  } while ($self = $self->next());
  return $head;
}

sub data {
  return shift->{data};
}

sub next {
  return shift->{next};
}

1;
