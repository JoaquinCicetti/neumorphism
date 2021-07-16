import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useTheme } from '../../theme/useTheme';
import { Color, RGBAColor } from '../../utils/Color';
import {
    generateFlatBackground,
    generateShadow,
    generateConvexBackground,
    Shapes,
    generateConcaveBackground,
} from '../../utils/colorGeneration';
import './Brand.scss';

interface BrandProps {
    shape: string;
}

const getBackground = (shape: string, bgColor: RGBAColor): string => {
    switch (shape) {
        case Shapes.FLAT:
            return generateFlatBackground(bgColor);

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
    const { shape } = props;
    const { theme } = useTheme();

    const brandColor = Color.fromRGBA(theme.brand);
    const bgColor = Color.fromRGBA(theme.background);

    const boxShadow = generateShadow({ color: bgColor.rgba, elevation: 2 });

    const background = getBackground(shape, bgColor.rgba);
    const animatedStyles = useSpring({
        to: {
            background,
            boxShadow,
            color: brandColor.shortHex,
        },
    });
    return (
        <animated.div className="brand" style={animatedStyles}>
            <h3 className='title'>Neumorphism</h3>
            <small className='subtitle'>0xfafafa</small>
        </animated.div>
    );
};
