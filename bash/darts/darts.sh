#!/usr/bin/env bash

throw() { exho "error"; exit 1; }

main () {
  (( $# == 2 )) || throw
  ([[ $1 =~ [-.0-9] ]] && [[ $2 =~ [-.0-9] ]]) || throw

  radius=$(bc <<< "scale=2; sqrt( $1*$1 + $2*$2 )")
  
  if [[ $(bc <<< "$radius > 10") -eq 1 ]]; then
    echo "0"
  elif  [[ $(bc <<< "$radius > 5" ) -eq 1 ]]; then
    echo "1"
  elif [[ $(bc <<< "$radius > 1" ) -eq 1 ]]; then
    echo "5"
  else
    echo "10"
  fi
}

main "$@"