import { useState } from 'react';
import styled from 'styled-components';
import { Input } from '@/components/common';

const PasswordInputWrapper = styled.div`
  display: flex;
`;

// 繼承了Input元件的樣式，並在此基礎上添加了指定的樣式。
const PasswordInputStyled = styled(Input).attrs(({ $showPassword }) => ({
  type: $showPassword ? 'text' : 'password',
  placeholder: '密碼',
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ToggleButton = styled.div`
  height: 40px;
  min-width: 60px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  justify-content: center;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: #fff;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: black;
`;

export const PasswordInput = props => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyled {...props} $showPassword={showPassword} />
        <ToggleButton
          onClick={() => {
            setShowPassword(p => !p);
          }}
        >
          {showPassword ? '隱藏' : '顯示'}
        </ToggleButton>
      </PasswordInputWrapper>
    </>
  );
};
