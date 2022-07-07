import styled, { css } from 'styled-components';


export const Error = styled.div`
    color: ${props => props.theme.colors.error};
`;


export const CommonInputStyle = css`
    background: transparent;
    padding: 1em 0;
    width: 100%;
    border-radius: 5px;
`;