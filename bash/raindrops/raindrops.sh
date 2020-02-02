#!/usr/bin/env bash

map=(
  [3]="Pling"
  [5]="Plang"
  [7]="Plong"
)

main () {
  res=""
  for key in "${!map[@]}"; do
    (( $1 % $key == 0 )) && res+=${map[key]}
  done
  echo ${res:-$1}
}

main "$@"