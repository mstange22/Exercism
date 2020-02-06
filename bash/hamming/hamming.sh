#!/usr/bin/env bash

throw() { echo "$1" >&2; exit 1; }

(( $# != 2 )) && throw "Usage: hamming.sh <string1> <string2>"
(( ${#1} != ${#2} )) && throw "left and right strands must be of equal length"

d=0

for ((i=0; i<${#1}; i++)); do
  [[ "${1:i:1}" != "${2:i:1}" ]] && (( d+=1 ))
done

echo "$d"