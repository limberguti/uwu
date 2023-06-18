import React, {useState} from 'react';
import logo from '../images/logoTemporal.png'
import { NavBarContainer, NavBarWrapper, IconLogo, Menu, MenuItem, MenuItemLink, IconLogoMobile } from './NavBar.elements';
import {FaBars, FaTimesCircle} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    const [click,setClick] = useState(false);
    
    const ChangeClick = () =>{
        setClick(!click);
    }; 
    return (
        <>   
        <NavBarContainer>
            <NavBarWrapper>
                <IconLogo>
                    <a><img src={logo}/></a>
                </IconLogo>

                <IconLogoMobile onClick={() => ChangeClick()}>
                    {click ? <FaTimesCircle/> : <FaBars/>}
                </IconLogoMobile>

                <Menu click = {click}>
                    <MenuItem onClick={() => ChangeClick()}>
                        <MenuItemLink><NavLink to='/'>INICIO</NavLink></MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={() => ChangeClick()}>
                        <MenuItemLink><NavLink to='/contact'>CONTACTO</NavLink></MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={() => ChangeClick()}>
                        <MenuItemLink><NavLink to='/about'>SOBRE NOSOTROS</NavLink></MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={() => ChangeClick()}>
                        <MenuItemLink><NavLink to='/login'>LOGIN</NavLink></MenuItemLink>
                    </MenuItem>
                </Menu>
            </NavBarWrapper>
        </NavBarContainer>
        </>
    );
}

export default NavBar;
