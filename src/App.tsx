import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Suspense, lazy} from "react";
import Loader from "./components/Loader";

const Customers = lazy(() => import("./pages/Customers"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Products = lazy(() => import("./pages/Products"));
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/product" element={<Products />} />
        <Route path="/admin/customer" element={<Customers />} />
        <Route path="/admin/transaction" element={<Transactions />} />
      </Routes>
      </Suspense>
    </Router>
  );
};

export default App
