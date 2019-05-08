package Cipher;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(encode decode);

sub encode {
  my $s = shift;
  my $res = "";
  my $counter = 0;
  for my $c (split "", $s) {
    if ($c =~ /[0-9a-zA-Z]/) {
      if ($counter % 6 == 5) {
        $res .= " ";
        $counter++;
      }
      if ($c =~ /\d/) {
        $res .= $c;
      } else {
        my $offset = ord(lc $c) - ord("a");
        $res .= chr(ord("z") - $offset);
      }
      $counter++;
    }
  }
  return $res;
}

sub decode {
  return encode(shift) =~ s/ //rg;;
}
