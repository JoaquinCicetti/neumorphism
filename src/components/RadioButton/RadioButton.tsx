import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useTheme } from '../../theme/useTheme';
import { Color } from '../../utils/Color';
import { generateShadow } from '../../utils/colorGeneration';
import './RadioButton.scss';

interface RadioButtonProps {
    options: Array<string>;
    value: string;
    onChange: (value: string) => void;
}
export const RadioButton: React.FC<RadioButtonProps> = (props) => {
    const { value, options } = props;
    const { theme } = useTheme();

    const onSelect = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const newValue = target.value;
        props.onChange(newValue);
    };

    const containerStyles = {
        boxShadow: generateShadow({ color: theme.background, elevation: 2, inverted: true }),
    };

    // for grouping
    const radioButtonName = options.join('-');
    return (
        <div className="radio" style={containerStyles} onChange={onSelect}>
            {options.map((option, index) => {
                const key = `${option}-${index}`;

                return <Option key={key} value={option} isSelected={option === value} name={radioButtonName} />;
            })}
        </div>
    );
};

interface OptionProps {
    value: string;
    name: string;
    isSelected: boolean;
}

const Option: React.FC<OptionProps> = (props) => {
    const { value, name, isSelected } = props;
    const { theme } = useTheme();

    const selectedShadow = generateShadow({ color: theme.background, elevation: 0 });
    const unselectedShadow = generateShadow({ color: theme.background, elevation: 2 });

    const activeColor = Color.fromRGBA(theme.brand).shortHex;
    const inactiveColor = Color.fromRGBA(theme.text).shortHex;

    const animatedStyles = useSpring({
        boxShadow: isSelected ? selectedShadow : unselectedShadow,
        borderRadius: isSelected ? '20px' : '50px',
        color: isSelected ? activeColor : inactiveColor,
        fontWeight: isSelected ? 500 : 400,
    });

    const id = `radiobutton-${value}`;
    
    return (
        <animated.label style={animatedStyles} className={'option'} htmlFor={id}>
            <input id={id} type="radio" aria-label={value} value={value} name={name} />
            {value}
        </animated.label>
    );
};

// const color = new Color(174, 174, 192, 1)
// const selectedShadow = generateShadow({color: color.rgba, elevation: 0})
// //'0px 0px 0px rgba(255, 255, 255, 0.5), 0px 0px 0px rgba(174, 174, 192, 0.2), inset -0px -0px 0px rgba(0, 0, 0, 0.1), inset 0px 0px 0px #FFFFFF';

// const unselectedShadow = generateShadow({color: color.rgba, elevation: 2})
// //'-5px -5px 5px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(174, 174, 192, 0.2), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px #FFFFFF';
