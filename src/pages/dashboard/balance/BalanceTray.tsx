import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const TrayContainer = styled(Box)`
  display: inline-flex;
  flex-direction: column;
  gap: 32px;
`;
const BalanceText = styled(Typography)`
  color: var(--gray-gray-400, #56616b);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.2px;
  font-family: "Work Sans";
`;

const BalanceAmount = styled(Typography)`
  color: var(--black-black-300, #131316);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px; /* 133.333% */
  letter-spacing: -0.6px;
  font-family: "Work Sans";
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
interface TrayDetails {
  title: string;
  amount: string;
  icon: any;
}
interface BalanceTrayProps {
  balanceDetails: TrayDetails[];
}
const BalanceTray = ({ balanceDetails }: BalanceTrayProps) => {
  return (
    <TrayContainer>
      {balanceDetails.map((item) => {
        const { title, amount, icon } = item;
        return (
          <Box key={title}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gap={16}
            >
              <BalanceText>{title}</BalanceText>
              <Icon src={icon} alt="info icon" />
            </Box>
            <BalanceAmount>{amount}</BalanceAmount>
          </Box>
        );
      })}
    </TrayContainer>
  );
};

export default BalanceTray;
