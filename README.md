# www.scottyefird.com

This is the source code of my personal website.

// TODO tell a story

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
