import { useState } from "react";
import { Box, ListItemButton, ListItemText, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "./dropdowns/AppsDropdown";

const Item = styled(ListItemButton)`
  border-radius: 100px;
  padding: 8px 18px 8px 14px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #f2f3f5 114.84%;
  }
`;

const NavItemText = styled(Typography)`
  color: var(--gray-gray-400, #56616b);
  text-align: center;
  font-family: "Work Sans", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const Icon = styled.img`
  font-size: 20px;
  width: 20px;
  height: 20px;
  background-color: transparent;
`;
interface SubmenuItems {
  title: string;
  description: string;
  icon: any;
}

interface NavbarItemProps {
  title: string;
  icon: any;
  submenu?: SubmenuItems[];
}

const NavbarItem = ({ title, icon, submenu }: NavbarItemProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      {submenu ? (
        <>
          <Item onClick={() => setShowDropdown(!showDropdown)}>
            <Icon src={icon} alt="icon" />
            <NavItemText>{title}</NavItemText>
          </Item>
          {showDropdown && <Dropdown submenu={submenu} />}
        </>
      ) : (
        <Item>
          <Icon src={icon} alt="icon" />
          <NavItemText>{title}</NavItemText>
        </Item>
      )}
    </>
  );
};

export default NavbarItem;
