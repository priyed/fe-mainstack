import { useState, useRef } from "react";
import { Box, ListItemButton, ListItemText, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "./dropdowns/AppsDropdown";

const Item = styled(NavLink)`
  font-family: "Work Sans", sans-serif;
  color: var(--gray-gray-400, #56616b);
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.4px;
  border-radius: 100px;
  padding: 8px 18px 8px 14px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #f2f3f5 114.84%;
  }

  &.active {
    border-radius: 100px;
    background: var(--black-black-300, #131316);
    color: var(--white-white-100, #fff);
  }
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
  to: string;
  submenu?: SubmenuItems[];
}

const NavbarItem = ({ title, icon, to, submenu }: NavbarItemProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropDownFocus = (state: boolean) => {
    setShowDropdown(!state);
  };

  const handleClickOutsideDropdown = (e: any) => {
    if (showDropdown && !dropdownRef.current?.contains(e.target as Node)) {
      setShowDropdown(false);
    }
  };
  window.addEventListener("click", handleClickOutsideDropdown);

  return (
    <>
      {submenu ? (
        <>
          <div ref={dropdownRef}>
            <Item
              to={to}
              onClick={() => handleDropDownFocus(showDropdown)}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <Icon src={icon} alt="icon" />
              {title}
            </Item>
          </div>
          {showDropdown && <Dropdown submenu={submenu} />}
        </>
      ) : (
        <Item to={to}>
          <Icon src={icon} alt="icon" />
          {title}
        </Item>
      )}
    </>
  );
};

export default NavbarItem;
