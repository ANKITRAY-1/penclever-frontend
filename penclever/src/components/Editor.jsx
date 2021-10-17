import axios from "axios";
import React, { useEffect, useState } from "react";

import "../app.scss";
import { Darkbtn } from "./Darkbtn";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
export const Editor = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  useEffect(() => {
    var textarea = document.querySelector("#autoresizing");
    textarea.addEventListener("input", autoResize, false);
    var textarea1 = document.querySelector("#autoresizing1");
    textarea1.addEventListener("input", autoResize, false);
    function autoResize() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    }
  });
  const postBlog = () => {
    const url = "http://localhost:8000/api/blog/";
    const payload = {
      author: author,
      title: title,
      content: content,
      tags: tags,
    };
    axios
      .post(url, payload)
      .then((res) => {
        console.log(payload);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const selectedText = (e) => {
    if (document.contains(document.getElementById("share-snippet"))) {
      document.getElementById("share-snippet").remove();
    }
    if (window.getSelection().toString()) {
      // document.querySelector(".toolbar").style.display = "block";
      // document.querySelector(".toolbar").innerHTML = window
      //   .getSelection()
      //   .toString();
      var scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;

      // Get cursor position
      const posX = e.clientX - 110;
      const posY = e.clientY + 20 + scrollTop;
      // document.querySelector(".toolbar").style.top = posX + "px";
      // document.querySelector(".toolbar").style.left = posY + "px";
      document.body.insertAdjacentHTML(
        "beforeend",
        '<div id="share-snippet"  style="position: absolute; top: ' +
          posY +
          "px; left: " +
          posX +
          'px;"><div class="speech-bubble"><div class="share-inside">B | home | Y</div></div></div>'
      );
    }
  };
  return (
    <div>
      <div className="body">
        <Darkbtn />
        <div className="app">
          <Header />
          <div className="wrapper">
            <Sidebar />
            <div className="main-container">
              <div className="content-wrapper">
                <div className="toolbar">hello</div>
                <form
                  onSubmit={() => {
                    postBlog();
                  }}
                >
                  <textarea
                    id="autoresizing1"
                    onChange={() => {
                      setTitle();
                    }}
                    className="edit_title"
                    placeholder="Title.."
                    maxLength="80"
                    onMouseUpCapture={(e) => {
                      selectedText(e);
                    }}
                  ></textarea>
                  <textarea
                    id="autoresizing"
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                    className="edit_content"
                    placeholder="Your content goes here..."
                    maxLength="8000"
                    onMouseUpCapture={(e) => {
                      selectedText(e);
                    }}
                  />
                  <br />
                  tags{" "}
                  <input
                    type="text"
                    onChange={(e) => {
                      setTags(e.target.value);
                    }}
                  />
                  <br />
                  <input type="submit" value="submit" />
                </form>
              </div>
            </div>
          </div>
          <div className="overlay-app"></div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};
