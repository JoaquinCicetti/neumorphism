import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useTheme } from '../../theme/useTheme';
import { Color, RGBAColor } from '../../utils/Color';
import {
    generateShadow,
    generateConvexBackground,
    Shapes,
    generateConcaveBackground,
} from '../../utils/colorGeneration';
import './Brand.scss';

interface BrandProps {
    elevation: number;
    shape: string;
}

const getBackground = (shape: string, bgColor: RGBAColor): string => {
    switch (shape) {
        case Shapes.FLAT:
            return Color.fromRGBA(bgColor).shortHex;

        case Shapes.CONVEX:
            return generateConvexBackground(bgColor);

        case Shapes.CONCAVE:
            return generateConcaveBackground(bgColor);

        default:
            console.warn('TODO: assert unreachable');
            break;
    }

    return '';
};

export const Brand: React.FC<BrandProps> = (props) => {
    const { elevation, shape } = props;
    const { theme } = useTheme();

    const brandColor = Color.fromRGBA(theme.brand);
    const bgColor = Color.fromRGBA(theme.background);

    const from = generateShadow({ color: bgColor.rgba, elevation: 0 });
    const to = generateShadow({ color: bgColor.rgba, elevation });

    const background = getBackground(shape, bgColor.rgba);
    const animatedStyles = useSpring({
        from: {
            background,
            boxShadow: from,
            color: brandColor.shortHex,
            borderColor: brandColor.shortHex,
        },
        to: {
            background,
            boxShadow: to,
            color: brandColor.shortHex,
            borderColor: brandColor.shortHex,
        },
    });
    return (
        <animated.div className="brand" style={animatedStyles}>
            MY BRAND
        </animated.div>
    );
};
