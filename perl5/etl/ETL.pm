package ETL;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(transform);

sub transform {
  my ($oldMap) = @_;
  my %newMap;
  for my $key (keys $oldMap) {
    my $entry = $oldMap->{$key};
    foreach my $el (@$entry) {
      my $newKey = lc($el);
      $newMap{$newKey} = $key;
    }
  } 
  return \%newMap;
}
