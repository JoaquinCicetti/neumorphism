import React from 'react';
import { useTheme } from '../../theme/useTheme';
import { Color } from '../../utils/Color';
import { shapes } from '../../utils/colorGeneration';
import { Brand } from '../Brand/Brand';
import { Container } from '../Container/Container';
import { RadioButton } from '../RadioButton/RadioButton';
import './ShadowGenerator.scss';

const defaultShape = shapes[2];
export const ShadowGenerator = () => {
    const { theme, setBrand } = useTheme();

    const [elevation, setElevation] = React.useState<number>(1);
    const [shape, setShape] = React.useState<string>(defaultShape);

    const onElevationChange = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const newElevation = parseInt(target.value, 10);
        setElevation(newElevation);
    };

    const onColorChange = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const newColor = target.value;

        setBrand(newColor);
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
            <Brand elevation={elevation} shape={shape} />
            <RadioButton options={shapes} value={shape} onChange={onShapeChange} />

            <div className="field">
                <label>Brand color: </label>
                <input type="color" value={Color.fromRGBA(theme.brand).shortHex} onChange={onColorChange} />
            </div>

            <div className="field">
                <label>Elevation: </label>
                <input type="range" step={1} min={0} max={5} value={elevation} onChange={onElevationChange} />
            </div>

            <div>
                <Container elevation={elevation} />
                <Container elevation={elevation} inverted />
            </div>
        </div>
    );
};
