# Stuff and things
## Installing /Debugging
Node, NPM and Yarn are required installs.
 * Navagate to the project repo
 * `yarn` To install dependencies
 * `yarn start` to deploy locally to `http://localhost:3000`

### Building and Deploying
 * `yarn build`
 * `cp .\now.json .\build\`
 * `cd .\build\`
 * Use `now --target production` to deploy. 

### Info
 * Hosted using Zeit via now. `zeit.co`
 
### Domain Name
 * Use `now domains ls` to check domain for usable domain names.
 * You might need to `move` the domain to your GitHub account. 
 * `LostInOtter.space`
 * `now alias <personalwebsite-xyz123.now.sh> lostinotter.space`