#!/usr/bin/env bash

declare -A words=()

main () {
  lower=${1,,}
  cleaned=${lower//\\n/}
  cleaned=${cleaned//[^[:alnum:]\']/ }
  for word in $cleaned; do
    (( words[$word]+=1 ))
  done
  for k in "${!words[@]}"
    do
      printf "%s\n" "$k: ${words[$k]}"
    done
}

main "$@"
