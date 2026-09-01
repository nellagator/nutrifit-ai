import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  CalendarDays,
  Ruler,
  Weight,
  UserRound,
  Target,
  UserPlus,
} from "lucide-react";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const email = formData.get("email");

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    /*
      TEMPORARY FRONTEND FLOW

      Later:

      POST /api/auth/register

      Backend will:
      1. Validate user information
      2. Check if email is already registered
      3. Generate OTP
      4. Send OTP to email
      5. Store temporary registration
    */

    navigate("/verify-registration", {
      state: {
        email,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#1c1c1c] flex">

      {/* =====================================================
          LEFT - REGISTRATION FORM
      ====================================================== */}

      <div className="w-full lg:w-1/2 bg-[#dcffca] flex items-center justify-center px-6 py-8">

        <div className="w-full max-w-md">

          {/* Mobile branding */}
          <div className="lg:hidden flex flex-col items-center mb-6">

            <img
              src="/nutrifit-logo.png"
              alt="NutriFit AI Logo"
              className="w-20 h-20 object-contain"
            />

            <h1 className="text-2xl font-bold text-[#3d9715]">
              NutriFit AI
            </h1>

          </div>


          {/* Registration Card */}
          <div className="bg-[#a9d98d] rounded-2xl p-6 shadow-sm">

            <div className="mb-5">

              <h2 className="text-xl font-bold text-gray-800">
                Create Your Account
              </h2>

              <p className="text-xs text-gray-600 mt-1">
                Start your healthy lifestyle today!
              </p>

            </div>


            <form
              onSubmit={handleRegister}
              className="space-y-2.5"
            >

              {/* =========================================
                  FULL NAME
              ========================================== */}

              <div className="relative">

                <User
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600"
                />

                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white border border-gray-300 text-xs outline-none focus:ring-2 focus:ring-green-500"
                />

              </div>


              {/* =========================================
                  EMAIL
              ========================================== */}

              <div className="relative">

                <Mail
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white border border-gray-300 text-xs outline-none focus:ring-2 focus:ring-green-500"
                />

              </div>


              {/* =========================================
                  PASSWORD
              ========================================== */}

              <div className="relative">

                <LockKeyhole
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600"
                />

                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  minLength="8"
                  className="w-full pl-9 pr-10 py-2.5 rounded-lg bg-white border border-gray-300 text-xs outline-none focus:ring-2 focus:ring-green-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-800"
                >
                  {showPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>

              </div>


              {/* =========================================
                  CONFIRM PASSWORD
              ========================================== */}

              <div className="relative">

                <LockKeyhole
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600"
                />

                <input
                  name="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm Password"
                  required
                  minLength="8"
                  className="w-full pl-9 pr-10 py-2.5 rounded-lg bg-white border border-gray-300 text-xs outline-none focus:ring-2 focus:ring-green-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-800"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>

              </div>


              {/* =========================================
                  AGE / HEIGHT / WEIGHT
              ========================================== */}

              <div className="grid grid-cols-3 gap-2">

                {/* Age */}
                <div className="relative">

                  <CalendarDays
                    size={14}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 text-green-600"
                  />

                  <input
                    name="age"
                    type="number"
                    placeholder="Age"
                    min="1"
                    required
                    className="w-full pl-7 pr-2 py-2.5 rounded-lg bg-white border border-gray-300 text-xs outline-none focus:ring-2 focus:ring-green-500"
                  />

                </div>


                {/* Height */}
                <div className="relative">

                  <Ruler
                    size={14}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 text-green-600"
                  />

                  <input
                    name="height"
                    type="text"
                    placeholder="Height"
                    required
                    className="w-full pl-7 pr-2 py-2.5 rounded-lg bg-white border border-gray-300 text-xs outline-none focus:ring-2 focus:ring-green-500"
                  />

                </div>


                {/* Weight */}
                <div className="relative">

                  <Weight
                    size={14}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 text-green-600"
                  />

                  <input
                    name="weight"
                    type="text"
                    placeholder="Weight"
                    required
                    className="w-full pl-7 pr-2 py-2.5 rounded-lg bg-white border border-gray-300 text-xs outline-none focus:ring-2 focus:ring-green-500"
                  />

                </div>

              </div>


              {/* =========================================
                  GENDER
              ========================================== */}

              <div>

                <p className="text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1.5">

                  <UserRound
                    size={13}
                    className="text-green-700"
                  />

                  Gender

                </p>


                <div className="grid grid-cols-3 gap-2">

                  <label className="bg-white rounded-lg px-2 py-2 text-center text-xs cursor-pointer border border-transparent has-[:checked]:border-green-600">

                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      required
                      className="mr-1 accent-green-600"
                    />

                    Male

                  </label>


                  <label className="bg-white rounded-lg px-2 py-2 text-center text-xs cursor-pointer border border-transparent has-[:checked]:border-green-600">

                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="mr-1 accent-green-600"
                    />

                    Female

                  </label>


                  <label className="bg-white rounded-lg px-2 py-2 text-center text-xs cursor-pointer border border-transparent has-[:checked]:border-green-600">

                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      className="mr-1 accent-green-600"
                    />

                    Other

                  </label>

                </div>

              </div>


              {/* =========================================
                  FITNESS GOAL
              ========================================== */}

              <div className="relative">

                <Target
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600 pointer-events-none"
                />

                <select
                  name="fitnessGoal"
                  required
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white border border-gray-300 text-xs outline-none focus:ring-2 focus:ring-green-500"
                >

                  <option value="">
                    Select your goal
                  </option>

                  <option value="lose-weight">
                    Lose Weight
                  </option>

                  <option value="gain-muscle">
                    Gain Muscle
                  </option>

                  <option value="maintain">
                    Maintain Weight
                  </option>

                  <option value="healthy">
                    Improve Overall Health
                  </option>

                </select>

              </div>


              {/* =========================================
                  TERMS
              ========================================== */}

              <label className="flex gap-2 items-start text-[10px] text-gray-600">

                <input
                  type="checkbox"
                  required
                  className="mt-0.5 accent-green-600"
                />

                <span>
                  I agree to the Terms of Service and
                  Privacy Policy.
                </span>

              </label>


              {/* =========================================
                  CREATE ACCOUNT
              ========================================== */}

              <button
                type="submit"
                className="w-full bg-[#4caf1f] hover:bg-[#3d9715] text-white font-semibold py-2.5 rounded-lg transition text-sm flex items-center justify-center gap-2"
              >

                <UserPlus size={16} />

                Create Account

              </button>

            </form>


            {/* Login */}
            <p className="text-center text-xs text-gray-600 mt-4">

              Already have an account?{" "}

              <Link
                to="/login"
                className="font-bold text-green-700 hover:underline"
              >
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          RIGHT - BRANDING
      ====================================================== */}

      <div className="hidden lg:flex lg:w-1/2 bg-[#24680d] items-center justify-center">

        <div className="text-center max-w-md px-8">

          <img
            src="/nutrifit-logo.png"
            alt="NutriFit AI Logo"
            className="w-80 h-80 object-contain mx-auto mb-5"
          />

          <h1 className="text-5xl font-bold text-[#64bd3c]">
            NutriFit AI
          </h1>

          <p className="text-white/80 mt-4 text-sm leading-relaxed">
            Your Food. Your Fitness. Your Future.
            <br />
            Scan. Understand. Improve.
          </p>

        </div>

      </div>

    </div>
  );
}