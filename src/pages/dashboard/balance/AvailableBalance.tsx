import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import Loader from "../../../shared/Loader";

const AvailableBalanceContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 64px;
`;
const AvailableBalanceText = styled(Typography)`
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
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 133.333% */
  letter-spacing: -1.5px;
  font-family: "Work Sans";
`;

const WithdrawButton = styled.button`
  display: flex;
  padding: 14px 28px;
  width: 167px;
  height: 52px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  color: var(--trashed-colors-white-100, var(--white-white-100, #fff));
  font-family: "Work Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.4px;
  background: var(--black-black-300, #131316);
  cursor: pointer;
`;

interface AvailableBalanceProps {
  balance: number | undefined;
  loading: boolean;
}
const AvailableBalance = ({ balance, loading }: AvailableBalanceProps) => {
  return (
    <>
      <AvailableBalanceContainer>
        {loading && !balance ? (
          <Loader />
        ) : (
          <>
            <Box display="flex" flexDirection="column" gap={1}>
              <AvailableBalanceText>Available Balance</AvailableBalanceText>
              <BalanceAmount>USD {balance}</BalanceAmount>
            </Box>
            <WithdrawButton>Withdraw</WithdrawButton>
          </>
        )}
      </AvailableBalanceContainer>
    </>
  );
};
export default AvailableBalance;
