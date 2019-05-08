package Cipher;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(encode decode);

sub encode {
  my $s = lc shift;
  $s =~ s/[^a-z0-9]//g;
  $s =~ tr/a-z/zyxwvutsrqponmlkjihgfedcba/;
  $s =~ s/(\w{5})/$1 /g;
  return $s =~ s/ $//r;
}

sub decode {
  return encode(shift) =~ s/ //rg;;
}
