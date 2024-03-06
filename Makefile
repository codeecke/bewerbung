.DEFAULT_GOAL := help

help:
	@echo ""
	@echo "PROJECT COMMANDS"
	@printf "=%.0s" {1..60}
	@printf "\n"
	@grep -E '^[a-zA-Z0-9_-]+:.*# .*$$' Makefile | awk 'BEGIN {FS = ":.*#"}; {printf "%-10s %s\n", $$1, $$2}'
	@printf "=%.0s" {1..60}
	@printf "\n\n"

dev: # runs the dev-environment
	vite --host 0.0.0.0

build-prod: # builds the project for production
	npm run build
