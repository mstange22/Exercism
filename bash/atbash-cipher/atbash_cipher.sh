#!/usr/bin/env bash

alpha="abcdefghijklmnopqrstuvwxyz"
declare -A alpha_map=()

populate_map() {
  for (( i=0; i<26; i++ )); do
    alpha_map[${alpha:i:1}]=$i
  done
}

main () {
  populate_map

  cleaned=${2,,}
  cleaned=${cleaned//[^[:alnum:]]/}

  res=""
  count=0

  for (( i=0; i<${#cleaned}; i++)); do
    char=${cleaned:i:1}
    if [[ $char == [a-z] ]]; then
      # add space if encoding and have 5 char in current chunk
      [[ $1 == "encode" ]] && (( count%6 == 5 )) && { res+=" "; (( count++ )); }
      char=${alpha:25-${alpha_map[$char]}:1}
    fi
    res+=$char
    (( count++ ))
  done

  echo "$res"
}

main "$@"
