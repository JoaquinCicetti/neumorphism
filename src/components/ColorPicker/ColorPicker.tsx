import React from 'react';
import { useTheme } from '../../theme/useTheme';
import { Color, RGBAColor } from '../../utils/Color';
import { generateShadow } from '../../utils/colorGeneration';
import './ColorPicker.scss';

interface ColorPickerProps {
    value: RGBAColor;
    onChange: (value: RGBAColor) => void;
}
export const ColorPicker: React.FC<ColorPickerProps> = (props) => {
    const { value } = props;
    const { theme } = useTheme();

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const newValue = Color.fromHEX(target.value).rgba
        props.onChange(newValue);
    };

    const boxShadow = generateShadow({ color: theme.background, elevation: 1, inverted: false })
    const invertedBoxShadow = generateShadow({ color: theme.background, elevation: 1, inverted: true })

    const containerStyles = {
        boxShadow: invertedBoxShadow,
    }

    const inputStyles = {
        background: Color.fromRGBA(theme.background).shortHex,
        '--bg': Color.fromRGBA(theme.background).shortHex,
        '--boxShadow': boxShadow,
    };


    return <div className='colorPicker' style={containerStyles}>
        <input
            type="color"
            onChange={onChange}
            value={Color.fromRGBA(value).shortHex}
            style={inputStyles}
        />
    </div>
};
