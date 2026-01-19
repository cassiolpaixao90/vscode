#!/usr/bin/env bash

set -e

export N_PREFIX="${N_PREFIX:-$HOME/.n}"
export PATH="$N_PREFIX/bin:$PATH"

hash -r 2>/dev/null || true
rehash 2>/dev/null || true

if [[ -n "${ELECTRON_RUN_AS_NODE:-}" ]]; then
	unset ELECTRON_RUN_AS_NODE
fi

if [[ "$OSTYPE" == "darwin"* ]]; then
	NAME_LONG="$(node -p "require('./product.json').nameLong")"
	ELECTRON_DIR="./.build/electron"
	if [[ -d "$ELECTRON_DIR" && ! -d "$ELECTRON_DIR/$NAME_LONG.app" && -d "$ELECTRON_DIR/Code - OSS.app" ]]; then
		echo "Removing stale Electron bundle: $ELECTRON_DIR/Code - OSS.app"
		rm -rf "$ELECTRON_DIR"
	fi
fi

./scripts/code.sh "$@"
