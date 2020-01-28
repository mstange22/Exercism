#!/usr/bin/env bash

declare -A map=(
  [Pling]=3
  [Plang]=5
  [Plong]=7
)

main () {
  res=""
  for sound in "Pling" "Plang" "Plong"; do
    (( $1 % ${map[$sound]} == 0 )) && res+=$sound
  done
  [[ $res == "" ]] && echo $1 || echo $res
}

main "$@"