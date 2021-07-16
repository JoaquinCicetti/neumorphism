/**
 * This utility will help us to generate styles for our components
 *
 * Neumorphism
 *  -   Elements have two shadows: one light and one dark.
 *  -   Background colors must be the same (or very similar) as the background color of the parent element
 *  -   Rounded edges are a defining quality.
 *  -   Elements can have an optional subtle border to improve contrast and make the edges a bit sharper
 *
 * CSS:
 * box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color];
 *
 * Read:
 * https://css-tricks.com/neumorphism-and-css/
 */

import { Color, RGBAColor } from './Color';

const PX_UNIT = 2;
const BLUR_SCALE = 1.5;

interface Params {
    elevation: number;
    color: RGBAColor;
    inverted?: boolean;
}

export enum Shapes {
    CONVEX = 'Convex',
    CONCAVE = 'Concave',
    FLAT = 'Flat',
}

export const shapes = Object.values(Shapes);

type ShadowGenerator = (params: Params) => string;
type FontColorGenerator = (backgroundColor: RGBAColor) => RGBAColor;
type BackgroundColorGenerator = (brandColor: RGBAColor) => RGBAColor;
type BackgroundGradientGenerator = (brandColor: RGBAColor) => string;

/**
 *
 * Neumorphism is based on shadows
 * @param params elevation and container color
 * @returns css box shadow property.
 */
export const generateShadow: ShadowGenerator = (params) => {
    const { color, elevation, inverted } = params;

    const lighterColor = Color.fromRGBA(color).lighten(10).opacity(0.6).hex;
    const darkerColor = Color.fromRGBA(color).darken(10).opacity(0.6).hex;

    const offsetL = -1 * Math.abs(elevation) * PX_UNIT;
    const offsetD = Math.abs(elevation) * PX_UNIT;

    const blurRadius = Math.abs(elevation * BLUR_SCALE * PX_UNIT);

    const lightShadow = `${offsetL}px ${offsetL}px ${blurRadius}px ${lighterColor}`;
    const darkShadow = `${offsetD}px ${offsetD}px ${blurRadius}px ${darkerColor}`;

    return inverted ? `inset ${lightShadow}, inset ${darkShadow}` : `${lightShadow}, ${darkShadow}`;
};

export const generateReadableFontColor: FontColorGenerator = (rgbaColor) => {
    const bgColor = Color.fromRGBA(rgbaColor).complementary;

    if (bgColor.hsla.l <= 50) {
        return bgColor.lighten(50).rgba;
    }

    return bgColor.darken(50).rgba;
};

export const generateBackgroundColor: BackgroundColorGenerator = (rgbaColor) => {
    const color = Color.fromRGBA(rgbaColor).complementary;

    if (color.hsla.l >= 50) {
        return color.darken(50).desaturate(40).rgba;
    }

    return color.lighten(50).desaturate(40).rgba;
};

export const generateFlatBackground: BackgroundGradientGenerator = (rgbaColor) => {
    const hexColor = Color.fromRGBA(rgbaColor).shortHex;

    return `linear-gradient(0deg, ${hexColor}, ${hexColor})`;
};

export const generateConvexBackground: BackgroundGradientGenerator = (rgbaColor) => {
    const from = Color.fromRGBA(rgbaColor).darken(10);
    const to = Color.fromRGBA(rgbaColor).lighten(10);

    return `linear-gradient(-45deg, ${from.shortHex}, ${to.shortHex}`;
};

export const generateConcaveBackground: BackgroundGradientGenerator = (rgbaColor) => {
    const from = Color.fromRGBA(rgbaColor).darken(10);
    const to = Color.fromRGBA(rgbaColor).lighten(20);

    return `linear-gradient(135deg, ${from.shortHex}, ${to.shortHex}`;
};
