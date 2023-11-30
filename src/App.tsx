import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Layout from "./layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./shared/Loader";

const Dashboard = React.lazy(() => import("./pages/dashboard"));

export default function App() {
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Dashboard />
                </React.Suspense>
              }
            />
            <Route
              path="revenue"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Dashboard />
                </React.Suspense>
              }
            />
            <Route
              path="crm"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Dashboard />
                </React.Suspense>
              }
            />
            <Route
              path="analytics"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Dashboard />
                </React.Suspense>
              }
            />
            <Route
              path="apps"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Dashboard />
                </React.Suspense>
              }
            />
          </Routes>
        </Layout>
      </LocalizationProvider>
    </BrowserRouter>
  );
}
