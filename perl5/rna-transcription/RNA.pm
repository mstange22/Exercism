package RNA;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(to_rna);

sub to_rna {
  return shift =~ tr/GCTA/CGAU/r;
}

1;
