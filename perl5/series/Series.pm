package Series;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(Series);

sub new {
  my ($class, $input) = @_;
  return bless {
      input => $input,
  }, $class;
}

sub slice {
  my ($self, $size) = @_;
  if ($size > length($self->{input})) {
    die "ArgumentError";
  }
  my @res = ();
  for my $i (0 .. length($self->{input}) - $size) {
    push @res, [split(//sxm, substr($self->{input}, $i, $size))];
  }
  return \@res;
}

1;