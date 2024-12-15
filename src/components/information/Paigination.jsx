import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { getBoards } from "../../state";

export default function PaginationRounded({ count }) {
  const dispatch = useDispatch();
  const page = Math.ceil(count / 5);

  const selectPage = async (obj, page) => {
    try {
      const newBoard = await fetch(`http://localhost:3500/board/${page}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const result = await newBoard.json();
      dispatch(getBoards({ boards: result.board }));
      //   setCount(result.count);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      <Stack spacing={2}>
        <Pagination count={page} shape="rounded" onChange={selectPage} />
      </Stack>
    </div>
  );
}
