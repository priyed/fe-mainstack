import { useState } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import ProfileDropdown from "./dropdowns/ProfileDropdown";

interface ProfileProps {
  initials: string;
  icon: any;
}

const ProfileContainer = styled(Box)`
  display: flex;
  padding: 4px 12px 4px 5px;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  background: #eff1f6;
`;

const Avatar = styled(Box)`
  background: linear-gradient(139deg, #5c6670 2.33%, #131316 96.28%);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  cursor: pointer;
`;

const AvatarContent = styled(Box)`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.4px;
  background: var(
    --white-gradient,
    linear-gradient(108deg, #fff -6.45%, #f2f3f5 114.84%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const profileItems = [
  { title: "Settings" },
  { title: "Purchase History" },
  { title: "Refer and Earn" },
  { title: "Integrations" },
  { title: "Report Bug" },
  { title: "Switch Account" },
  { title: "Sign Out" },
];

const Profile = ({ initials, icon }: ProfileProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <ProfileContainer onClick={() => setShowDropdown(!showDropdown)}>
        <Avatar>
          <AvatarContent>{initials}</AvatarContent>
        </Avatar>
        <MenuIcon src={icon} alt="menu" />
      </ProfileContainer>
      {showDropdown && (
        <ProfileDropdown initials={initials} profileItems={profileItems} />
      )}
    </>
  );
};
export default Profile;
