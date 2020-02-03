#!/usr/bin/env bash

declare -A map=(
  [A]=0
  [C]=0
  [G]=0
  [T]=0
)

for ((i=0; i < ${#1}; i++)); do
  nucleotide=${1:i:1}
  ! [[ $nucleotide =~ [ACGT] ]] && { echo "Invalid nucleotide in strand"; exit 1; }
  (( map[$nucleotide]+=1 ))
done

echo $'A: '${map[A]}$'\nC: '${map[C]}$'\nG: '${map[G]}$'\nT: '${map[T]}