package Cipher;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(encode decode);

sub new {
  my ($class, $key) = @_;
  $key //= "a";
  die 'ArgumentError' if length $key == 0;
  die 'ArgumentError' if $key =~ /[A-Z0-9]/;
  return bless {
    key => $key,
  }, $class;
}

sub encode {
  my ($self, $input, $decode) = @_;
  $decode //= 0;
  $input =~ s/[^a-zA-Z]//g;
  my @res;
  for (my $i = 0; $i < length $input; $i++) {
    my $in_char_pos = ord(substr lc $input, $i, 1) - ord("a");
    my $shift = ord(substr($self->{key}, ($i % length($self->{key})), 1)) - ord("a");
    my $new_char_pos = $decode == 1 ? ($in_char_pos - $shift) % 26 : ($in_char_pos + $shift) % 26;
    push @res, chr($new_char_pos + ord("a"));
  }
  return join '', @res;
}

sub decode {
  my ($self, $input) = @_;
  return $self->encode($input, 1);
}

1;
