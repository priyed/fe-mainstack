import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Layout from "./layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="revenue" element={<Dashboard />} />
            <Route path="crm" element={<Dashboard />} />
            <Route path="analytics" element={<Dashboard />} />
            <Route path="apps" element={<Dashboard />} />
          </Routes>
        </Layout>
      </LocalizationProvider>
    </BrowserRouter>
  );
}
