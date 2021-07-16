import React from 'react';
import { useTheme } from '../../theme/useTheme';
import { Color, RGBAColor } from '../../utils/Color';
import { shapes } from '../../utils/colorGeneration';
import { Brand } from '../Brand/Brand';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import { Container } from '../Container/Container';
import { RadioButton } from '../RadioButton/RadioButton';
import { RangeInput } from '../RangeInput/RangeInput';
import './ShadowGenerator.scss';

const defaultShape = shapes[2];
export const ShadowGenerator = () => {
    const { theme, setBrand } = useTheme();

    const [elevation, setElevation] = React.useState<number>(1);
    const [shape, setShape] = React.useState<string>(defaultShape);

    const onElevationChange = (newElevation: number) => {
        setElevation(newElevation);
    };

    const onColorChange = (newColor: RGBAColor) => {
        setBrand(Color.fromRGBA(newColor).shortHex);
    };

    const onShapeChange = (newShape: string) => {
        setShape(newShape);
    };

    const appStyles = {
        background: Color.fromRGBA(theme.background).shortHex,
        color: Color.fromRGBA(theme.text).shortHex,
    };

    return (
        <div className="shadowGenerator" style={appStyles}>

            <Brand shape={shape} />
            <Container elevation={1} inverted >

                <b>Radio button</b>
                <RadioButton options={shapes} value={shape} onChange={onShapeChange} />

                <br /><br />

                <b>Color picker</b>
                <ColorPicker value={theme.brand} onChange={onColorChange} />

                <br /><br />

                <b>Slider:</b>
                <RangeInput step={1} min={0} max={5} value={elevation} onChange={onElevationChange} />

                <br /><br />

                <b>Container:</b>
                <Container elevation={elevation} isFake />

                <br /><br />

                <b>Inverted container:</b>
                <Container elevation={elevation} inverted isFake />
            </Container>
        </div >
    );
};
