import React from "react";
import "../app.scss";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Stats = () => {
  return (
    <div className="body">
      <div className="app">
        <Header />
        <div className="wrapper">
          <Sidebar />
          <div className="main-container">
            <div className="content-wrapper">
              <div className="content-section">
                <div class="profilename">Aditya Ray</div>
                <div className="apps-card">
                  <div className="app-card2">
                    <span>Views</span>
                    <div className="app-card2__subtext2">452 Views</div>
                  </div>
                  <div className="app-card2">
                    <span>Followers</span>
                    <div className="app-card2__subtext2">452 followers</div>
                  </div>
                  <div className="app-card2">
                    <span>Following</span>
                    <div className="app-card2__subtext2">30 following</div>
                  </div>
                  <div className="app-card2">
                    <span>Comments</span>
                    <div className="app-card2__subtext2">500 Comments</div>
                  </div>
                  <div className="app-card2">
                    <span>Likes</span>
                    <div className="app-card2__subtext2">1593 Likes</div>
                  </div>
                  <div className="app-card2">
                    <span>Share</span>
                    <div className="app-card2__subtext2">500 Share</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay-app"></div>
      </div>
    </div>
  );
};
