# SnapSave Scraper
[Documentation](https://ReyEndymion.github.io/scraper/modules/_ReyEndymion_scraper_instagram.html)

## Installation
```sh
npm i scraper/scraper-snapsave
```

## Usage 
Example download Instagram video
```ts
// import module
import { snapsave } from 'scraper/scraper-snapsave'

const data = await snapsave('https://www.instagram.com/reel/CxSEjxfyJtN')
console.log(data) // JSON
```
