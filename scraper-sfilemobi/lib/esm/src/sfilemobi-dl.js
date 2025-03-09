import got from 'got';
import * as cheerio from 'cheerio';
import { DEFAULT_HEADERS } from './constant.js';
import { SfilemobidlArgsSchema, SfilemobidlSchema } from '../types/sfilemobi-dl.js';
export default async function sfilemobi(url) {
    var _a, _b, _c;
    SfilemobidlArgsSchema.parse(arguments);
    const data = await got(url, {
        headers: {
            ...DEFAULT_HEADERS
        }
    }).text();
    const $ = cheerio.load(data);
    const dlUrl = $('#download').attr('href');
    const filename = $('div.intro-container > img').attr('alt') || $('div.intro-container > h1').text();
    const icon = $('div.intro-container > img').attr('src');
    const type = (_a = /\/smallicon\/(.*?)\.svg/.exec(icon)) === null || _a === void 0 ? void 0 : _a[1];
    const $list = $('div.list');
    const mimetype = (_b = $list.eq(0).text().split('-')[1]) === null || _b === void 0 ? void 0 : _b.trim();
    const uploaded = (_c = $list.eq(2).text().split('Uploaded:')[1]) === null || _c === void 0 ? void 0 : _c.trim();
    const $upload = $list.eq(1).find('a');
    const uploadby = $upload.eq(0).text();
    const uploadbyUrl = $upload.eq(0).attr('href');
    const uploadon = $upload.eq(1).text();
    const uploadonUrl = $upload.eq(1).attr('href');
    const downloads = parseInt($list.eq(3).text().split('Downloads:')[1]);
    const result = {
        url: dlUrl,
        filename,
        icon,
        type,
        mimetype,
        uploaded,
        uploadby,
        uploadbyUrl,
        uploadon,
        uploadonUrl,
        downloads
    };
    return SfilemobidlSchema.parse(result);
}
