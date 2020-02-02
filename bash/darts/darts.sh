#!/usr/bin/env bash

main () {
  # echo "params: $1 $2"

  # get distance betwween ($1, $2) and (0, 0)
  abs_x=0
  abs_y=0
  (( $1 < 0 )) && abs_x=$(( $abs_x-$1 )) || abs_x=$(( $1-$abs_x ))
  (( $2 < 0 )) && abs_y=$(( $abs_y-$2 )) || abs_y=$(( $2-$abs_y ))

  # echo "abs_x: $abs_x"
  # echo "abs_y: $abs_y"
  # compare distance to score map 10/5/1/0
  # d=
  a=$(bc <<< "scale=0; sqrt($(( $abs_x*$abs_x+$abs_y*$abs_y )))")
  # echo "$a"
  if (( a > 10 )); then
    echo "0"
  elif (( a > 5 )); then
    echo "1"
  elif (( a > 1 )); then
    echo "5"
  else
    echo "10"
  fi
}

main "$@"