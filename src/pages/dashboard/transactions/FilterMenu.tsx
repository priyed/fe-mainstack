import {
  Box,
  InputAdornment,
  MenuItem,
  Select,
  Typography,
  Checkbox,
} from "@mui/material";
import { createSvgIcon } from "@mui/material/utils";
import styled, { keyframes } from "styled-components";
import { DatePicker } from "@mui/x-date-pickers";

import { CheckBox, ExpandMore } from "@mui/icons-material";
import { format, parseISO } from "date-fns";
import { useEffect, useState } from "react";

const typographyBase = `
  color: var(--black-black-300, #131316);
  font-family: "Work sans";
  font-style: normal;
  letter-spacing: -0.4px;
`;
const ApplyClearButton = `
  display: flex;
  padding: 14px 28px;
  width: 167px;
  height: 52px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  cursor: pointer;
`;

const datePickerBase = {
  width: "100%",
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#979797",
  },
  "& .MuiOutlinedInput-root": {
    height: "48px",
    borderRadius: "12px",
    border: "1px solid #eff1f6",
    fontWeight: 500,
    fontSize: "14px",
    fontFamily: "Work sans",
    backgroundColor: "#eff1f6",
    cursor: "pointer",
    "&:hover > fieldset": {
      borderColor: "#C7C8CD",
    },
  },
};

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
const Overlay = styled(Box)`
  width: 100vw;
  height: 100vh;
  background: var(--white-white-100, #e2e0e082);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const FilterMenuContainer = styled(Box)`
  width: 350px;
  height: 98vh;
  border-radius: 20px;
  overflow-y: auto;
  position: absolute;
  right: 0;
  top: 10px;
  border-radius: 20px;
  background: var(--white-white-100, #fff);
  box-shadow: 0px 8px 16px 4px rgba(188, 196, 204, 0.1),
    0px 12px 24px 0px rgba(219, 222, 229, 0.1),
    0px 16px 32px 0px rgba(219, 222, 229, 0.1);
  backdrop-filter: blur(8px);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  &::-webkit-scrollbar {
    width: 0;
  }

  animation: ${slideIn} 0.5s forwards;
  @media (min-width: 768px) {
    width: 456px;
  }
`;

const CloseIcon = styled.img`
  cursor: pointer;
`;

const Heading = styled(Typography)`
  ${typographyBase};
  font-size: 24px;
  font-weight: 700;
  line-height: 120%;
  text-transform: capitalize;
`;

const DateHeading = styled(Typography)`
  ${typographyBase};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;
const Chip = styled(Box)`
  padding: 10px 18px;
  border-radius: 100px;
  border: 1px solid var(--gray-gray-50, #eff1f6);
  background: var(--trashed-colors-white-100, #fff);
  cursor: pointer;
`;

const ChipText = styled(Typography)`
  ${typographyBase};
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
`;

const SelectDropdownContainer = styled(Box)``;
const DropDownSelectField = styled(Box)`
  border-radius: 12px;
  border: 1px solid var(--gray-gray-50, #eff1f6);
  background: var(--gray-gray-50, #eff1f6);
  display: flex;
  padding: 14px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  height: 48px;
  align-self: stretch;
  cursor: pointer;
`;
const DropDownListContainer = styled(Box)``;
const TransactionItem = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 5px;
`;
const DropDownList = styled(Box)`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  border-radius: 12px;
  background: var(--trashed-colors-white-100, #fff);
  /* App Bar */
  box-shadow: 0px 6px 12px 0px rgba(92, 115, 131, 0.08),
    0px 4px 8px 0px rgba(92, 115, 131, 0.08);
`;

const SelectedTransactions = styled(Typography)`
  overflow-x: scroll;
  color: var(--black-black-300, #131316);
  text-overflow: ellipsis;
  display: inline;
  font-family: "Work sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.2px;
`;

const TransactionType = styled(Typography)`
  color: var(--black-black-300, #131316);

  font-family: "Work sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const FilterButtons = styled(Box)`
  position: relative;

  bottom: -100px;
`;
const ApplyButton = styled.button`
  ${ApplyClearButton};
  color: var(--trashed-colors-white-100, var(--white-white-100, #fff));
  background: var(--black-black-300, #131316);
`;

const ClearButton = styled.button`
  ${ApplyClearButton};
  border: 1px solid var(--gray-gray-50, #eff1f6);
  color: var(--black-black-300, #131316);
  background: var(--white-white-100, #fff);
`;

// Data
const filterPeriod = [
  {
    title: "Today",
  },
  { title: "Last 7 days" },
  { title: "This month" },
  { title: "Last 3 months" },
];

const transactionOptions = [
  "Store Transactions",
  "Get Tripped",
  "Withdrawal",
  "Deposit",
  "Chargebacks",
  "Cashbacks",
  "Refer & Earn",
];
interface MenuProps {
  icon: any;
  closeFilter: (close: boolean) => void;
  applyFilters?: (selectedOptions: string[]) => void;
}
const FilterMenu = ({ icon, closeFilter, applyFilters }: MenuProps) => {
  // State
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [openTransactionSelect, setOpenTransactionSelect] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // Effects
  useEffect(() => {
    setSelectedOptions(transactionOptions);
  }, []);
  // Handlers
  const handleChecked = (
    event: React.ChangeEvent<HTMLInputElement>,
    item: string
  ) => {
    if (event.target.checked) {
      setSelectedOptions([...selectedOptions, item]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== item));
    }
  };

  const handleClearFilters = () => {
    setSelectedOptions([]);
    setStartDate(null);
    setEndDate(null);
  };

  const handleApplyFilters = () => {
    applyFilters && applyFilters(selectedOptions);
  };

  return (
    <Overlay onClick={() => closeFilter(false)}>
      <FilterMenuContainer onClick={(e) => e.stopPropagation()}>
        <Box display={"flex"} justifyContent={"space-between"} p={2}>
          <Heading>Filter</Heading>
          <CloseIcon
            src={icon}
            alt="close filter"
            onClick={() => closeFilter(false)}
          />
        </Box>
        <Box p={2} display={"flex"} gap={2} flexWrap={"wrap"}>
          {filterPeriod.map((period) => {
            const { title } = period;
            return <PeriodChip key={title} period={title} />;
          })}
        </Box>
        <Box p={2}>
          <DateHeading>Date Range</DateHeading>
          <Box display={"flex"} gap={1} mt={2}>
            <DatePicker
              open={openStart}
              onClose={() => setOpenStart(false)}
              value={startDate}
              onChange={(e) => setStartDate(e)}
              slotProps={{
                textField: {
                  onClick: () => {
                    setOpenEnd(false);
                    setOpenStart(true);
                  },
                  InputProps: {
                    endAdornment: (
                      <InputAdornment
                        sx={{
                          color: "#979797",
                        }}
                        position="end"
                      >
                        <ExpandMore />
                      </InputAdornment>
                    ),
                  },
                },
              }}
              sx={datePickerBase}
            />
            <DatePicker
              open={openEnd}
              onClose={() => setOpenEnd(false)}
              value={endDate}
              onChange={(e) => setEndDate(e)}
              slotProps={{
                textField: {
                  onClick: () => {
                    setOpenStart(false);
                    setOpenEnd(true);
                  },
                  InputProps: {
                    endAdornment: (
                      <InputAdornment
                        sx={{
                          color: "#979797",
                        }}
                        position="end"
                      >
                        <ExpandMore />
                      </InputAdornment>
                    ),
                  },
                },
              }}
              sx={datePickerBase}
            />
          </Box>
        </Box>
        <SelectDropdownContainer p={2}>
          <DateHeading>Transaction Type</DateHeading>
          <DropDownSelectField
            mt={2}
            onClick={() => setOpenTransactionSelect(!openTransactionSelect)}
          >
            <SelectedTransactions>
              {selectedOptions.join(", ")}
            </SelectedTransactions>
          </DropDownSelectField>
          {openTransactionSelect && (
            <DropDownListContainer>
              <DropDownList>
                {transactionOptions.map((type) => {
                  return (
                    <TransactionItem
                      key={type}
                      sx={{
                        width: "100%",
                        display: "flex",
                      }}
                    >
                      <Checkbox
                        checked={selectedOptions.includes(type)}
                        onChange={(e) => handleChecked(e, type)}
                        checkedIcon={<CheckBox sx={{ color: "#000" }} />}
                      />
                      <TransactionType>{type}</TransactionType>
                    </TransactionItem>
                  );
                })}
              </DropDownList>
            </DropDownListContainer>
          )}
        </SelectDropdownContainer>
        <FilterButtons display={"flex"} gap={2} p={2} justifyContent={"center"}>
          <ClearButton onClick={handleClearFilters}>Clear</ClearButton>
          <ApplyButton onClick={handleApplyFilters}>Apply</ApplyButton>
        </FilterButtons>
      </FilterMenuContainer>
    </Overlay>
  );
};

interface PeriodChip {
  period: string;
}

const PeriodChip = ({ period }: PeriodChip) => {
  return (
    <Chip>
      <ChipText>{period}</ChipText>
    </Chip>
  );
};

export default FilterMenu;
