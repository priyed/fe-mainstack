import { Box, Container } from "@mui/material";
import styled from "styled-components";

import NavbarItem from "./NavbarItem";
import {
  chatIcon,
  groupIcon,
  homeIcon,
  insertChart,
  mainStackLogo,
  menuIcon,
  notificationsIcon,
  paymentsIcon,
  productIcon,
  productIcon2,
  vectorIcon,
  vectorIcon2,
  widgetsIcon,
} from "../../assets";
import Brand from "./Brand";
import Notification from "./Notification";
import Chats from "./Chats";
import Profile from "./Profile";
import MobileNavigation from "./MobileNavigation";

const NavItemsContainer = styled(Box)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
  }
`;
const NavContainer = styled(Container)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  flex-shrink: 0;
  border-radius: 100px;
  border: 2px solid #fff;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(45, 59, 67, 0.05),
    0px 2px 6px 0px rgba(45, 59, 67, 0.06);
  z-index: 9;
  @media (min-width: 768px) {
    max-width: 1408px;
  }
`;

const nav_items = [
  { title: "Home", icon: homeIcon, to: "/" },
  { title: "Analytics", icon: insertChart, to: "/analytics" },
  { title: "Revenue", icon: paymentsIcon, to: "/revenue" },
  { title: "CRM", icon: groupIcon, to: "/crm" },
  {
    title: "Apps",
    icon: widgetsIcon,
    to: "apps",
    submenu: [
      {
        title: "Link in Bio",
        description: "Manage your Link in Bio",
        icon: productIcon,
      },
      {
        title: "Store",
        description: "Manage your Store activities",
        icon: vectorIcon,
      },
      {
        title: "Media Kit",
        description: "Manage your Media kit",
        icon: vectorIcon2,
      },
      {
        title: "Invoicing",
        description: "Manage your invoices",
        icon: productIcon2,
      },
      {
        title: "Bookings",
        description: "Manage your invoices",
        icon: vectorIcon,
      },
    ],
  },
];

const Navbar = () => {
  return (
    <NavContainer>
      <Brand source={mainStackLogo} />

      <NavItemsContainer>
        {nav_items.map((item) => {
          const { title, icon, submenu, to } = item;
          return (
            <Box key={title}>
              <NavbarItem title={title} icon={icon} to={to} submenu={submenu} />
            </Box>
          );
        })}
      </NavItemsContainer>
      <Box display={"flex"} gap={3}>
        <Notification source={notificationsIcon} />
        <Chats source={chatIcon} />
        <Profile icon={menuIcon} />
        <MobileNavigation icon={menuIcon} />
      </Box>
    </NavContainer>
  );
};

export default Navbar;
