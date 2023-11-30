import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const ExportListContainer = styled(Box)`
  display: flex;
  padding: 6px 10px 6px 15px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 100px;
  background: var(--gray-gray-50, #eff1f6);
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 12px 20px 12px 30px;
  }
`;

const Title = styled(Typography)`
  color: #131316;
  font-family: "Work sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
interface ExportListProps {
  icon: any;
}
const ExportList = ({ icon }: ExportListProps) => {
  return (
    <ExportListContainer>
      <Title>Export list</Title>
      <img src={icon} alt="expand" />
    </ExportListContainer>
  );
};
export default ExportList;
