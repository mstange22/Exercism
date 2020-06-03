#!/usr/bin/env bash

alpha="abcdefghijklmnopqrstuvwxyz"
declare -A alpha_map=()

populate_map() {
  for (( i=0; i<26; i++ )); do
    alpha_map[${alpha:i:1}]=${alpha:25-$i:1}
  done
}

main () {
  populate_map

  cleaned=${2,,}
  cleaned=${cleaned//[^[:alnum:]]/}

  res=""

  for (( i=0; i<${#cleaned}; i++)); do
    char=${cleaned:i:1}
    if [[ $char == [a-z] ]]; then
      # add space if encoding and have 5 char in current chunk
      [[ $1 == "encode" ]] && (( i%5 == 0 && i != 0 )) && res+=" "
      char=${alpha_map[$char]}
    fi
    res+=$char
  done

  echo "$res"
}

main "$@"
