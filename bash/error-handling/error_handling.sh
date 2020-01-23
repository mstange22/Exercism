#!/usr/bin/env bash

main () {
  (( $# % 2 == 0 )) && { echo "Usage: ./error_handling <greetee>"; exit 1; }
  echo "Hello, $1"
}

main "$@"