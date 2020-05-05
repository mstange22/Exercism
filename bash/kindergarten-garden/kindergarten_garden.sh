#!/usr/bin/env bash

ALPHA="ABCDEFGHIJKL"

declare -A garden_map=(
  [R]="radishes"
  [C]="clover"
  [G]="grass"
  [V]="violets"
)

# split garden string param into array
arr=( $(IFS="\n" echo "$1") )

# get index of name in ALPHA to use in garden array
i=0; while [[ ${ALPHA:i:1} != ${2:0:1} ]]; do (( i++ )); done

printf "${garden_map[${arr[0]:i*2:1}]} ${garden_map[${arr[0]:i*2+1:1}]} "\
"${garden_map[${arr[1]:i*2:1}]} ${garden_map[${arr[1]:i*2+1:1}]}\n"
