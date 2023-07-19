import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "../App.css";

export default function () {
  const [data, setData] = useState({});
  const [postData, setPostData] = useState({
    id: "",
    title: "",
    body: "",
  });

  const [id, setId] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const getData = async (title, body) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "This is a Title",
        body: "This is a body",
        id: data.length,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((newData) => setData([...data, newData]));
  };

  const addDataHandler = (e) => {
    e.preventDefault();
    getData();
    setPostData({
      title: "",
      body: "",
    });
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
  };

  return (
    <Box>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box
          component="div"
          sx={{
            p: 4,
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
              placeholder="title"
              type="text"
              id="outlined-basic"
              label="Title"
              variant="outlined"
            />
            <br />
            <br />

            <textarea
              className="text_area"
              placeholder="Body*"
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
              {id !== "" ? "Update" : "Send"}
            </Button>
          </form>
        </Box>
      </div>
      <br />
      Post Data
      {data.length > 0 &&
        data.map((post) => {
          return (
            <div className="card_cont post_cont post">
              <div className="title">
                <h4>Title: {post.title.toUpperCase()}</h4>
                <div>
                  <Button
                    sx={{ m: 1 }}
                    onClick={() => {
                      setPostData({
                        title: data[post.id - 1].title,
                        body: data[post.id - 1].body,
                      });
                      setId(post.id);
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
                <h4>Body: {post.body}</h4>
              </div>
              <div className="but_cont"></div>
            </div>
          );
        })}
    </Box>
  );
}
