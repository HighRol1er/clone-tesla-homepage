import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SideMenuList from './SideMenuList';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container> 
        <Link to="/">
          <img src='/images/tesla-logo.svg' alt=""width={130} height={24}/>
        </Link>

      <Menu>
      {cars && cars.map((model,i) => {
          const modelPath =model.toLowerCase().replace(/\s+/g, ''); //소문자변경 & 공백제거
          return (
            <Link to={`/${modelPath}`}>
              <div key={i}>{model}</div>
            </Link>
          );
        })}

      </Menu>

      <RightMenu>
        <Link to="/shop">Shop</Link>
        <Link to="/login">Account</Link>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)}/>
        </CloseWrapper>
        <SideMenuList />
      </BurgerNav>

    </Container>
    
  )
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top:0;
  left: 0;
  right: 0;;
  z-index: 1;

  img {
    cursor: pointer;
  }
`; 

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex:1;

  div {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media(max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  list-style: none;
  padding : 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translate(100%)'};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    font-weight: 600;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;

`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default Header