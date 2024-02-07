import { useState } from 'react';
import styled from 'styled-components';
import { Input } from '@/components/common';

// 繼承了Input元件的樣式，並在此基礎上添加了指定的樣式。
const PasswordInputStyled = styled(Input)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const PasswordInput = props => {
  const [showPassword, setShowPassword] = useState(false);
  return <PasswordInputStyled {...props} />;
};
