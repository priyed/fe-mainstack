import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import FilterMenu from "./FilterMenu";
import { closeIcon } from "../../../assets";

const FilterListContainer = styled(Box)`
  display: flex;
  padding: 6px 10px 6px 15px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 100px;
  background: var(--gray-gray-50, #eff1f6);
  cursor: pointer;
  position: relative;
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
  display: flex;
  align-items: center;
  gap: 5px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const ItemCount = styled.span`
  width: 20px;
  height: 20px;
  padding: 3px;
  border-radius: 50%;
  text-align: center;
  color: var(--trashed-colors-white-100, var(--white-white-100, #fff));
  font-family: "Work sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px; /* 100% */
  letter-spacing: -0.4px;
  background-color: #131316;
`;

interface ApiResponseItems {
  amount: number;
  date: string;
  type: string;
  status: string;
}
interface FilterListProps {
  icon: any;
  transactions: ApiResponseItems[];
  applyFilters: (selectedOptions: string[]) => void;
}
const FilterList = ({ icon, applyFilters, transactions }: FilterListProps) => {
  const [openFilter, setOpenFilter] = useState(false);

  useEffect(() => {
    if (openFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openFilter]);

  const closeFilter = (close: boolean) => {
    setOpenFilter(close);
    document.body.classList.toggle("filter-open", close);
  };
  return (
    <>
      <FilterListContainer onClick={() => setOpenFilter(!openFilter)}>
        <Title>
          Filter{" "}
          {transactions.length ? (
            <ItemCount>{transactions.length}</ItemCount>
          ) : null}
        </Title>
        <img src={icon} alt="expand" />
      </FilterListContainer>
      {openFilter && (
        <FilterMenu
          icon={closeIcon}
          closeFilter={closeFilter}
          applyFilters={applyFilters}
        />
      )}
    </>
  );
};

export default FilterList;
