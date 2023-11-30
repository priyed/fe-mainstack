import { useRef, useState } from "react";
import styled from "styled-components";
import MobileDropdown from "./dropdowns/MobileDropdown";
import { Box } from "@mui/material";

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 3px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Icon = styled.img`
  font-size: 20px;
  width: 25px;
  height: 25px;
  background-color: transparent;
`;

const nav_items = [
  { title: "Home", to: "/" },
  { title: "Analytics", to: "/analytics" },
  { title: "Revenue", to: "/revenue" },
  { title: "CRM", to: "/crm" },
  { title: "Apps", to: "apps" },
];

interface MobileNavigationProps {
  icon: any;
}

const MobileNavigation = ({ icon }: MobileNavigationProps) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleDropDownFocus = (state: boolean) => {
    setOpen(!state);
  };

  const handleClickOutsideDropdown = (e: any) => {
    if (open && !dropdownRef.current?.contains(e.target as Node)) {
      setOpen(false);
    }
  };
  window.addEventListener("click", handleClickOutsideDropdown);
  return (
    <div ref={dropdownRef}>
      <IconContainer onClick={() => handleDropDownFocus(open)}>
        <Icon src={icon} alt="icon" />{" "}
      </IconContainer>
      {open && <MobileDropdown items={nav_items} />}
    </div>
  );
};

export default MobileNavigation;
