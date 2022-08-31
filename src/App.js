import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  apiKey = "dad109b973334574bfd435305f4bf5dc";
  render() {
    return (
      <>
        {/* <News pageSize={12} apiKey={this.apiKey} category={"sports"} /> */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="general4"
                  path="/"
                  pageSize={12}
                  apiKey={this.apiKey}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              path="/home"
              element={
                <News
                  key="general2"
                  pageSize={12}
                  apiKey={this.apiKey}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={12}
                  apiKey={this.apiKey}
                  category={"business"}
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={12}
                  apiKey={this.apiKey}
                  category={"entertainment"}
                />
              }
            ></Route>
            <Route
              path="/general"
              element={
                <News
                  key="general3"
                  pageSize={12}
                  apiKey={this.apiKey}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={12}
                  apiKey={this.apiKey}
                  category={"health"}
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={12}
                  apiKey={this.apiKey}
                  category={"science"}
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <News pageSize={12} apiKey={this.apiKey} category={"sports"} />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={12}
                  apiKey={this.apiKey}
                  category={"technology"}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
