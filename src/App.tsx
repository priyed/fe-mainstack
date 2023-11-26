import * as React from "react";
import { Box, Container } from "@mui/material";
import Layout from "./layout";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Container></Container>
      </Layout>
    </BrowserRouter>
  );
}
