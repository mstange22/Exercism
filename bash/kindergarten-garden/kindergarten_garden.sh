#!/usr/bin/env bash

arr=( $(IFS=";" echo "$1") )
alpha="ABCDEFGHIJKL"
res=""

declare -A garden_map=(
  [R]="radishes"
  [C]="clover"
  [G]="grass"
  [V]="violets"
)

letter=${2:0:1}

for (( i=0; i<${#alpha}; i++ )) {
  if [[ ${alpha:i:1} == $letter ]]; then
    res+="${garden_map[${arr[0]:i*2:1}]} "
    res+="${garden_map[${arr[0]:i*2+1:1}]} "
    res+="${garden_map[${arr[1]:i*2:1}]} "
    res+="${garden_map[${arr[1]:i*2+1:1}]}"
  fi
}

echo $res