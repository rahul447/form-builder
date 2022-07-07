import { Fragment } from 'react';
import styled from 'styled-components'

const LabelText = styled.label`
    align-items: center;
    padding: 0.5em 0;
    display: inline-block;
`;

export default function Label({ label }) {
    return (
        <Fragment>
            <LabelText>{label}</LabelText>
        </Fragment>
    );
}
