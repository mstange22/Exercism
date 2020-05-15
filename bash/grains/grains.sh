#!/usr/bin/env bash

main () {
  [[ $1 == "total" ]] && { echo "18446744073709551615"; exit 0; }
  (( $1 < 1 || $1 > 64 )) && { echo "Error: invalid input"; exit 1; }
  (( $1 == 64 )) && { echo "9223372036854775808"; exit 0; }
  (( res=(1 << ($1 - 1)) ))
  printf "%d\n" $res
}

main "$@"
