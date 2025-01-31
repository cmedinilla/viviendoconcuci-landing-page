# rousruiz.com

Landing page for rousruiz.com

## How to run

This is a very simple app using Vite as boiler plate.

Using Node.JS 20 run

```bash
npm install
npm run dev
```

Congrats you are running this app!!!!

## Deploy

Using Github Pages as serverless hosting (AWS S3 and Cloud Front for Pre prod and preview deployments) and Github Actions for deploy orchastation.

#### Deploy a Branch

When a PR is created (open, closed, reopen or sync) a preview deployment is created based in that branch, the URL will follow the next pattern https://d1hb6ypw4biq8k.cloudfront.net/previews/{PR_NUMBER}/, when the PR is closed this deploy will be destroyed

### Deploy to Pre Production

When a PR is merged to main, this will be deployed to the next URL:  https://d1hb6ypw4biq8k.cloudfront.net/previews/preprod/

### Deploy to Production (rousruiz.com)

When a release is created a deploy to rousruiz.com will be triggered, use yyyy.mm.dd notation for the tag and release version, for example 2024.10.19 in case of make more than one deploy at the same day add a consecutive number 2024.10.19.2.

Build with Love :heart: by Christian Medinilla [Medininja](https://github.com/cmedinilla)