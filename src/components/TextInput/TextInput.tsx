import React from 'react';
import { useTheme } from '../../theme/useTheme';
import { Color } from '../../utils/Color';
import { generateShadow } from '../../utils/colorGeneration';
import './TextInput.scss';

interface TextInputProps {
    value: string
    onTextChange: (value: string) => void;
}
export const TextInput: React.FC<TextInputProps> = (props) => {
    const { value, onTextChange } = props;
    const { theme } = useTheme();

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const newValue = target.value

        onTextChange(newValue);
    };

    const boxShadow = generateShadow({
        color: theme.background,
        elevation: 4,
        inverted: true
    })

    const inputStyles = {
        boxShadow,
        background: Color.fromRGBA(theme.background).shortHex,
        color: Color.fromRGBA(theme.text).shortHex,
        '--border': Color.fromRGBA(theme.accent).shortHex
    }


    return <input
        type='text'
        onChange={onChange}
        value={value}
        style={inputStyles}
        className='textInput'
    />
};
