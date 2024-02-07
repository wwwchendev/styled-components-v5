import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// 簡化樣式化元件的內部代碼: 將樣式邏輯分離到單獨函數中
const largeStyles = ({ large }) => {
  if (large) {
    return css`
      padding: 10px;
      border-radius: 5px;
      font-size: 1.5em;
    `;
  } else {
    return css`
      padding: 8px;
      border-radius: 4px;
      font-size: 1em;
    `;
  }
};

export const Button = styled.button`
  color: white;
  background: ${props =>
    props.$secondary ? props.theme.secondaryColor : props.theme.primaryColor};
  font-weight: bold;
  /* padding: ${props => (props.large ? '16px' : '8px')}; */
  /* ${props =>
    props.$large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `} */
  ${largeStyles}
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

// 使用propTypes實現類型安全
// 在開發過程中捕獲潛在的類型錯誤，從而提高代碼的健壯性和可維護性。
Button.propTypes = {
  large: PropTypes.bool,
  secondary: PropTypes.bool,
};
