import { describe, it } from 'node:test';
import assert from 'node:assert';
import { earthQuake, earthQuakeNow, earthQuakeRealtime, tsunami } from '../index.js';
describe('BMKG', () => {
    describe('earthQuakebumi', () => {
        it('Se siente el terremoto', async () => {
            const data = await earthQuake();
            assert.ok(data.length > 1);
        });
        it('Último terremoto (M ≥ 5.0)', async () => {
            const data = await earthQuakeNow();
            assert.ok(data.length > 1);
        });
        it('terremoto en tiempo real', async () => {
            const data = await earthQuakeRealtime();
            assert.ok(data.length > 1);
        });
    });
    it('Tsunami', async () => {
        const data = await tsunami();
        assert.ok(data.length > 1);
    });
});
