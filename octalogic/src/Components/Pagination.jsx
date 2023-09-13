import { Button, Flex } from "@chakra-ui/react";
import React from "react";

function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({ totalPages, handlePageChange, currentPage }) {
  const pages = createArrayOfSize(totalPages).map((_, i) => (
    <Button
      m={"20px"}
      key={i + 1}
      value={i + 1}
      disabled={i === currentPage - 1}
      onClick={() => handlePageChange(i + 1)}
    >
      {i + 1}
    </Button>
  ));

  return <div>{pages}</div>;
}

export default Pagination;
