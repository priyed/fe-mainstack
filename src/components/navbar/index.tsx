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

const NavItemsContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
`;
const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-self: center;
  max-width: 1408px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 100px;
  border: 2px solid #fff;
  box-shadow: 0px 2px 4px 0px rgba(45, 59, 67, 0.05),
    0px 2px 6px 0px rgba(45, 59, 67, 0.06);
`;

const nav_items = [
  { title: "Home", icon: homeIcon },
  { title: "Analytics", icon: insertChart },
  { title: "Revenue", icon: paymentsIcon },
  { title: "CRM", icon: groupIcon },
  {
    title: "Apps",
    icon: widgetsIcon,
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
          const { title, icon, submenu } = item;
          return (
            <Box key={title}>
              <NavbarItem title={title} icon={icon} submenu={submenu} />
            </Box>
          );
        })}
      </NavItemsContainer>
      <Box display={"flex"} gap={3}>
        <Notification source={notificationsIcon} />
        <Chats source={chatIcon} />
        <Profile icon={menuIcon} initials="SD" />
      </Box>
    </NavContainer>
  );
};

export default Navbar;
