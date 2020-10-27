import React from "react"
import {
  PaginationWrapper,
  PaginationElement,
} from "../elements/PaginationElements"

const Pagination = ({
  isFirst,
  isLast,
  prevPage,
  nextPage,
  currentPage,
  numPages,
  minusTen,
  isPastTen,
  plusTen,
  abletoforwardten,
}) => {
  return (
    <PaginationWrapper
      isFirst={isFirst}
      isLast={isLast}
      isPastTen={isPastTen}
      abletoforwardten={abletoforwardten}
    >
      <PaginationElement to={`../${minusTen}`}>Minus Ten</PaginationElement>
      <PaginationElement to={prevPage}>Prev Page</PaginationElement>
      <span>{currentPage} / </span>
      <PaginationElement to={`/blog/${numPages}`}>{numPages}</PaginationElement>
      <PaginationElement to={nextPage}>Next Page</PaginationElement>
      <PaginationElement to={`/blog/${plusTen}`}>Plus Ten</PaginationElement>
    </PaginationWrapper>
  )
}

export default Pagination
