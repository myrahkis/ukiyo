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
  }
`;

function RoomTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price (low first)" },
          { value: "regularPrice-desc", label: "Sort by price (high first)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
          { value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default RoomTableOperations;
