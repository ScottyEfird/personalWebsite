# Helpful Documentation for Great Good

## Requirements

- NodeJs `https://nodejs.org/en/`
- Vercel (For hosting and deployment) `https://vercel.com/download`

## Building, Running and Deploying

- `npm i` To install dependencies
- `npm run start` to launch the server locally to `http://localhost:3000`
- `npm run build` to build the site locally
<!-- - `yarn deploy` to deploy to `scottyefird.com`. -->

### Manually aliasing a domain name

- `now` Outputs a build as `https://build-xyz@abc.now.sh`
- `now alias https://build-9botg0ntw.now.sh scottyefird.com`

### Domain Name

- Configured with `now.json` in the root directory
- Use `now domains ls` to check domain for usable domain names.
- You might need to `move` the domain to your GitHub account.
- `['scottyefird.com']`
