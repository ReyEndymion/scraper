# Scraper 
Scraper es una biblioteca NodeJS con muchas características incorporadas que pueden obtener datos de los sitios web que usan solo HTTP. Está diseñado para ser simple y fácil de usar. Esta inspirado en el scraper de [reyendymion](https://github.com/reyendymion/scraper)

## Instalación
Instale la versión estable de Scraper:
```sh
npm i @ReyEndymion/scraper
```

Instale la última versión de GitHub (no recomendado)
```sh
npm i github:ReyEndymion/scraper
```

## Uso 
Aquí hay un ejemplo de usar SaveFrom para descargar el video de Facebook
```ts
import { savefrom } from '@ReyEndymion/scraper'

const data = await savefrom('https://fb.watch/9WktuN9j-z/')
console.log(data) // JSON
```
[Documentación](https://ReyEndymion.github.io/scraper/)

## Características
- Simple y fácil de usar
- tener muchas características
- Puede instalar el paquete que usará

## Packages
- [BMKG Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-bmkg/) -- Contiene scrapers del sitio web [BMKG](https://www.bmkg.go.id/)
- [Facebook Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-facebook/) -- Para descargar video desde [Facebook](https://www.facebook.com/)
- [Games data Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-games/) -- Obtener datos de [bases de datos de juegos](https://github.com/ReyEndymion/database/tree/master/games)
- [GoogleIt Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-googleit/) -- Scraper para obtener datos de búsqueda de [Google](https://www.google.com) Search
- [Images Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-images/) -- Scraper to find pictures/images 
- [Instagram Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-instagram/) -- Para descargar Video e historia desde [Instagram](https://www.instagram.com/) 
- [Lyric Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-lyric/) -- Scraper Para encontrar la letra de la canción
- [Mediafire Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-mediafire/) -- Para descargar contenido publicado en [Mediafire](https://www.mediafire.com/)
- [News Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-news/) -- News scraper de sitios de noticias latinoamericanos
- [Primbon Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-primbon/) -- Scraper para Horóscopo
- [Savefrom Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-savefrom/) -- Scraper Para obtener datos de [Savefrom](https://savefrom.net/)
- [Sfile.mobi Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-sfilemobi/) --  Scraper para descargar contenido publicado en [Sfile.mobi](https://sfile.mobi/) 
- [Snapsave Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-snapsave/) --  Scraper para descargar contenido publicado en [Snapsave](https://snapsave.app/)
- [Text Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-texts/) -- Texts scraper de textos o recuperador de datos de textos desde [texts databases](https://github.com/ReyEndymion/database/tree/master/kata-kata)
- [Tiktok Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-tiktok/) -- Para descargar video [Tiktok](https://www.tiktok.com/)
- [Twitter Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-twitter/) -- Para descargar video [X](https://x.com/)
- [Wikipedia Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-wikipedia/) --  Scraper para descargar contenido publicado en [Wikipedia](https://www.wikipedia.org/)
- [Youtube Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-youtube/) -- Para descargar video [Youtube](https://www.youtube.com/)
- [Others Scraper](https://github.com/ReyEndymion/scraper/tree/master/packages/scraper-others/) -- Otros, cine, acordes, juegos gratis, horario de televisión, kbbi, código postal
- [Scraper](#scraper) -- Todo en un scraper

## Contribuya
Si encuentra un error o tiene una solicitud de función, abra un problema en nuestro repositorio de GitHub.

Agradecemos las contribuciones de la comunidad.Si desea contribuir, descarge el repositorio y envíe una solicitud de extracción.

## Licencia
Scraper tiene licencia bajo GPL-3.0-or-later. Ver [LICENCIA](LICENSE) Para más información.