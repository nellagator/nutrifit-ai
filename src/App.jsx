import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// ============================================================
// AUTHENTICATION PAGES
// ============================================================

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOTP from "./pages/VerifyOTP";
import VerifyRegistration from "./pages/VerifyRegistration";
import Verified from "./pages/Verified";
import Unverified from "./pages/Unverified";

// ============================================================
// APPLICATION PAGES
// ============================================================

import Dashboard from "./pages/Dashboard";
import FoodScanner from "./pages/FoodScanner";
import Workouts from "./pages/Workouts";
import AICoach from "./pages/AICoach";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";

// ============================================================
// THEME
// ============================================================

import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>

          {/* ==================================================
              AUTHENTICATION
          ================================================== */}

          <Route
            path="/"
            element={
              <Navigate
                to="/login"
                replace
              />
            }
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          <Route
            path="/verify-otp"
            element={<VerifyOTP />}
          />

          <Route
            path="/verify-registration"
            element={<VerifyRegistration />}
          />

          <Route
            path="/verified"
            element={<Verified />}
          />

          <Route
            path="/unverified"
            element={<Unverified />}
          />

          {/* ==================================================
              APPLICATION
          ================================================== */}

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/food-scanner"
            element={<FoodScanner />}
          />

          <Route
            path="/workouts"
            element={<Workouts />}
          />

          <Route
            path="/ai-coach"
            element={<AICoach />}
          />

          <Route
            path="/progress"
            element={<Progress />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          {/* ==================================================
              FALLBACK
          ================================================== */}

          <Route
            path="*"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}