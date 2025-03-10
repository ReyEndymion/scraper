# News Scraper
News scraper from Indonesian news sites

## Installation
```sh
npm i @reyendymion/scraper-news
```

## Usage 
Example get news from [cnbc](https://www.cnbcindonesia.com/)
```ts
// Import module
import { cnbcindonesia } from '@reyendymion/scraper-news'

const data = await cnbcindonesia()
console.log(data) // JSON
```
[Documentation](https://ReyEndymion.github.io/scraper/modules/_ReyEndymion_scraper_news.html)