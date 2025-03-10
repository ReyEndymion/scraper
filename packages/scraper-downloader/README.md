# Downloader site Scraper
Contains scrapers from downloader sitesContains scrapers from downloader sites

## Installation
```sh
npm i scraper/scraper-downloader
```

## Usage 
Example mediafire download:
```ts
// Import module
import { mediafiredl } from 'scraper/scraper-downloader'

const data = await mediafiredl('https://www.mediafire.com/file/gpeiucmm1xo6ln0/hello_world.mp4/file')
console.log(data) // JSON
```
[Documentation](https://ReyEndymion.github.io/scraper/modules/_ReyEndymion_scraper_downloader.html)