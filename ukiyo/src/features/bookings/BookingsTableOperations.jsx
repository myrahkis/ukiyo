import { device } from "../../styles/adaptability";
import styled from "styled-components";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const TableOperations = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: end;
  }
`;

function BookingsTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-in", label: "Checked in" },
          { value: "checked-out", label: "Checked out" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />
      <SortBy
        options={[
          {
            value: "startDate-asc",
            label: "Sort by start date (past first)",
          },
          {
            value: "startDate-desc",
            label: "Sort by start date (recent first)",
          },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
          { value: "totalPrice-desc", label: "Sort by amount (high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingsTableOperations;
