# Primbon Scraper
Primbon Scraper

## Installation
```sh
npm i scraper/scraper-primbon
```

## Usage 
Example get zodiac
```ts
// Import module
import { getZodiac } from 'scraper/scraper-primbon'

const data = getZodiac(1, 1) // The first argument is the month and the second argument is the date
console.log(data) // 'capricorn'
```
Example to get the meaning of the name
```ts
// Import module
import { artinama } from 'scraper/scraper-primbon'

const data = await artinama('Windah basudara') 
console.log(data) // String
```
[Documentation](https://ReyEndymion.github.io/scraper/modules/_ReyEndymion_scraper_primbon.html)