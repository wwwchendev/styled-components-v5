import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background: #eee;
`;

export const Header = () => {
  return <HeaderWrapper>
    <Link to='/'>首頁</Link>
    <Link to='/login'>登入</Link>
  </HeaderWrapper>;
};

