import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, #f8049c, #fdd54f);
  border-bottom: 3px solid #fdd54f;
`;

// 自定義Html元素樣式
const Menu = styled.nav`
  display: block;
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid #fdd54f;
  background: white;
  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    margin: auto 0 auto auto;
    border-bottom: none;
    position: relative;
    width: initial;
  }
`;

// 自定義React元件樣式
const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${props => (props.isactive === 'true' ? '900' : 'normal')};
  color: black;
`;

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <HeaderWrapper>
      <Menu>
        <StyledLink to='/' isactive={pathname === '/' ? 'true' : 'false'}>
          首頁
        </StyledLink>
        <StyledLink
          to='/login'
          isactive={pathname === '/login' ? 'true' : 'false'}
        >
          登入
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  );
};
