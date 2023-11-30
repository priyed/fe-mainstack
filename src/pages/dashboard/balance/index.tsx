import { Box } from "@mui/material";
import styled from "styled-components";

import AvailableBalance from "./AvailableBalance";
import BalanceChart from "./chart";
import BalanceTray from "./BalanceTray";
import { infoIcon } from "../../../assets";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../../config";

const BalanceContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  justify-content: center;
  margin: 10px;

  @media (min-width: 768px) {
    grid-template-columns: 3fr 1fr;
    grid-gap: 30px;
    justify-content: space-between;
    margin: 0;
  }
`;

interface BalanceItems {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}
const Balance = () => {
  const [wallet, setWallet] = useState<BalanceItems>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const { apiUrl } = config;
        const { data } = await axios.get(`${apiUrl}/wallet`);
        setWallet(data);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        throw new Error(error);
      }
    };
    fetchWallet();
  }, []);
  const walletData = [
    {
      title: "Ledger Balance",
      amount: wallet?.ledger_balance,
      icon: infoIcon,
    },
    { title: "Total Payout", amount: wallet?.total_payout, icon: infoIcon },
    { title: "Total Revenue", amount: wallet?.total_revenue, icon: infoIcon },
    { title: "Pending Payout", amount: wallet?.pending_payout, icon: infoIcon },
  ];
  return (
    <BalanceContainer>
      <Box>
        <AvailableBalance loading={loading} balance={wallet?.balance} />
        <BalanceChart />
      </Box>
      <BalanceTray walletData={walletData} loading={loading} />
    </BalanceContainer>
  );
};
export default Balance;
