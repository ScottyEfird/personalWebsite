# www.scottyefird.com

You've found the source code of my personal website

Build with [React](https://reactjs.org/) and is designed as a quick and easy way for you to get to know me.

## Helpful Documentation for Great Good

### Requirements

- NodeJs `https://nodejs.org/en/`
- Vercel (For hosting and deployment) `https://vercel.com/download`

## Build Setup

```bash
# install dependencies
$ npm install

# server with hot reload at `http://localhost:3000`
$ npm run dev

# build for production
$ npm run build

# deploy to production via Vercel
$ npm run deploy
```

## Vercel Specific Documentation

### Manually aliasing a domain name

- `now` Outputs a build as `https://build-xyz@abc.now.sh`
- `now alias https://build-9botg0ntw.now.sh scottyefird.com`

### Configuring and adding a domain name

- Configured with `now.json` in the root directory
- Use `now domains ls` to check domain for usable domain names.
- You might need to `move` the domain to your GitHub account.
- `['scottyefird.com']`
