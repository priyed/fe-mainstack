import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const DropdownContainer = styled(Box)`
  width: 300px;
  height: fit-content;
  position: absolute;
  top: 60px;
  border-radius: 20px;
  background: var(--white-white-100, #fff);

  box-shadow: 0px 2px 4px 0px rgba(45, 59, 67, 0.05),
    0px 2px 6px 0px rgba(45, 59, 67, 0.06);
  backdrop-filter: blur(8px);
  padding: 10px;
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
    box-shadow: 0px 2px 4px 0px rgba(45, 59, 67, 0.05),
      0px 2px 6px 0px rgba(45, 59, 67, 0.08);
  }
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`;

const Icon = styled.img``;

const IconContainer = styled(Box)`
  border: 1px solid var(--gray-gray-50, #eff1f6);
  background: var(--trashed-colors-white-100, #fff);
  padding: 5px;
  border-radius: 10px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemTextContainer = styled(Box)``;

const ItemTitle = styled(Typography)`
  color: var(--black-black-300, #131316);
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.2px;
`;

const ItemDescription = styled(Typography)`
  color: var(--gray-gray-400, #56616b);
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.2px;
`;

interface SubmenuItems {
  title: string;
  description: string;
  icon: any;
}
interface DropdownProps {
  submenu: SubmenuItems[];
}

const AppsDropdown = ({ submenu: items }: DropdownProps) => {
  return (
    <DropdownContainer>
      {items.map((item) => {
        const { title, description, icon } = item;
        return (
          <DropdownItem key={title}>
            <IconContainer>
              <Icon src={icon} alt="dropdown icon" />
            </IconContainer>
            <ItemTextContainer>
              <ItemTitle>{title}</ItemTitle>
              <ItemDescription>{description}</ItemDescription>
            </ItemTextContainer>
          </DropdownItem>
        );
      })}
    </DropdownContainer>
  );
};

export default AppsDropdown;
