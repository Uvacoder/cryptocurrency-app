import React from "react";
import { Router, Link, Route, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer" level={5}>
          <Typography.Title style={{ color: "white", textAlign: "center" }}>
            CryptoApp <br />
            All rights reserverd
          </Typography.Title>
          <Space>
            <Link to="/"> Home</Link>
            <Link to="/exchanges"> Exchanges</Link>
            <Link to="/News"> News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
