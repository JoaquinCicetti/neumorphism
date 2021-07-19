import React from 'react';
import { useTheme } from '../../theme/useTheme';
import { Color } from '../../utils/Color';
import { generateShadow } from '../../utils/colorGeneration';
import { BiCaretDown as DownIcon, BiCaretUp as UpIcon } from 'react-icons/bi'
import './NumericInput.scss';

interface NumericInputProps {
    value: number
    max: number
    min: number
    onNumberChange: (value: number) => void;
}
export const NumericInput: React.FC<NumericInputProps> = (props) => {
    const { value, onNumberChange } = props;
    const { theme } = useTheme();

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const newValue = Number(target.value)

        onNumberChange(newValue);
    };

    const onPressDown = () => {

        onNumberChange(value - 1);
    };

    const onPressUp = () => {

        onNumberChange(value + 1);
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


    return <div className='numericInput'>
        <Button type='DOWN' onPress={onPressDown} />
        < input
            type='number'
            onChange={onChange}
            value={value}
            style={inputStyles}
        />
        <Button type='UP' onPress={onPressUp} />
    </div>
};



interface ButtonProps {
    type: 'UP' | 'DOWN'
    onPress: () => void
}

const Button: React.FC<ButtonProps> = props => {
    const { theme } = useTheme();
    const onClick = (event: React.FormEvent<HTMLButtonElement>) => {
        props.onPress()
    }

    const boxShadow = generateShadow({
        color: theme.background,
        elevation: 3
    })

    const inputStyles = {
        boxShadow,
        background: Color.fromRGBA(theme.background).shortHex,
        color: Color.fromRGBA(theme.text).shortHex
    }

    const className = `button ${props.type === 'UP' ? 'right' : 'left'}`
    return <button className={className} onClick={onClick} style={inputStyles}>
        {
            props.type === 'UP'
                ? <UpIcon />
                : <DownIcon />
        }
    </button>
}