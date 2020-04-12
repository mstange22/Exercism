#!/usr/bin/env bash

res=""
marked=()

if (( $# > 0 )); then
  for (( i=2; $i <= $1; i++ )); do
    if ! [[ ${marked[i]} ]]; then
      res+=" $i"
      for (( j=$i; (( $j <= $1 )); j+=$i )); do
        marked[$j]=1
      done
    fi
  done
fi

echo $res