#!/usr/bin/env bash

declare -A parts=(
  ["malt"]="lay in"
  ["rat"]="ate"
  ["cat"]="killed"
  ["dog"]="worried"
  ["cow with the crumpled horn"]="tossed"
  ["maiden all forlorn"]="milked"
  ["man all tattered and torn"]="kissed"
  ["priest all shaven and shorn"]="married"
  ["rooster that crowed in the morn"]="woke"
  ["farmer sowing his corn"]="kept"
  ["horse and the hound and the horn"]="belonged to"
)

map=(
  [0]="house that Jack built."
  [1]="malt"
  [2]="rat"
  [3]="cat"
  [4]="dog"
  [5]="cow with the crumpled horn"
  [6]="maiden all forlorn"
  [7]="man all tattered and torn"
  [8]="priest all shaven and shorn"
  [9]="rooster that crowed in the morn"
  [10]="farmer sowing his corn"
  [11]="horse and the hound and the horn"
)

# validate verses
(( ${@:1:1} < 1 || ${@:1:1} > 12 || ${@:2:1} < 1 || ${@:2:1} > 12  )) && { echo *invalid*; exit 1; }

for (( i=${@:1:1}; i <= ${@:2:1}; i++ )); do
  echo "This is the ${map[i-1]}"
  for (( j=i-1; j > 0; j--)); do
    echo "that ${parts[${map[j]}]} the ${map[j - 1]}"
  done
  echo ""
done