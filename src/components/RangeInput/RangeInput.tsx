import React from 'react';
import { useTheme } from '../../theme/useTheme';
import { Color } from '../../utils/Color';
import { generateShadow } from '../../utils/colorGeneration';
import './RangeInput.scss';

interface RangeInputProps {
    max: number;
    min: number;
    step?: number;
    value: number;
    onChange: (value: number) => void;
}
export const RangeInput: React.FC<RangeInputProps> = (props) => {
    const { value, max, min, step = 1 } = props;
    const { theme } = useTheme();

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const newValue = parseInt(target.value)
        props.onChange(newValue);
    };

    const boxShadow = generateShadow({ color: theme.background, elevation: 2, inverted: false })
    const invertedBoxShadow = generateShadow({ color: theme.background, elevation: 1, inverted: true })

    const containerStyles = {
        borderColor: Color.fromRGBA(theme.brand).shortHex,
    }

    const inputStyles = {
        boxShadow: invertedBoxShadow,
        background: Color.fromRGBA(theme.background).shortHex,
        '--bg': Color.fromRGBA(theme.text).shortHex,
        '--boxShadow': boxShadow
    };

    return <div className='rangeInput' style={containerStyles}>
        <input
            type='range'
            onChange={onChange}
            value={value}
            style={inputStyles}
            max={max}
            min={min}
            step={step}
        />
    </div>
};
