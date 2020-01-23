#!/usr/bin/env bash

declare -A bracket_map=(
  ["["]="]"
  ["{"]="}"
  ["("]=")"
)

main () {
  stack=""
  for ((i=0; i < ${#1}; i++)); do
    c=${1:i:1}
    #ignore non-bracket characters
    ! [[ $c =~ [][{}()] ]] && continue

    # open bracket.  Add close bracket to stack
    if [[ ${bracket_map[$c]} ]]; then
      stack+=${bracket_map[$c]}
    else
      # if close bracket doesn't match top of stack, fail.
      ! [[ ${stack: -1} == $c ]] && { echo "false"; exit 0; }
      # otherwise, pop stack and continue
      stack=${stack::-1}
    fi
  done
  # if stack is empty when done, match!
  (( ${#stack} == 0 )) && { echo "true"; exit 0; }
  echo "false"
}

main "$@"