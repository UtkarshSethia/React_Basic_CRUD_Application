import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ToastContainer, toast } from "react-toastify";
import { Context } from "../App";
import "../App.css";

export default function () {
  const [data, setData] = useState({});
  const [postData, setPostData] = useState({
    id: "",
    title: "",
    body: "",
  });
  const [id, setId] = useState("");
  console.log(id);
  const [searchlist, setSearchList] = useState(""); //for getting navbar input data

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const getData = async (title, body) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: postData.title,
        body: postData.body,
        id: data.length,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((newData) => {
        setData([...data, newData]);
        // dispatch(updatePostList([...data, newData]));
        // dispatch(renderInitialPostList([...data, newData]));
      });
  };

  const clearPostForm = () => {
    setPostData({
      title: "",
      body: "",
    });
  };
  const addDataHandler = (e) => {
    e.preventDefault();
    if (id === "") {
      getData();
      clearPostForm();
      setId("");
      toast("Post Data Added Successfully", { theme: "light" });
    } else {
      console.log(id);
      let editData = data;
      editData[id].title = postData.title;
      editData[id].body = postData.body;

      setData(editData);

      setId("");
      clearPostForm();
      toast(" Data Edited  Successfully", { theme: "light" });
    }
  };

  const deletePostHandler = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    }).then(
      setData(
        data.filter((item) => {
          return item.id !== postId;
        })
      )
    );
    console.log(data);
    setId("");
    clearPostForm();
    toast(" Data Deleted Successfully", { theme: "light" });
  };

  return (
    <Box>
      <ToastContainer position="top-center" autoClose={1500} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box
          component="div"
          sx={{
            padding: "40px",
            border: "1px dashed black",
            m: 4,
            borderRadius: "10px",
            width: "400px",
          }}
        >
          <form onSubmit={addDataHandler}>
            <TextField
              className="inp_box_posts"
              sx={{ backgroundColor: "white", width: "320px" }}
              required
              value={postData.title}
              onChange={(e) => {
                setPostData({ ...postData, title: e.target.value });
              }}
              placeholder="Header*"
              type="text"
              id="outlined-basic"
              label="Header"
              variant="outlined"
            />
            <br />
            <br />

            <textarea
              className="text_area"
              placeholder="Description*"
              value={postData.body}
              onChange={(e) => {
                setPostData({ ...postData, body: e.target.value });
              }}
            ></textarea>
            <br />
            <br />
            <Button
              style={{ marginTop: "10px" }}
              size="large"
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              {id !== "" ? "Update" : "Create"}
            </Button>
          </form>
        </Box>
      </div>
      <Context.Consumer>
        {(res) => setSearchList(res.searchList)}
      </Context.Consumer>
      <br />
      Post Data{" "}
      {data.length > 0 &&
        data
          .filter((item) => {
            return searchlist.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(searchlist.toLowerCase());
          })
          .map((post, index) => {
            return (
              <div className="card_cont post_cont post">
                <div className="title">
                  <h4> {post.title.toUpperCase()}</h4>
                  <div>
                    <Button
                      sx={{ m: 1 }}
                      onClick={() => {
                        setPostData({
                          title: data[index].title,
                          body: data[index].body,
                        });
                        setId(index);
                      }}
                      size="medium"
                      startIcon={<EditIcon style={{ paddingLeft: "10px" }} />}
                      variant="outlined"
                      color="success"
                    ></Button>{" "}
                    <Button
                      sx={{ m: 1 }}
                      variant="outlined"
                      size="medium"
                      color="error"
                      onClick={() => {
                        deletePostHandler(post.id);
                      }}
                      startIcon={<DeleteIcon style={{ paddingLeft: "7px" }} />}
                    ></Button>
                  </div>
                </div>

                <div className="body">
                  <p> {post.body}</p>
                </div>
                <div className="but_cont"></div>
              </div>
            );
          })}
    </Box>
  );
}
