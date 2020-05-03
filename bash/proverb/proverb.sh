#!/usr/bin/env bash

for (( i=1; i <$#; i++ )); do
  echo "For want of a ${@:$i:1} the ${@:$i+1:1} was lost."
done

(( $# > 0 )) && echo "And all for the want of a ${@:1:1}." || echo ""
