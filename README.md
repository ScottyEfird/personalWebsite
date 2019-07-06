# Stuff, words and things
## Commands
 * `yarn` To install dependencies
 * `yarn build` To build the repo to the `/build` directory
 * `yarn start` to launch the server locally to `http://localhost:3000`
 * `yarn deploy` to deploy to `scottyefird.com`.

### Building and deploying manually
 * `yarn build`
 * `cp .\now.json .\build\`
 * `cd .\build\`
 * Use `now --target production` to deploy. 

### General Info
 * Hosted using Zeit via now. `zeit.co`
 * Node, NPM and Yarn are required installs.
 
### Manually aliasing a domain name
 * `now` Outputs a build as `https://build-xyz@abc.now.sh`
 * `now alias https://build-9botg0ntw.now.sh scottyefird.com`
 
### Domain Name
 * Use `now domains ls` to check domain for usable domain names.
 * You might need to `move` the domain to your GitHub account. 
 * `['LostInOtter.space', 'scottyefird.com']`
 