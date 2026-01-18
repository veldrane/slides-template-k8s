#!/bin/bash

[[ -z "$1" ]] && echo "Usage: $0 markdown slide" && exit 1

rm -f slides.md
ln -s ./$1 slides.md
