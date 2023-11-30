import { useEffect, useRef, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import styled from "styled-components";
import ProfileDropdown from "./dropdowns/ProfileDropdown";
import { config } from "../../config";
import axios from "axios";
import Loader from "../../shared/Loader";

const ProfileContainer = styled(Box)`
  @media (min-width: 768px) {
    display: flex;
    padding: 4px 12px 4px 5px;
    align-items: center;
    gap: 8px;
    border-radius: 100px;
    background: #eff1f6;
  }
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
  display: none;
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    cursor: pointer;
    display: block;
  }
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
interface ProfileProps {
  icon: any;
}

const Profile = ({ icon }: ProfileProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const handleDropDownFocus = (state: boolean) => {
    setShowDropdown(!state);
  };
  const [user, setUser] = useState<{
    first_name: string;
    last_name: string;
    email: string;
  }>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { apiUrl } = config;
        const { data } = await axios.get(`${apiUrl}/user`);
        setLoading(false);
        setUser(data);
      } catch (error: any) {
        setLoading(false);
        throw new Error(error);
      }
    };
    fetchUser();
  }, []);

  const initials = `${user?.first_name.charAt(0)}${user?.last_name.charAt(0)}`;

  const handleClickOutsideDropdown = (e: any) => {
    if (showDropdown && !dropdownRef.current?.contains(e.target as Node)) {
      setShowDropdown(false);
    }
  };
  window.addEventListener("click", handleClickOutsideDropdown);
  return (
    <div ref={dropdownRef}>
      <ProfileContainer onClick={() => handleDropDownFocus(showDropdown)}>
        <Avatar>
          {loading ? (
            <CircularProgress
              sx={{
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
            />
          ) : (
            <AvatarContent>{initials}</AvatarContent>
          )}
        </Avatar>
        <MenuIcon src={icon} alt="menu" />
      </ProfileContainer>
      {showDropdown && (
        <ProfileDropdown
          first_name={user?.first_name}
          last_name={user?.last_name}
          email={user?.email}
          initials={initials}
          profileItems={profileItems}
        />
      )}
    </div>
  );
};
export default Profile;
