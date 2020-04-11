#!/usr/bin/env bash

map=(
  [1]="wink"
  [2]="double blink"
  [4]="close your eyes"
  [8]="jump"
)

(( (( $1 & 16 )) == 16 )) && keys="8 4 2 1" || keys="1 2 4 8"

res=""
counter=0

for key in $keys; do
  (( (( $1 & $key )) == $key )) && {
    (( counter++ != 0 )) && res+=","
    res+=${map[key]}
  }
done

echo $res