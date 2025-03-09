# News Scraper
News scraper from Indonesian news sites

## Installation
```sh
npm i scraper/scraper-news
```

## Usage 
Example get news from [cnbc](https://www.cnbcindonesia.com/)
```ts
// Import module
import { cnbcindonesia } from 'scraper/scraper-news'

const data = await cnbcindonesia()
console.log(data) // JSON
```
[Documentation](https://ReyEndymion.github.io/scraper/modules/_ReyEndymion_scraper_news.html)