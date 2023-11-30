import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Layout from "./layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./shared/Loader";

const Dashboard = React.lazy(() => import("./pages/dashboard"));

const AppComponent = () => (
  <React.Suspense fallback={<Loader />}>
    <Dashboard />
  </React.Suspense>
);

export default function App() {
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Layout>
          <Routes>
            <Route path="/" element={<AppComponent />} />
            <Route path="revenue" element={<AppComponent />} />
            <Route path="crm" element={<AppComponent />} />
            <Route path="analytics" element={<AppComponent />} />
            <Route path="apps" element={<AppComponent />} />
          </Routes>
        </Layout>
      </LocalizationProvider>
    </BrowserRouter>
  );
}
