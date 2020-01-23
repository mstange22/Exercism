#!/usr/bin/env bash

declare -A number_map=(
  [black]=0
  [brown]=1
  [red]=2
  [orange]=3
  [yellow]=4
  [green]=5
  [blue]=6
  [violet]=7
  [grey]=8
  [white]=9
)

main () {
  sum=""

  # check colors and add digits
  for color in $1 $2; do
    ! [[ ${number_map[$color]} ]] && { echo "invalid color"; exit 1; }
    sum+=${number_map[$color]}
  done

  # check third color
  ! [[ ${number_map[$3]} ]] && { echo "invalid color"; exit 1; }

  # add zeroes
  zeroes=${number_map[$3]}
  for (( i=0; i<$zeroes; i++ )); do
    sum+=0
  done

  #strip leading 0
  if [[ $1 == "black" ]]; then
    sum=${sum:1}
  fi

  # replace zeroes with appropriate prefix, if necessary
  if (( ${#sum} > 8 )) && [[ ${sum: -9} == "000000000" ]]; then
    sum="${sum::-9} gigaohms"
  elif (( ${#sum} > 5 )) && [[ ${sum: -6} == "000000" ]]; then
    sum="${sum::-6} megaohms"
  elif (( ${#sum} > 2 )) && [[ ${sum: -3} == "000" ]]; then
    sum="${sum::-3} kiloohms"
  else sum="$sum ohms"
  fi

  echo $sum
}

main "$@"