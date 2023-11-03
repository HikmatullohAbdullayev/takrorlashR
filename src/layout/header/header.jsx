import React from "react";
import { Container } from "../../config/global-style";
import logoImg from "../../assets/img/logo.png";
import {
  HeaderContent,
  Logo,
  Nav,
  NavLi,
  NavLink,
  NavUl,
} from "./style-header";
export const Header = () => {
  return (
      <Container>
        <HeaderContent>
          <Logo>
            <img src={logoImg} alt="logo" />
          </Logo>
          <Nav>
            <NavUl>
              <NavLi>
                <NavLink href="#"> BUY</NavLink>
              </NavLi>
              <NavLi>
                <NavLink href="#"> RENT</NavLink>
              </NavLi>
              <NavLi>
                <NavLink href="#"> ABOUT</NavLink>
              </NavLi>
              <NavLi>
                <NavLink href="#"> STORIES</NavLink>
              </NavLi>
              <NavLi>
                <NavLink href="#"> CONTACTS</NavLink>
              </NavLi>
            </NavUl>
          </Nav>
        </HeaderContent>
      </Container>
  );
};
