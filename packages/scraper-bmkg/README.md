# BMKG Scraper
Contains scrapers [BMKG](https://www.bmkg.go.id/) website

## Installation
```sh
npm i @reyendymion/scraper-bmkg
```

## Usage 
Example get data earthQuake (earthquake):
```ts
// Import module
import { earthQuake } from '@reyendymion/scraper-bmkg'

const data = await earthQuake()
console.log(data) // JSON
```
[Documentation](https://ReyEndymion.github.io/scraper/modules/_ReyEndymion_scraper_bmkg.html)