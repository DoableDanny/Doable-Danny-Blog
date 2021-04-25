import React from "react"
import {
  PaginationWrapper,
  PaginationElement,
  NonClickableElement,
} from "../elements/PaginationElements"

const Pagination = ({ currentPage, numPages }) => {
  // Forward and backwards one page
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/blog/" : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`

  // Back ten pages
  const isPastTen = currentPage > 10
  let minusTen = currentPage === 11 ? `/blog/` : `/blog/${currentPage - 10}`

  // Forward ten pages
  const ableToForwardTen = currentPage + 10 <= numPages
  let plusTen = `/blog/${currentPage + 10}`

  return (
    <PaginationWrapper
      isFirst={isFirst}
      isLast={isLast}
      isPastTen={isPastTen}
      abletoforwardten={ableToForwardTen}
    >
      {!isPastTen ? (
        <NonClickableElement>Minus Ten</NonClickableElement>
      ) : (
        <PaginationElement to={minusTen}>Minus Ten</PaginationElement>
      )}

      {isFirst ? (
        <NonClickableElement>Prev Page</NonClickableElement>
      ) : (
        <PaginationElement to={prevPage}>Prev Page</PaginationElement>
      )}

      <span>{currentPage} / </span>

      <PaginationElement to={`/blog/${numPages}`}>{numPages}</PaginationElement>

      {isLast ? (
        <NonClickableElement>Next Page</NonClickableElement>
      ) : (
        <PaginationElement to={nextPage}>Next Page</PaginationElement>
      )}

      {!ableToForwardTen ? (
        <NonClickableElement>Plus Ten</NonClickableElement>
      ) : (
        <PaginationElement to={plusTen}>Plus Ten</PaginationElement>
      )}
    </PaginationWrapper>
  )
}

export default Pagination
