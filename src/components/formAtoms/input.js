import { memo } from "react"
import styled from 'styled-components'
import Label from './label';
import { Error, CommonInputStyle } from "./common";
import { debounce } from "../../utils/debounce";

const Input = styled.input`
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.valid ? props.theme.colors.error : props.theme.colors.text};
  ${CommonInputStyle}
`;

function InputText(props) {
    const { label, dataType, value, placeholder, errorMessage, valid, name, handleChange, path, index } = props;
    
    return (
        <div>
            <Label label={label}></Label>
            <Input
                valid={valid}
                type={dataType || 'text'}
                placeholder={placeholder}
                value={value || ''}
                onChange={(e) => debounce(handleChange(e.target.value, index, path))}
                name={name}
            />
            {valid && <Error>{errorMessage}</Error>}
        </div>
    );
}

export default memo(InputText);