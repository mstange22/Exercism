#!/usr/bin/env bash

main () {
  (( $1 < 1 )) && { echo "Error: Only positive numbers are allowed"; exit 1; }
  n=$1
  steps=0
  while [ $n -gt 1 ]; do
    (( n % 2 == 0 )) && (( n/=2 )) || (( n=n*3+1))
    (( steps++ ))
  done
  echo $steps
}

main "$@"
