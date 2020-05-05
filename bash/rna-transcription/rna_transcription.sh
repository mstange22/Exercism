#!/usr/bin/env bash

declare -A map=(
  [G]="C"
  [C]="G"
  [T]="A"
  [A]="U"
)

res=""

for (( i=0; i<${#1}; i++)) {
  new_char=${map[${1:i:1}]}
  [[ -z $new_char ]] && { echo "Invalid nucleotide detected."; exit 1; }
  res+=$new_char
}


echo $res