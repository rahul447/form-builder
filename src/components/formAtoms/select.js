import { memo } from 'react';
import styled from 'styled-components'
import Label from './label';
import { CommonInputStyle } from "./common";

const SelectBox = styled.select`
    color:  ${props => props.theme.colors.text};
    border: 1px solid ${props => props.valid ? props.theme.colors.error : props.theme.colors.text};
    display: block;
    ${CommonInputStyle}
`;

function TextArea({ metadata, setField, path, index }) {
    const { label, dataType, value, placeholder, validation, options } = metadata;
    return (
        <div>
            <Label label={label}></Label>
            <SelectBox
                type={dataType}
                placeholder={placeholder}
                value={value || ''}
                required={validation.required}
                onChange={(e) => setField(e.target.value, index, path)}
            >
                <option>{placeholder}</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </SelectBox>
        </div>
    );
}

export default memo(TextArea)