"use client";

import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import Link from "next/link";

type Props = {
  currentPage: number;
  totalPages: number;
};

const BlogPagination = ({ currentPage, totalPages }: Props) => {
  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      variant="outlined"
      shape="rounded"
      color="primary"
      size="large"
      renderItem={(item) => (
        <Link
          href={`/blog?page=${item.page}`}
          className="no-underline text-inherit"
        >
          <PaginationItem {...item} />
        </Link>
      )}
    />
  );
};

export default BlogPagination;
