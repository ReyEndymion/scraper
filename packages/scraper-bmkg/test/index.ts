import { describe, it } from 'node:test'
import assert from 'node:assert'
import {
    earthQuare,
    earthQuareNow,
    earthQuareRealtime,
    tsunami
} from '../index.js'

describe('BMKG', () => {
    describe('earthQuarebumi', () => {
        it('earthQuare dirasakan', async () => {
            const data = await earthQuare()
            assert.ok(data.length > 1)
        })

        it('earthQuarebumi Terkini (M ≥ 5.0)', async () => {
            const data = await earthQuareNow()
            assert.ok(data.length > 1)
        })

        it('earthQuarebumi realtime', async () => {
            const data = await earthQuareRealtime()
            assert.ok(data.length > 1)
        })
    })

    it('Tsunami', async () => {
        const data = await tsunami()
        assert.ok(data.length > 1)
    })
})