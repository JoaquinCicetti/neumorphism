import { validateNumber, validateRange, validateWithKey } from './';

export type RGBAColor = {
    r: number;
    g: number;
    b: number;
    a?: number;
};

export type HSLColor = {
    h: number;
    s: number;
    l: number;
};

/**
 * All values r, g, b & a must be between [0, 255]
 */
export class Color {
    constructor(
        private readonly r: number,
        private readonly g: number,
        private readonly b: number,
        private readonly a: number
    ) {}

    static fromRGBA(color: RGBAColor): Color {
        return new Color(color.r, color.g, color.b, color.a ?? 255);
    }

    static fromHEX(hex: string): Color {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex);

        if (result === null) throw new TypeError(`Invalid hex ${hex}`);
        return new Color(
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16),
            parseInt(result[4] ?? 'FF', 16)
        );
    }

    static fromHSL(h: number, s: number, l: number): Color {
        // Must be fractions of 1
        const saturation = s / 100;
        const lightness = l / 100;
        const hue = h % 360;

        const c = (1 - Math.abs(2 * lightness - 1)) * saturation;
        const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
        const m = lightness - c / 2;
        let r = 0,
            g = 0,
            b = 0;

        if (0 <= hue && hue < 60) {
            r = c;
            g = x;
            b = 0;
        } else if (60 <= hue && hue < 120) {
            r = x;
            g = c;
            b = 0;
        } else if (120 <= hue && hue < 180) {
            r = 0;
            g = c;
            b = x;
        } else if (180 <= hue && hue < 240) {
            r = 0;
            g = x;
            b = c;
        } else if (240 <= hue && hue < 300) {
            r = x;
            g = 0;
            b = c;
        } else if (300 <= hue && hue < 360) {
            r = c;
            g = 0;
            b = x;
        }

        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);

        return new Color(r, g, b, 255);
    }

    get hex(): string {
        let r = this.r.toString(16);
        let g = this.g.toString(16);
        let b = this.b.toString(16);
        let a = this.a.toString(16);

        if (r.length === 1) r = '0' + r;
        if (g.length === 1) g = '0' + g;
        if (b.length === 1) b = '0' + b;
        if (a.length === 1) a = '0' + a;

        return '#' + r + g + b + a;
    }

    /**
     * See
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color#value
     */
    get shortHex(): string {
        let r = this.r.toString(16);
        let g = this.g.toString(16);
        let b = this.b.toString(16);

        if (r.length === 1) r = '0' + r;
        if (g.length === 1) g = '0' + g;
        if (b.length === 1) b = '0' + b;

        return '#' + r + g + b;
    }

    get rgba(): RGBAColor {
        return {
            r: this.r,
            g: this.g,
            b: this.b,
            a: this.a,
        };
    }

    get hsl(): HSLColor {
        const r = this.r / 255;
        const g = this.g / 255;
        const b = this.b / 255;

        const cmin = Math.min(r, g, b);
        const cmax = Math.max(r, g, b);
        const delta = cmax - cmin;

        let h = 0,
            s = 0,
            l = 0;

        // calculate hue
        if (delta === 0) {
            h = 0;
        } else if (cmax === r) {
            h = ((g - b) / delta) % 6;
        } else if (cmax === g) {
            h = (b - r) / delta + 2;
        } else {
            h = (r - g) / delta + 4;
        }

        h = Math.round(h * 60);

        // make negative hues positive behind 360°
        if (h < 0) {
            h = h + 360;
        }

        // calculate lightness
        l = (cmax + cmin) / 2;

        // calculate saturation
        s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        return {
            h,
            s: Math.round(s * 100),
            l: Math.round(l * 100),
        };
    }

    get complementary(): Color {
        const { h, s, l } = this.hsl;
        return Color.fromHSL(h + 180, s, l);
    }

    lighten(percent: number): Color {
        validateRange(percent, 0, 100);

        const { h, s } = this.hsl;
        const l = Math.min(100, this.hsl.l + percent);

        return Color.fromHSL(h, s, l);
    }

    darken(percent: number): Color {
        validateRange(percent, 0, 100);

        const { h, s } = this.hsl;
        const l = Math.max(0, this.hsl.l - percent);

        return Color.fromHSL(h, s, l);
    }

    saturate(percent: number): Color {
        validateRange(percent, 0, 100);

        const { h, l } = this.hsl;
        const s = Math.min(100, this.hsl.s + percent);

        return Color.fromHSL(h, s, l);
    }

    desaturate(percent: number): Color {
        validateRange(percent, 0, 100);

        const { h, l } = this.hsl;
        const s = Math.max(0, this.hsl.s - percent);

        return Color.fromHSL(h, s, l);
    }

    static validateRGBA(color: unknown): asserts color is RGBAColor {
        validateWithKey('r', color);
        validateWithKey('g', color);
        validateWithKey('b', color);
        validateWithKey('a', color);
        const { r, g, b, a } = color;

        validateNumber(r);
        validateNumber(g);
        validateNumber(b);
        validateNumber(a);

        validateRange(r, 0, 255);
        validateRange(g, 0, 255);
        validateRange(b, 0, 255);
        validateRange(a, 0, 255);
    }

    static linearPickerFromHSL(saturation: number, lightness: number, alpha: number, amount: number): Array<RGBAColor> {
        const huedelta: number = Math.trunc(360 / amount);

        return [...new Array(amount)].map((_: any, index: number) => {
            const hue = index * huedelta;
            return Color.fromHSL(hue, saturation, lightness).rgba;
        });
    }
}
