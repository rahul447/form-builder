import styled from 'styled-components'
import Label from './label';
import { debounce } from "../../utils/debounce";

const TextAreaBox = styled.textarea`
    background: transparent;
    border-radius: 4px;
    color:  ${props => props.theme.colors.text};
    padding: 1em 0;
    width: 100%;
    border: 1px solid ${props => props.valid ? props.theme.colors.error : props.theme.colors.text};
    resize: vertical;
`;

export default function TextArea({ metadata, setField, path, index }) {
    const { label, dataType, value, placeholder } = metadata;
    return (
        <div>
            <Label label={label}></Label>
            <TextAreaBox
                type={dataType}
                placeholder={placeholder}
                value={value || ''}
                onChange={(e) => debounce(setField(e.target.value, index, path))}
            />
        </div>
    );
}
