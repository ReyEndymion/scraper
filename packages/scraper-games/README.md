# Games data Scraper
Fetcher data from [games databases](https://github.com/ReyEndymion/database/tree/master/games)

## Installation
```sh
npm i scraper/scraper-games
```

## Usage 
Example get asahotak data:
```ts
// Import module
import { asahotak } from 'scraper/scraper-games'

const data = await  asahotak()
console.log(data) // JSON
```
[Documentation](https://ReyEndymion.github.io/scraper/modules/_ReyEndymion_scraper_games.html)