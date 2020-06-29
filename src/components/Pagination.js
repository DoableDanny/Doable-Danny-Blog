import React from "react"
import {
  PaginationWrapper,
  PaginationElement,
} from "../elements/PaginationElements"

const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={prevPage}>Previous Page</PaginationElement>
      <PaginationElement to={nextPage}>Next Page</PaginationElement>
    </PaginationWrapper>
  )
}

export default Pagination
