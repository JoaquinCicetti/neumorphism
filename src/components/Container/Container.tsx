import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useTheme } from '../../theme/useTheme';
import { Color } from '../../utils/Color';
import { generateShadow } from '../../utils/colorGeneration';
import './Container.scss';

interface ContainerProps {
    elevation: number
    inverted?: boolean
    className?: string
    isFake?: boolean
}

export const Container: React.FC<ContainerProps> = (props) => {
    const { elevation, inverted, isFake } = props;
    const { theme } = useTheme();

    const bgColor = Color.fromRGBA(theme.background);
    const fontColor = Color.fromRGBA(theme.text);

    const from = generateShadow({ color: bgColor.rgba, inverted, elevation: 0 });
    const to = generateShadow({ color: bgColor.rgba, elevation, inverted });

    const animatedStyles = useSpring({
        from: {
            boxShadow: from,
            background: bgColor.shortHex,
            borderColor: bgColor.shortHex,
            color: fontColor.shortHex,
        },
        to: {
            boxShadow: to,
            background: bgColor.shortHex,
            borderColor: bgColor.shortHex,
            color: fontColor.shortHex,
        }
    });

    const className = props.className
        ? `container ${props.className}`
        : 'container'

    return (
        <animated.div style={animatedStyles} className={className}>
            {
                isFake
                    ? <span className="code">
                        <b>box-shadow:</b> {to}
                    </span>
                    : props.children
            }
        </animated.div>
    );
};
