import { Box as MuiBox } from "@mui/material";
import Navbar from "../components/navbar";
import styled from "styled-components";

const Container = styled(MuiBox)`
  margin-top: 64px;
  overflow-x: hidden;
`;
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
