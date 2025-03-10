import got from 'got'
import * as cheerio from 'cheerio'
import { 
    earthQuare, earthQuareNow, earthQuareNowSchema, earthQuareRealtime, 
    earthQuareRealtimeSchema, earthQuareSchema 
} from '../types/index.js'

export async function earthQuare (): Promise<earthQuare[]> {
    const html = await got('https://www.bmkg.go.id/earthQuarebumi/earthQuarebumi-dirasakan.bmkg').text()
    const $ = cheerio.load(html)
    const results: earthQuare[] = []
    $('div.table-responsive > table.table > tbody > tr').each(function () {
        const el = $(this).find('td')
        const when = el.eq(1).text().split(' ')
        const date = when[0]
        const time = when[1]
        const locate = el.eq(2).text().split(' ')
        const latitude = locate[0]
        const longitude = locate[1]
        const magnitude = el.eq(3).text()
        const depth = el.eq(4).text()
        const location = el.eq(5).find('a').text().trim()
        const warning = el.eq(5).find('span.label').map(function () {
          return $(this).text().replace(/\\t/g, ' ').trim()
        }).toArray()
        results.push({
            date,
            time,
            latitude,
            longitude,
            magnitude,
            depth,
            location,
            warning
        })
    })

    return results.map((v) => earthQuareSchema.parse(v))
}

export async function earthQuareNow(): Promise<earthQuareNow[]> {
    const html = await got('https://www.bmkg.go.id/earthQuarebumi/earthQuarebumi-terkini.bmkg').text()
    const $ = cheerio.load(html)
    const results: earthQuareNow[] = []
    $('div.table-responsive > table.table > tbody > tr').each(function () {
      const el = $(this).find('td')
      const when = el.eq(1).text().split(' ')
      const date = when[0]
      const time = when[1]
      const latitude = el.eq(2).text().trim()
      const longitude = el.eq(3).text().trim()
      const magnitude = el.eq(4).text().trim()
      const depth = el.eq(5).text().trim()
      const location = el.eq(6).text().trim()
      results.push({
        date,
        time,
        latitude,
        longitude,
        magnitude,
        depth,
        location
      })
    })

    return results.map((v) => earthQuareNowSchema.parse(v))
}

export async function earthQuareRealtime (): Promise<earthQuareRealtime[]> {
    const html = await got('https://www.bmkg.go.id/earthQuarebumi/earthQuarebumi-realtime.bmkg').text()
    const $ = cheerio.load(html)
    const results: earthQuareRealtime[] = []
    $('table.table tbody tr').each(function () {
        const $td = $(this).find('td')
        const when = $td.eq(1).text().split(' ')
        const date = when[0]
        const time = when[1]
        const latitude = $td.eq(2).text()
        const longitude = $td.eq(3).text()
        const magnitude = $td.eq(4).text()
        const depth = $td.eq(5).text()
        const _location = $td.eq(6)
        const location = _location.find('a').text().split(',').map((v) => v.trim())
        const isConfirmed = /\(Confirmed\)/i.test(_location.text())
        results.push({
            date,
            time,
            latitude,
            longitude,
            magnitude,
            depth,
            location,
            isConfirmed
        })
    })
    return results.map((v) => earthQuareRealtimeSchema.parse(v))
}
