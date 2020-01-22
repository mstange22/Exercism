#!/usr/bin/env bash

declare -A number_map=(
  [black]=0
  [brown]=1
  [red]=2
  [orange]=3
  [yellow]=4
  [green]=5
  [blue]=6
  [violet]=7
  [grey]=8
)

main () {
  sum=""
  for color in $1 $2; do
    [[ ${number_map[$color]} ]] || { echo "invalid color"; exit 1; }
    sum+=${number_map[$color]}
  done
  echo $sum
}

main "$@"