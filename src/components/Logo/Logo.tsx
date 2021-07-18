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
import './Logo.scss';

interface LogoProps {
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

export const Logo: React.FC<LogoProps> = (props) => {
    const { shape } = props;
    const { theme } = useTheme();

    const accentColor = Color.fromRGBA(theme.accent);
    const bgColor = Color.fromRGBA(theme.background);

    const boxShadow = generateShadow({ color: bgColor.rgba, elevation: 2 });

    const background = getBackground(shape, bgColor.rgba);
    const animatedStyles = useSpring({
        to: {
            background,
            boxShadow,
            color: accentColor.shortHex,
        },
    });
    return (
        <animated.div className="logo" style={animatedStyles}>
            <h3 className='title'>Neumorphism</h3>
            <small className='subtitle'>0xfafafa</small>
        </animated.div>
    );
};
