import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  KeyRound,
  LogIn,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary frontend login
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#1c1c1c] flex">

{/*==============================================================================================================================
                                                    <- LEFT SIDE PANEL
==============================================================================================================================*/}

      <div className="hidden md:flex md:w-1/2 bg-[#24680d] items-center justify-center">

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


{/*==============================================================================================================================
                                                RIGHT SIDE PANEL ->
==============================================================================================================================*/}

      <div className="w-full md:w-1/2 bg-[#dcffca] flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-md">

          {/* Mobile branding */}
          <div className="md:hidden flex flex-col items-center mb-8">

            <img
              src="/nutrifit-logo.png"
              alt="NutriFit AI Logo"
              className="w-40 h-40 object-contain"
            />

            <h1 className="text-2xl font-bold text-[#3d9715] mt-1">
              NutriFit AI
            </h1>

          </div>


          {/* Login Card */}
          <div className="bg-[#a9d98d] rounded-2xl p-8 shadow-sm">

            <div className="text-center mb-6">

              <h2 className="text-xl font-bold text-gray-800">
                Welcome Back!
              </h2>

              <p className="text-xs text-gray-600 mt-1">
                Login to continue your journey
              </p>

            </div>


            <form
              onSubmit={handleLogin}
              className="space-y-4"
            >

{/*==============================================================================================================================
                                                    EMAIL INPUT
==============================================================================================================================*/}

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
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white border border-gray-300 text-sm outline-none focus:ring-2 focus:ring-green-500"
                />

              </div>

{/*==============================================================================================================================
                                                  PASSWORD INPUT
==============================================================================================================================*/}

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
                  className="w-full pl-9 pr-10 py-2.5 rounded-lg bg-white border border-gray-300 text-sm outline-none focus:ring-2 focus:ring-green-500"
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


{/*==============================================================================================================================
                                                REMEMBER ME & FORGOT PASSWORD
==============================================================================================================================*/}

              <div className="flex items-center justify-between text-[10px]">

                <label className="flex items-center gap-1.5 text-gray-600">

                  <input
                    type="checkbox"
                    className="accent-green-600"
                  />

                  Remember me

                </label>


                <Link
                  to="/forgot-password"
                  className="text-green-700 font-semibold hover:underline flex items-center gap-1"
                >

                  <KeyRound size={11} />

                  Forgot Password?

                </Link>

              </div>


{/*==============================================================================================================================
                                                    LOGIN BUTTON
==============================================================================================================================*/}

              <button
                type="submit"
                className="w-full bg-[#4caf1f] hover:bg-[#3d9715] text-white font-semibold py-2.5 rounded-lg transition flex items-center justify-center gap-2"
              >

                <LogIn size={16} />

                Login

              </button>

            </form>


            {/* Divider */}
            <div className="flex items-center gap-3 my-5">

              <div className="h-px bg-gray-400/50 flex-1" />

              <span className="text-[10px] text-gray-500">
                or continue with
              </span>

              <div className="h-px bg-gray-400/50 flex-1" />

            </div>


            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              {/* GOOGLE */}
              <button
                type="button"
                className="bg-white rounded-lg py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-2"
              >
                <FcGoogle size={18} />
                Google
              </button>

              {/* FACEBOOK */}
              <button
                type="button"
                className="bg-white rounded-lg py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-2"
              >
                <FaFacebookF
                  size={17}
                  className="text-[#1877F2]"
                />
                Facebook
              </button>

            </div>


            {/* Register */}
            <p className="text-center text-xs text-gray-600 mt-6">

              Don't have an account?{" "}

              <Link
                to="/register"
                className="font-bold text-green-700 hover:underline"
              >
                Register
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}