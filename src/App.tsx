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
import Inventory from "./components/inventory/Inventory";
import Providers from "./components/providers/Providers";
import LiveStream from "./components/livestream/LiveStream";
import Landing from "./components/marketing/Landing";
import Subscription from "./components/marketing/Subscription";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="store" element={<StoreManager />} />
          <Route path="products" element={<Products />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="orders" element={<Orders />} />
          <Route path="livestream" element={<LiveStream />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="providers" element={<Providers />} />
          <Route path="support" element={<Support />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
