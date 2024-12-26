import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Dashboard from "./components/dashboard/Dashboard";
import Products from "./components/products/Products";
import Orders from "./components/orders/Orders";
import Analytics from "./components/analytics/Analytics";
import Marketing from "./components/marketing/Marketing";
import Reviews from "./components/reviews/Reviews";
import Support from "./components/support/Support";
import Profile from "./components/profile/Profile";
import Settings from "./components/settings/Settings";
import StoreManager from "./components/store/Store";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/store" element={<StoreManager />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/support" element={<Support />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
