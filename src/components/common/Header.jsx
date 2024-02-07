import { useState } from 'react';
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
  display: ${props => (props.open ? 'block' : 'none')};
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

// 漢堡選單
const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  cursor: pointer;
  > span {
    display: block;
    height: 3px;
    background: #000;
    margin: 5px 0;
    width: 100%;
  }
  @media (min-width: 768px) {
    display: none;
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
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderWrapper>
      <MobileMenuIcon
        onClick={() => {
          setMenuOpen(prev => !prev);
        }}
      >
        <span />
        <span />
        <span />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
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
