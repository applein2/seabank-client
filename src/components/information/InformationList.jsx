import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteBoard } from "../../state/index";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function InformationList({ boards, token }) {
  const [open, setOpen] = React.useState(false);
  const [selectedBoard, setselectedBoard] = React.useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const editBoard = (item) => {
    navigate("/board", { state: { item } });
  };

  const readBoard = (board) => {
    navigate("/readboard", {
      state: {
        item: board,
      },
    });
  };

  const handleDeleteBoard = async () => {
    try {
      const newBoard = await fetch(
        `http://localhost:3500/board/${selectedBoard}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      const result = await newBoard.json();
      dispatch(deleteBoard({ id: selectedBoard }));
    } catch (err) {
      console.log(err);
    }
    setOpen(false);
  };

  const handleClickOpen = (id) => {
    setselectedBoard(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <List sx={{ width: "100%", maxWidth: 800 }}>
        {boards.map((board) => (
          <React.Fragment key={board._id}>
            <ListItem alignItems="flex-start" style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{ display: "flex" }}
                  onClick={() => readBoard(board)}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={board.title}
                    secondary={
                      <React.Fragment>
                        <span style={{ marginRight: 10 }}>
                          {board?.author + " "}
                        </span>
                        <span style={{ marginRight: 10 }}>
                          {board?.created.substr(0, 10) + " "}
                        </span>
                        <span>{board?.contents.substr(0, 35) + "..."}</span>
                      </React.Fragment>
                    }
                  />
                </div>
                {token ? (
                  <div>
                    <FaEdit
                      style={{ marginRight: "10px", fontSize: "20px" }}
                      onClick={() => {
                        editBoard(board);
                      }}
                    />
                    <FaRegTrashAlt
                      style={{ fontSize: "19px" }}
                      onClick={() => {
                        handleClickOpen(board._id);
                      }}
                    />
                  </div>
                ) : null}
              </div>
            </ListItem>
            <Divider variant="inset" component="li" />

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle id="alert-dialog-title">{"게시글 삭제"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  선택한 게시글을 삭제하시겠습니까?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>아니오</Button>
                <Button onClick={handleDeleteBoard} autoFocus>
                  예
                </Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}
