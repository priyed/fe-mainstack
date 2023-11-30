import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { format, parseISO } from "date-fns";

import { callMade, callReceived } from "../../../assets";

const TransactionNameAndTypeContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const ProductType = styled(Typography)`
  color: #131316;
  font-family: "Work sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.2px;
`;
interface FacilitatorNameProps {
  status: string;
}
const FacilitatorName = styled(Typography)<FacilitatorNameProps>`
  color: ${(props: FacilitatorNameProps) => {
    if (props.status === "pending") {
      return "#A77A07";
    } else if (props.status === "successful") {
      return "#0EA163";
    } else {
      return "#56616b";
    }
  }};

  font-family: "Work sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.2px;
`;
const TransactionFiguresContainer = styled(Box)``;
const TransactionAmount = styled(Box)`
  color: #131316;
  font-family: "Work sans";
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.4px;
`;
const TransactionDate = styled(Box)`
  color: var(--gray-gray-400, #56616b);
  font-family: "Work sans";
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.2px;
`;

const DepositIconContainer = styled(Box)`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--trashed-colors-jade-100, #e3fcf2);
`;
const WithdrawalContainer = styled(Box)`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--trashed-colors-red-100, #f9e3e0);
`;

interface MetadataItems {
  name: string;
  product_name: string;
}
interface TransactionListProps {
  date: string;
  amount: number;
  type: string;
  status: string;
  metadata?: MetadataItems;
}
const TransactionsList = ({
  amount,
  date,
  metadata,
  type,
  status,
}: TransactionListProps) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
      <Box sx={{ display: "flex", gap: 2 }}>
        {type === "deposit" ? (
          <DepositIconContainer>
            <IconType icon={callReceived} />
          </DepositIconContainer>
        ) : (
          <WithdrawalContainer>
            <IconType icon={callMade} />
          </WithdrawalContainer>
        )}

        <TransactionNameAndTypeContainer>
          <ProductType>{metadata ? metadata?.product_name : type}</ProductType>
          <FacilitatorName status={metadata ? metadata?.name : status}>
            {metadata ? metadata?.name : status}
          </FacilitatorName>
        </TransactionNameAndTypeContainer>
      </Box>
      <TransactionFiguresContainer>
        <TransactionAmount>USD {amount}</TransactionAmount>
        <TransactionDate>
          {format(parseISO(date), "MMM dd,yyyy")}
        </TransactionDate>
      </TransactionFiguresContainer>
    </Box>
  );
};

interface IconProps {
  icon: any;
}
const IconType = ({ icon }: IconProps) => {
  return <img src={icon} alt="transaction type" />;
};

export default TransactionsList;
