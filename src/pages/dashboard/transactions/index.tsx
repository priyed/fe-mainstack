import { Box, Card, CardHeader, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TransactionsList from "./List";
import Loader from "../../../shared/Loader";
import { config } from "../../../config";
import ExportList from "./ExportList";
import FilterList from "./FilterList";
import { downloadIcon, expandMoreIcon } from "../../../assets";

const ActionsContainer = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TransactionsActionsAndHeadingContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray-gray-50, #eff1f6);
  padding-bottom: 30px;
  margin-bottom: 30px;
`;
const TransactionHeadingContainer = styled(Box)``;
const TransactionHeading = styled(Typography)`
  color: var(--black-black-300, #131316);
  font-family: "Work sans";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.6px;
`;

const TransactionSubHeading = styled(Typography)`
  color: var(--gray-gray-400, #56616b);

  font-family: "Work sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.2px;
`;

interface MetadataItems {
  name: string;
  product_name: string;
}

interface ApiResponseItems {
  amount: number;
  date: string;
  type: string;
  status: string;
  metadata: MetadataItems;
}

const Transactions = () => {
  const [transactions, setTransactions] = useState<ApiResponseItems[]>([]);
  const [loading, setLoading] = useState(true);
  const [initialTransactions, setInitialTransactions] = useState<
    ApiResponseItems[]
  >([]);
  const [filteredTransactions, setFilteredTransactions] = useState<
    ApiResponseItems[]
  >([]);

  const applyFilters = (selectedOptions: string[]) => {
    const transformedOptions = selectedOptions.map((option) =>
      option.toLowerCase()
    );

    const filteredData = initialTransactions.filter((transaction) => {
      if (
        transformedOptions.includes(transaction.type) ||
        transformedOptions.includes(transaction.status)
      ) {
        return transaction;
      }
    });
    setTransactions(filteredData);
    setFilteredTransactions(filteredData);
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { apiUrl } = config;
        const { data } = await axios.get(`${apiUrl}/transactions`);
        setTransactions(data);
        setInitialTransactions(data);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        throw new Error(error);
      }
    };
    fetchTransactions();
  }, []);
  return (
    <Box sx={{ my: 4 }} position={"relative"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TransactionsActionsAndHeadingContainer>
            <TransactionHeadingContainer>
              <TransactionHeading>
                {transactions.length} Transactions
              </TransactionHeading>
              <TransactionSubHeading>
                Your transactions for the last 7 days
              </TransactionSubHeading>
            </TransactionHeadingContainer>
            <ActionsContainer>
              <FilterList
                icon={expandMoreIcon}
                transactions={filteredTransactions}
                applyFilters={applyFilters}
              />
              <ExportList icon={downloadIcon} />
            </ActionsContainer>
          </TransactionsActionsAndHeadingContainer>
          <Box>
            {transactions.map((transaction, index) => {
              const { date, amount, status, type, metadata } = transaction;
              return (
                <TransactionsList
                  key={index}
                  date={date}
                  amount={amount}
                  type={type}
                  metadata={metadata}
                  status={status}
                />
              );
            })}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Transactions;
