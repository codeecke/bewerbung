.DEFAULT_GOAL := help

help:
	@echo ""
	@echo "PROJECT COMMANDS"
	@printf "=%.0s" {1..60}
	@printf "\n"
	@grep -E '^[a-zA-Z0-9_-]+:.*# .*$$' Makefile | awk 'BEGIN {FS = ":.*#"}; {printf "%-10s %s\n", $$1, $$2}'
	@printf "=%.0s" {1..60}
	@printf "\n\n"

setup: # installs all nessesary modules
	cd vue; npm install
	cd react; npm install

react-dev: # runs the dev-environment
	cd react; npx vite --host 0.0.0.0


vue-dev: # runs the dev-environment
	cd vue; npx vite --host 0.0.0.0

build: # builds the project for production
	cd vue; npm run build
	cd react; npm run build

deploy: # deploys the project to server
	make build
	scp -r react/dist/* user@server:/path/react
	scp -r vue/dist/* user@server:/path/vue