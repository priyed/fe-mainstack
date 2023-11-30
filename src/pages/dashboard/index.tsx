import { Container } from "@mui/material";
import Balance from "./balance";
import Transactions from "./transactions";

const Dashboard = () => {
  return (
    <Container sx={{ mt: 7 }}>
      <Balance />
      <Transactions />
    </Container>
  );
};

export default Dashboard;
