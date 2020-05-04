#!/usr/bin/env bash

did=(
  1 "lay in" "ate" "killed" "worried" "tossed" "milked"
  "kissed" "married" "woke" "kept" "belonged to"
)

thing=(
  "house that Jack built." "malt" "rat" "cat" "dog"
  "cow with the crumpled horn" "maiden all forlorn"
  "man all tattered and torn" "priest all shaven and shorn"
  "rooster that crowed in the morn" "farmer sowing his corn"
  "horse and the hound and the horn"
)

# validate verses
(( ${@:1:1} < 1 || ${@:1:1} > 12 || ${@:2:1} < 1 || ${@:2:1} > 12  )) && { echo *invalid*; exit 1; }

for (( i=${@:1:1}; i <= ${@:2:1}; i++ )); do
  echo "This is the ${thing[i-1]}"
  for (( j=i-1; j > 0; j--)); do
    echo "that ${did[j]} the ${thing[j - 1]}"
  done
  echo ""
done