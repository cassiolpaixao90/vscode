#!/usr/bin/env bash

set -e

export N_PREFIX="${N_PREFIX:-$HOME/.n}"
export PATH="$N_PREFIX/bin:$PATH"

hash -r 2>/dev/null || true
rehash 2>/dev/null || true

npm run compile
