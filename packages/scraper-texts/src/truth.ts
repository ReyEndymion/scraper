import got from 'got'
import { Truth, TruthSchema } from '../types/index.js'

export let truthjson: string[] = []
export default async function truth (): Promise<Truth> {
  if (!truthjson.length) {
    truthjson = await got(
      'https://raw.githubusercontent.com/reyendymion/database/master/kata-kata/truth.json'
    ).json()
  }
  return TruthSchema.parse(
    truthjson[Math.floor(truthjson.length * Math.random())]
  )
}
