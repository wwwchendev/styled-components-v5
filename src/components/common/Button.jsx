import styled, { css } from 'styled-components';

export const Button = styled.button`
  color: white;
  background: ${props =>
    props.$secondary ? props.theme.secondaryColor : props.theme.primaryColor};
  font-weight: bold;
  /* padding: ${props => (props.large ? '16px' : '8px')}; */
  ${p =>
    p.$large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
  &:disabled {
    background: #eee;
    color: #666;
    transform: initial;
  }
`;
