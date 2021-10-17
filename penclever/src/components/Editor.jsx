import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link45deg } from "react-bootstrap-icons";
import "../app.scss";
import { Darkbtn } from "./Darkbtn";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
export const Editor = () => {
  const [author, setAuthor] = useState("author");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();
  const [tags, setTags] = useState("");
  const [bold, setBold] = useState(false);

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
        alert(err);
      });
  };

  const selectedText = (e) => {
    if (document.contains(document.getElementById("share-snippet"))) {
      document.getElementById("share-snippet").remove();
    }
    if (window.getSelection().toString()) {
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
      document.body.insertAdjacentHTML(
        "beforeend",
        '<div id="share-snippet"  style="position: absolute; top: ' +
          posY +
          "px; left: " +
          posX +
          'px;"> <button id="bold" class="toolbtn"> B </button>' +
          '<button id="italic" class="toolbtn"><i> i </i> </button>' +
          '<button id="hyperlink" class="toolbtn"><i class="fa fa-link" aria-hidden="true"></i></button>' +
          '<button id="title" class="toolbtn">T</button>' +
          '<button id="code" class="toolbtn"><i class="fa fa-code" aria-hidden="true"></i></button>' +
          '<button id="indent" class="toolbtn"><i class="fa fa-indent" aria-hidden="true"></i></div>'
      );
      document.getElementById("bold").onclick = function () {
        var selection = window.getSelection().getRangeAt(0);
        var selectedText = selection.extractContents();

        var span = document.createElement("span");

        if (span.style.fontWeight === "900") {
          span.style.fontWeight = "400";
          span.style.color = "white";
          setBold(false);
        } else {
          span.style.fontWeight = "900";
          span.style.color = "white";
          setBold(true);
        }

        span.appendChild(selectedText);
        selection.insertNode(span);
      };
      document.getElementById("italic").onclick = function () {
        var selection = window.getSelection().getRangeAt(0);
        var selectedText = selection.extractContents();
        var span = document.createElement("span");
        span.style.fontStyle = "italic";
        span.appendChild(selectedText);
        selection.insertNode(span);
      };
      document.getElementById("hyperlink").onclick = function () {
        var selection = window.getSelection().getRangeAt(0);
        var selectedText = selection.extractContents();
        var span = document.createElement("a");
        span.href = "/";
        span.appendChild(selectedText);
        selection.insertNode(span);
      };
      document.getElementById("title").onclick = function () {
        var selection = window.getSelection().getRangeAt(0);
        var selectedText = selection.extractContents();
        var span = document.createElement("span");
        span.style.fontSize = "25px";
        span.style.fontWeight = "700";
        span.appendChild(selectedText);
        selection.insertNode(span);
      };
      document.getElementById("code").onclick = function () {
        var selection = window.getSelection().getRangeAt(0);
        var selectedText = selection.extractContents();
        var span = document.createElement("code");

        span.appendChild(selectedText);
        selection.insertNode(span);
      };
      document.getElementById("indent").onclick = function () {
        var selection = window.getSelection().getRangeAt(0);
        var selectedText = selection.extractContents();
        var span = document.createElement("span");
        span.style.paddingLeft = "40px";
        span.appendChild(selectedText);
        selection.insertNode(span);
      };
    }
  };
  setInterval(function () {
    setTitle(document.getElementById("autoresizing1").innerHTML);
    setContent(document.getElementById("autoresizing").innerHTML);
  }, 1000);

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
                  <div
                    id="autoresizing1"
                    className="edit_title"
                    onMouseUpCapture={(e) => {
                      selectedText(e);
                    }}
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                  >
                    Title
                  </div>
                  <div
                    id="autoresizing"
                    className="edit_content"
                    onMouseUpCapture={(e) => {
                      selectedText(e);
                    }}
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                  >
                    Your content goes here
                  </div>
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
    </div>
  );
};
