import { Box } from "@mui/material";
import styled from "styled-components";

import AvailableBalance from "./AvailableBalance";
import BalanceChart from "./chart";
import BalanceTray from "./BalanceTray";
import { infoIcon } from "../../../assets";

const BalanceContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const balanceDetails = [
  {
    title: "Ledger Balance",
    amount: "USD 0.00",
    icon: infoIcon,
  },
  { title: "Total Payout", amount: "USD 55,080.00", icon: infoIcon },
  { title: "Total Revenue", amount: "USD 175,580.00", icon: infoIcon },
  { title: "Pending Payout", amount: "USD 0.00", icon: infoIcon },
];
const Balance = () => {
  return (
    <BalanceContainer>
      <Box>
        <AvailableBalance />
        <BalanceChart />
      </Box>
      <BalanceTray balanceDetails={balanceDetails} />
    </BalanceContainer>
  );
};
export default Balance;
