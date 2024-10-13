/* eslint-disable react/prop-types */
import { GrNext, GrPrevious } from "react-icons/gr";
import { useSearchParams } from "react-router-dom";
import { MAX_ROWS } from "../utils/constants";
import styled from "styled-components";

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: space-between;
`;

const Span = styled.span`
  font-weight: 700;
`;

const BtnsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const PaginationBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: transparent;
  color: var(--light-text-color);
  font-size: 1.5rem;

  &:hover {
    background-color: var(--emphasis-color);
    transition: background-color 0.3s;
  }

  &:disabled {
    background-color: transparent;

    &:hover {
      background-color: transparent;
    }
  }
`;

const iconStyle = { width: "1.2rem", height: "1.2rem" };

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / MAX_ROWS);

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <StyledPagination>
      <p>
        Showing <Span>{(currentPage - 1) * MAX_ROWS + 1}</Span> to <Span>{currentPage === pageCount ? count : currentPage * MAX_ROWS}</Span> of <Span>{count}</Span>{" "}
        results
      </p>

      <BtnsWrapper>
        <PaginationBtn onClick={prevPage} disabled={currentPage === 1}>
          <GrPrevious style={iconStyle} /> Previous
        </PaginationBtn>
        <PaginationBtn onClick={nextPage} disabled={currentPage === pageCount}>
          Next <GrNext style={iconStyle} />
        </PaginationBtn>
      </BtnsWrapper>
    </StyledPagination>
  );
}

export default Pagination;
