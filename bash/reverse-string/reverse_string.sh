#!/usr/bin/env bash

main () {
  new=$1
  for (( i=0; i<${#new}; i++ )); do
    char=${1:${#new}-1-i:1}
    new=${new:0:i}${char}${new:i+1}
  done
  echo $new
}

main "$@"