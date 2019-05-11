package Crypto;
use strict;
use warnings;

sub new {
  my ($class, $plaintext) = @_;
  return bless { plaintext => $plaintext }, $class;
}

sub size { int (.99 + (sqrt length shift->{plaintext})) }

sub normalize_plaintext {
  my ($self) = @_;
  my $normalized_text = lc $self->{plaintext} =~ s/[^a-zA-Z0-9]//gr;
  $self->{plaintext} = $normalized_text;
  return $normalized_text;
}

sub plaintext_segments {
  my ($self) = @_;
  my $normalized = $self->normalize_plaintext();
  my @segments;
  my $segment_length = $self->size();
  for (my $i = 0; $i < length $normalized; $i += $segment_length) {
    push @segments, substr $normalized, $i, $segment_length;
  }
  return \@segments;
}

sub ciphertext {
  my ($self) = @_;
  my @plaintext_segments = @{$self->plaintext_segments()};
  my $size = $self->size();
  my $ciphertext = q();
  my @normalized_ciphertext;
  for my $char_num (0 .. $size - 1) {
    my $ciphertext_segment = q();
    for my $segment (0 ..  scalar @plaintext_segments - 1) {
      if (length($plaintext_segments[$segment]) > $char_num) {
        $ciphertext_segment .= substr $plaintext_segments[$segment], $char_num, 1;
      }
    }
    push @normalized_ciphertext, $ciphertext_segment;
    $ciphertext .= $ciphertext_segment;
  }
  $self->{normalized_ciphertext} = \@normalized_ciphertext;
  return $ciphertext;
}

sub normalize_ciphertext {
  my ($self) = @_;
  $self->ciphertext();
  return join ' ', @{$self->{normalized_ciphertext}};
}

-1;
