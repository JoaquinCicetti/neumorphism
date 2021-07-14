import { Color } from './Color';

/**
 * Unified colors
 */
describe('Color', () => {
    it('parses rgba from hex', async () => {
        const color = Color.fromHEX('#fafafafa');

        const { r, g, b, a } = color.rgba;

        expect(r).toBeCloseTo(250);
        expect(g).toBeCloseTo(250);
        expect(b).toBeCloseTo(250);
        expect(a).toBeCloseTo(250);
    });

    it('parses hex from rgba', async () => {
        const color = Color.fromRGBA({ r: 101, g: 41, b: 41, a: 250 });

        expect(color.hex).toBe('#652929fa');
    });

    it('parses rgba from hex without alpha', async () => {
        const color = Color.fromHEX('#fafafa');
        expect(color.rgba.a).toBeCloseTo(255);
    });

    it('parses hex from rgba without alpha', async () => {
        const color = Color.fromRGBA({ r: 44, g: 157, b: 255 });

        expect(color.hex).toBe('#2c9dffff');
    });

    it('parses hsl from rgba without alpha', async () => {
        const color = Color.fromRGBA({ r: 44, g: 157, b: 255 });
        
        const { h, s, l} = color.hsl
        
        expect(h).toBe(208);
        expect(s).toBe(100);
        expect(l).toBe(59);
    });
});
