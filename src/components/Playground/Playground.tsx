import React from 'react';
import { useTheme } from '../../theme/useTheme';
import { Color, RGBAColor } from '../../utils/Color';
import { generateColorFromString, shapes } from '../../utils/colorGeneration';
import { Logo } from '../Logo/Logo';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import { Container } from '../Container/Container';
import { RadioButton } from '../RadioButton/RadioButton';
import { Slider } from '../Slider/Slider';
import { TextInput } from '../TextInput/TextInput';
import './Playground.scss';
import useTimeout from '../../utils/useTimeout';

const defaultShape = shapes[2];
export const Playground = () => {
    const { theme, setAccent: setBrand } = useTheme();

    const [elevation, setElevation] = React.useState<number>(1);
    const [shape, setShape] = React.useState<string>(defaultShape);
    const [text, setText] = React.useState<string>('Some text...');

    const onElevationChange = (newElevation: number) => {
        setElevation(newElevation);
    };

    const onColorChange = (newColor: RGBAColor) => {
        setBrand(Color.fromRGBA(newColor).rgba);
    };

    const onTextChange = (newText: string): void => {
        setText(newText)


    }

    const onShapeChange = (newShape: string) => {
        setShape(newShape);
    };

    const appStyles = {
        background: Color.fromRGBA(theme.background).shortHex,
        color: Color.fromRGBA(theme.text).shortHex,
    };


    const updateTheme = (newText: string): void => {
        const newAccent: RGBAColor = generateColorFromString(newText)
        setBrand(newAccent)
    }

    useTimeout(updateTheme, text, 300)

    return (
        <div className="playground" style={appStyles}>

            <Logo shape={shape} />
            <Container elevation={3} inverted >

                <p>
                    <b>Radio button</b>
                    <small>- Change the brand shape -</small>
                </p>
                <RadioButton options={shapes} value={shape} onChange={onShapeChange} />

                <br /><br />

                <p>
                    <b>Color picker</b>
                    <small>- Choose an accent -</small>
                </p>
                <ColorPicker value={theme.accent} onChange={onColorChange} />

                <br /><br />

                <p>
                    <b>Text input</b>
                    <small>- Type to generate a new theme -</small>
                </p>
                <TextInput value={text} onTextChange={onTextChange} />

                <br /><br />

                <p>
                    <b>Slider</b>
                    <small>- Change the elevation of the container shadows -</small>
                </p>
                <Slider step={1} min={0} max={5} value={elevation} onChange={onElevationChange} />

                <br /><br />

                <b>Container</b>
                <Container elevation={elevation} isFake />

                <br /><br />

                <b>Inverted container:</b>
                <Container elevation={elevation} inverted isFake />
            </Container>
        </div >
    );
};
