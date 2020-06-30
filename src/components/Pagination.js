import React from "react"
import {
  PaginationWrapper,
  PaginationElement,
} from "../elements/PaginationElements"
import { Link } from "gatsby"

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
      <PaginationElement to={`../${minusTen}`}>Back Ten</PaginationElement>
      <PaginationElement to={prevPage}>Previous Page</PaginationElement>
      <span>{currentPage} / </span>
      <Link to={`../${numPages}`}>{numPages}</Link>
      <PaginationElement to={nextPage}>Next Page</PaginationElement>
      <PaginationElement to={`../${plusTen}`}>Forward Ten</PaginationElement>
    </PaginationWrapper>
  )
}

export default Pagination
