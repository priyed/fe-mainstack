import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import Loader from "../../../shared/Loader";

const TrayContainer = styled(Box)``;

const BalanceText = styled(Typography)`
  color: var(--gray-gray-400, #56616b);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.2px;
  font-family: "Work Sans";
  flex-shrink: 0;
`;

const BalanceAmount = styled(Typography)`
  color: var(--black-black-300, #131316);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px; /* 133.333% */
  letter-spacing: -0.6px;
  font-family: "Work Sans";
  flex-shrink: 0;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-right: 10px;
`;

interface TrayDetails {
  title: string;
  amount: number | undefined;
  icon: any;
}
interface BalanceTrayProps {
  walletData: TrayDetails[];
  loading: boolean;
}
const BalanceTray = ({ walletData, loading }: BalanceTrayProps) => {
  return (
    <TrayContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          {walletData.map((item) => {
            const { title, amount, icon } = item;
            return (
              <Box key={title} mb={4}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <BalanceText>{title}</BalanceText>
                  <Icon src={icon} alt="info icon" />
                </Box>
                <BalanceAmount>{amount}</BalanceAmount>
              </Box>
            );
          })}{" "}
        </>
      )}
    </TrayContainer>
  );
};

export default BalanceTray;
