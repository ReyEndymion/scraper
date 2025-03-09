import got from 'got';
import * as cheerio from 'cheerio';
import { parseFileSize } from './util.js';
import { DEFAULT_HEADERS } from './constant.js';
import { SfilemobiSearchArgsSchema, SfilemobiSearchSchema } from '../types/sfilemobi-search.js';
export default async function sfilemobiSearch(query, page = 1) {
    SfilemobiSearchArgsSchema.parse(arguments);
    const data = await got('https://sfile.mobi/search.php', {
        searchParams: {
            q: query,
            page
        },
        headers: {
            ...DEFAULT_HEADERS
        }
    }).text();
    const $ = cheerio.load(data);
    const results = [];
    $('div > div > div.list').each((_, el) => {
        var _a, _b;
        const $el = $(el);
        const url = $el.find('a').attr('href');
        const filename = $el.find('a').text();
        const icon = $el.find('img').attr('src');
        const type = (_a = /\/smallicon\/(.*?)\.svg/.exec(icon)) === null || _a === void 0 ? void 0 : _a[1];
        const filesizeH = (_b = /\((.*?)\)/.exec($el.text())) === null || _b === void 0 ? void 0 : _b[1];
        const filesize = filesizeH && parseFileSize(filesizeH);
        if (filename && url) {
            results.push({
                url,
                filename,
                icon: icon,
                type: type,
                filesizeH: filesizeH,
                filesize: filesize
            });
        }
    });
    return SfilemobiSearchSchema.parse(results);
}
