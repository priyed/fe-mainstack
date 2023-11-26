import * as React from "react";
import { Box, Container } from "@mui/material";
import Layout from "./layout";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Dashboard />
      </Layout>
    </BrowserRouter>
  );
}
