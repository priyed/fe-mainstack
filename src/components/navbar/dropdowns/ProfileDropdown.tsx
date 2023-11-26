import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const DropdownContainer = styled(Box)`
  width: 310px;
  height: fit-content;
  position: absolute;
  top: 80px;
  right: 40px;
  border-radius: 20px;
  background: var(--white-white-100, #fff);

  box-shadow: 0px 2px 4px 0px rgba(45, 59, 67, 0.05),
    0px 2px 6px 0px rgba(45, 59, 67, 0.06);
  backdrop-filter: blur(8px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Avatar = styled(Box)`
  background: linear-gradient(139deg, #5c6670 2.33%, #131316 96.28%);
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
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

const UserDetailsContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
`;

interface Items {
  title: string;
}

interface ProfileItemProps {
  title: string;
}

const ProfileItems = ({ title }: ProfileItemProps) => {
  return (
    <Box sx={{ cursor: "pointer", mt: 2 }}>
      <Typography fontWeight={600} fontSize={11} fontFamily={"Work Sans"}>
        {title}
      </Typography>
    </Box>
  );
};

interface ProfileDropdownProps {
  initials: string;
  profileItems: Items[];
}

const ProfileDropdown = ({ initials, profileItems }: ProfileDropdownProps) => {
  return (
    <DropdownContainer>
      <UserDetailsContainer>
        <Avatar>
          <AvatarContent>{initials}</AvatarContent>
        </Avatar>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography
            sx={{ fontSize: 14, fontWeight: 700, fontFamily: "Work Sans" }}
          >
            Stanley Duye
          </Typography>
          <Typography
            sx={{ fontWeight: 300, fontSize: 12, fontFamily: "Work Sans" }}
          >
            stanleyduye@gmail.com
          </Typography>
        </Box>
      </UserDetailsContainer>
      {profileItems.map((item) => (
        <ProfileItems key={item.title} title={item.title} />
      ))}
    </DropdownContainer>
  );
};

export default ProfileDropdown;
