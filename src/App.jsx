import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Authentication pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOTP from "./pages/VerifyOTP";
import VerifyRegistration from "./pages/VerifyRegistration";
import Verified from "./pages/Verified";
import Unverified from "./pages/Unverified";

// Main application pages
import Dashboard from "./pages/Dashboard";
import FoodScanner from "./pages/FoodScanner";
import Workouts from "./pages/Workouts";
import AICoach from "./pages/AICoach";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ============================================================
            DEFAULT ROUTE
        ============================================================ */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* ============================================================
            AUTHENTICATION
        ============================================================ */}

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

        {/* Forgot Password OTP */}
        <Route
          path="/verify-otp"
          element={<VerifyOTP />}
        />

        {/* Registration Email OTP */}
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

        {/* ============================================================
            MAIN APPLICATION
        ============================================================ */}

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Food Scanner */}
        <Route
          path="/food-scanner"
          element={<FoodScanner />}
        />

        {/* Workouts */}
        <Route
          path="/workouts"
          element={<Workouts />}
        />

        {/* AI Coach */}
        <Route
          path="/ai-coach"
          element={<AICoach />}
        />

        {/* Progress */}
        <Route
          path="/progress"
          element={<Progress />}
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* ============================================================
            UNKNOWN ROUTES
        ============================================================ */}

        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;