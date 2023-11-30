import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const DropdownContainer = styled(Box)`
  width: 300px;
  height: fit-content;
  position: absolute;
  top: 80px;
  right: 40px;
  border-radius: 20px;
  background: var(--white-white-100, #fff);
  box-shadow: 0px 4px 8px 0px rgba(45, 59, 67, 0.05),
    0px 4px 12px 0px rgba(45, 59, 67, 0.06);
  backdrop-filter: blur(8px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const DropdownItem = styled(Box)`
  position: relative;
  display: flex;
  gap: 8px;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--trashed-colors-white-100, #fff);
    box-shadow: 0px 2px 4px 0px rgba(45, 59, 67, 0.09),
      0px 2px 6px 0px rgba(45, 59, 67, 0.1);
  }
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`;

const ItemTextContainer = styled(Box)``;

const ItemTitle = styled(Typography)`
  color: var(--black-black-300, #131316);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.2px;
  font-family: "Work Sans";
`;

interface MobileNavigationItems {
  title: string;
  to: string;
}

interface MobileNavigationProps {
  items: MobileNavigationItems[];
}

const MobileDropdown = ({ items }: MobileNavigationProps) => {
  return (
    <DropdownContainer>
      {items.map((item) => {
        const { title } = item;
        return (
          <DropdownItem key={title}>
            <ItemTextContainer>
              <ItemTitle>{title}</ItemTitle>
            </ItemTextContainer>
          </DropdownItem>
        );
      })}
    </DropdownContainer>
  );
};

export default MobileDropdown;
