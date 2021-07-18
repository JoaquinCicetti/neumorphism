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
        boxShadow: generateShadow({ color: theme.background, elevation: 4, inverted: true }),
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
    const unselectedShadow = generateShadow({ color: theme.background, elevation: 3 });

    const activeColor = Color.fromRGBA(theme.accent).shortHex;
    const inactiveColor = Color.fromRGBA(theme.text).shortHex;

    const animatedStyles = useSpring({
        to: {
            boxShadow: isSelected ? selectedShadow : unselectedShadow,
            color: isSelected ? activeColor : inactiveColor,
        },
    });

    const activeIndicatorStyles = useSpring({
        to: {
            width: isSelected ? '32px' : '0px',
            borderColor: activeColor
        },
    });

    const id = `radiobutton-${value}`;

    return (
        <animated.label style={animatedStyles} className={'option'} htmlFor={id}>
            <input id={id} type="radio" aria-label={value} value={value} name={name} />
            {isSelected && <animated.div style={activeIndicatorStyles} className='activeIndicator' />}
            <span>
                {value}
            </span>
        </animated.label>
    );
};
