import axios from "axios";
import React, { useEffect, useState } from "react";

import "../app.scss";
import { Darkbtn } from "./Darkbtn";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Editor = () => {
  const [author] = useState("author");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();
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
          '<button id="indent" class="toolbtn"><i class="fa fa-indent" aria-hidden="true"></i></div>'
      );
      document.getElementById("bold").onclick = function () {
        var selection = window.getSelection().getRangeAt(0);
        var selectedText = selection.extractContents();

        var span = document.createElement("b");

        span.appendChild(selectedText);
        selection.insertNode(span);
        var nod = span.parentNode;

        if (span.parentNode.nodeName === "B") {
          span.outerHTML = span.innerHTML;
          nod.outerHTML = nod.innerHTML;
        } else {
          span.innerHTML = span.innerText.replace(/<b>/g, "");
          span.innerHTML = span.innerText.replace(/<\/b>/g, "");
        }
      };
      document.getElementById("italic").onclick = function () {
        var selection = window.getSelection().getRangeAt(0);
        var selectedText = selection.extractContents();
        var span = document.createElement("i");
        // span.style.fontStyle = "italic";
        span.appendChild(selectedText);
        selection.insertNode(span);
        var nod = span.parentNode;
        if (span.parentNode.nodeName === "I") {
          span.outerHTML = span.innerHTML;
          nod.outerHTML = nod.innerHTML;
        } else {
          span.innerHTML = span.innerText.replace(/<i>/g, "");
          span.innerHTML = span.innerText.replace(/<\/i\>/g, "");
        }
      };
      document.getElementById("hyperlink").onclick = function () {
        var selection = window.getSelection().getRangeAt(0);
        var selectedText = selection.extractContents();
        var span = document.createElement("a");
        let url = prompt("enter url:", "https://example.com/");
        if (url === null || url === "") {
        } else {
          span.href = url;
        }

        span.appendChild(selectedText);
        selection.insertNode(span);
        var nod = span.parentNode;
        if (span.parentNode.nodeName === "A") {
          span.outerHTML = span.innerHTML;
          nod.outerHTML = nod.innerHTML;
        } else {
          span.innerHTML = span.innerText.replace(/<a>/g, "");
          span.innerHTML = span.innerText.replace(/<\/a\>/g, "");
        }
      };
      document.getElementById("title").onclick = function () {
        var selection = window.getSelection().getRangeAt(0);
        var selectedText = selection.extractContents();
        var span = document.createElement("h3");

        span.appendChild(selectedText);
        selection.insertNode(span);
        var nod = span.parentNode;
        if (span.parentNode.nodeName === "H3") {
          span.outerHTML = span.innerHTML;
          nod.outerHTML = nod.innerHTML;
        } else {
          span.innerHTML = span.innerText.replace(/<h3>/g, "");
          span.innerHTML = span.innerText.replace(/<\/h3\>/g, "");
        }
      };
      // document.getElementById("code").onclick = function () {
      //   var selection = window.getSelection().getRangeAt(0);
      //   var selectedText = selection.extractContents();
      //   var span = document.createElement("code");

      //   span.appendChild(selectedText);
      //   selection.insertNode(span);
      // };
      document.getElementById("indent").onclick = function () {
        var selection = window.getSelection().getRangeAt(0);
        var selectedText = selection.extractContents();
        var span = document.createElement("blockquote");

        span.appendChild(selectedText);
        selection.insertNode(span);
        var nod = span.parentNode;
        if (span.parentNode.nodeName === "BLOCKQUOTE") {
          span.outerHTML = span.innerHTML;
          nod.outerHTML = nod.innerHTML;
        } else {
          span.innerHTML = span.innerText.replace(/<blockquote>/g, "");
          span.innerHTML = span.innerText.replace(/<\/blockquote\>/g, "");
        }
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
              <div
                className="content-wrapper"
                style={{ background: "#ffffff47" }}
              >
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
                  <div className="tags">
                    tags <small>(comma seperated maximum 5)</small>
                    <input
                      style={{ display: "block" }}
                      type="text"
                      onChange={(e) => {
                        setTags(e.target.value);
                      }}
                    />
                  </div>
                  <br />
                  <div className="submit">
                    <input type="submit" value="submit" />
                  </div>
                </form>
                <div id="demo">{content}</div>
              </div>
            </div>
          </div>
          <div className="overlay-app"></div>
        </div>
      </div>
    </div>
  );
};
