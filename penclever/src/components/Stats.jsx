import React from "react";
import {
  HandThumbsUpFill,
  ChatFill,
  ShareFill,
  PersonPlusFill,
} from "react-bootstrap-icons";
import p from "../img/19.png";

export const Stats = () => {
  return (
    <div>
      <div className="card">
        <button id="myBtn">Stats</button>
        <h1 style={{ paddingTop: "10px" }}>8,79,615</h1>
        <p>Views</p>
        <table>
          <tr>
            <td>10,523</td>
            <td>20,511</td>
            <td>500</td>
            <td>1,528</td>
          </tr>
          <tr>
            <td>
              <ChatFill color="green" size={20} />
            </td>
            <td>
              <HandThumbsUpFill color="blue" size={20} />
            </td>
            <td>
              <ShareFill color="grey" size={20} />
            </td>
            <td>
              <PersonPlusFill color="rgb(255, 77, 77)" size={20} />
            </td>
          </tr>
        </table>
        <hr />
        <div style={{ overflowX: "auto",padding:"5px" }}>
          <table>
            <tr>
              <th></th>
              <th>Science</th>
              <th>Tecnology</th>
              <th>Nature</th>
              <th>People</th>
              <th>History</th>
              <th>Defence</th>
              <th>Politics</th>
              <th>Sports</th>
              <th>Others</th>
            </tr>
            <tr>
              <td>Article</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>3</td>
              <td>4</td>
              <td>6</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </table>
        </div>
        <h5>Most Popular Article</h5>
        <div className="cardnext">
          <a className="abadab" href="/indianspacestation">
            <img
              src={p}
              alt="img"
              height="55px"
              width="27%"
              align="left"
              hspace="5px"
            />
            Indian space station : importance and challenges
          </a>
        </div>
      </div>
    </div>
  );
};
