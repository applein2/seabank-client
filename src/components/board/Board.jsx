import React, { useEffect, useState } from "react";
import img from "../images/Inquiries.png";
import Back from "../common/Back";
import "./Board.css";
import Heading from "../common/Heading";
import Dropzone from "react-dropzone";
import { addBoard } from "../../state";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";

const Board = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState("");
  const [mode, setMode] = useState("create");
  const [files, setFiles] = useState([]);
  const [originalFiles, setOriginalFiles] = useState([]);
  const [newFiles, setNewFiles] = useState([]);
  const [deletedFiles, setDeletedFiles] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.token);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const location = useLocation();
  if (location.state?.item) {
    setTitle(location.state?.item.title);
    setContent(location.state?.item.contents);
    setEditId(location.state.item._id);
    setOriginalFiles([...location.state.item.attachmentFiles]);
    setMode("edit");
    location.state = null;
  }

  const handleCancel = () => {
    navigate("/information");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const createBoard = async (e) => {
    const formData = new FormData();
    try {
      e.preventDefault();
      if (mode === "create") {
        formData.append("mode", mode);
        formData.append("title", title);
        formData.append("author", "씨뱅크");
        formData.append("contents", content);

        for (let i = 0; i < files.length; i++) {
          formData.append("files[" + i + "]", files[i].name);
        }
        for (let i = 0; i < files.length; i++) {
          formData.append("file", files[i]);
        }

        const newBoard = await fetch("http://localhost:3500/board", {
          method: "POST",
          body: formData,
        });
        const result = await newBoard.json();
        dispatch(addBoard(result));
        navigate("/information");
        console.log(result);
      } else if (mode === "edit") {
        formData.append("id", editId);
        formData.append("mode", mode);
        formData.append("title", title);
        formData.append("author", "씨뱅크");
        formData.append("contents", content);
        for (let i = 0; i < deletedFiles?.length; i++) {
          formData.append("deletedFiles[" + i + "]", deletedFiles[i]);
        }

        for (let i = 0; i < originalFiles.length; i++) {
          formData.append("files[" + i + "]", originalFiles[i]);
        }
        for (
          let i = originalFiles.length;
          i < originalFiles.length + files.length;
          i++
        ) {
          formData.append(
            "files[" + i + "]",
            files[i - originalFiles.length].name
          );
        }
        for (let i = 0; i < files.length; i++) {
          formData.append("file", files[i]);
        }

        const newBoard = await fetch("http://localhost:3500/board", {
          method: "POST",
          body: formData,
        });
        const result = await newBoard.json();
        dispatch(addBoard(result));
        navigate("/information");
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteOriginalFile = (deletedFile) => {
    const filteredFilesName = originalFiles.filter((file) => {
      // console.log(file, deletedFile)
      return file !== deletedFile;
    });
    setOriginalFiles(filteredFilesName);

    const delFiles = [...deletedFiles];
    delFiles.push(deletedFile);
    setDeletedFiles(delFiles);
    // console.log(delFiles)
  };

  const deleteFile = (deletedFile) => {
    const filteredFilesName = newFiles.filter((file) => {
      // console.log(file, deletedFile)
      return file !== deletedFile;
    });
    const filteredFiles = files.filter((file) => {
      return file.name !== deletedFile;
    });
    console.log(filteredFiles);
    setFiles(filteredFiles);
    setNewFiles(filteredFilesName);
  };

  return (
    <>
      <section className="board">
        <Back name="Write Document" title="Administrator Board" cover={img} />
        <div className="board-container container">
          <Heading
            title="게시판 작성"
            subtitle="Find new & featured property located in your local city."
          />
          <form className="shadow" onSubmit={createBoard}>
            <input
              type="text"
              placeholder="제목"
              value={title}
              onChange={handleTitleChange}
            />
            <div className="dropzone">
              <div>
                {originalFiles?.map((file, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p>{file}</p>
                    <div>
                      <MdOutlineCancel
                        size={"18px"}
                        onClick={() => deleteOriginalFile(file)}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {newFiles?.map((file, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p>{file}</p>
                    <div>
                      <MdOutlineCancel
                        size={"18px"}
                        onClick={() => deleteFile(file)}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Dropzone
                onDrop={(acceptedFiles) => {
                  for (let x of acceptedFiles) {
                    console.log(x.name);
                    newFiles.push(x.name);
                  }
                  setFiles([...files, ...acceptedFiles]);
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <div style={{ padding: "30px" }}>
                        <p>클릭해서 파일 선택하기 or 드래그 앤 드롭</p>
                      </div>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
            <textarea
              cols="30"
              rows="10"
              placeholder="작성내용"
              value={content}
              onChange={handleContentChange}
            ></textarea>
            <div className="btn-group">
              <button type="submit">제출</button>
              <button onClick={handleCancel}>취소</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Board;
