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
  background: #eee;
`;

// 自定義Html元素樣式
const Menu = styled.nav`
  display: flex;
  position: relative;
  width: initial;
  border-bottom: none;
  margin: auto 0 auto auto;
  background: none;
  left: initial;
  top: initial;
`;

// 自定義React元件樣式
const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(props) => (props.isactive === 'true' ? '900' : 'normal')} ;
`;

export const Header = () => {
  const { pathname } = useLocation();
  return <HeaderWrapper>
    <Menu>
      <StyledLink to='/' isactive={pathname === '/' ? 'true' : 'false'}>
        首頁
      </StyledLink>
      <StyledLink to='/login' isactive={pathname === '/login' ? 'true' : 'false'}>
        登入
      </StyledLink>
    </Menu>
  </HeaderWrapper>;
};

