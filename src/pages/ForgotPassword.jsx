import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NutriFitLogo from "../components/NutriFitLogo";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    // Later this will call your backend API
    navigate("/verify-otp", {
      state: { email },
    });
  };

  return (
    <div className="min-h-screen bg-[#dcffca]">

      {/* Logo */}
      <div className="absolute top-6 left-6">
        <NutriFitLogo light small />
      </div>


      <div className="min-h-screen flex items-center justify-center px-6">

        <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-8 text-center">

          {/* Lock */}
          <div className="text-5xl mb-4">
            🔐
          </div>

          <h1 className="text-xl font-bold text-gray-800">
            Enter your email
          </h1>

          <p className="text-xs text-gray-500 mt-2 mb-6">
            Please enter the email you used to
            <br />
            create your account.
          </p>


          <form onSubmit={handleSubmit}>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-sm outline-none focus:ring-2 focus:ring-green-500"
            />


            <button
              type="submit"
              className="w-full mt-4 bg-[#4caf1f] hover:bg-[#3d9715] text-white font-semibold py-3 rounded-lg transition"
            >
              Send OTP
            </button>

          </form>


          <Link
            to="/login"
            className="block mt-5 text-xs text-green-700 font-semibold hover:underline"
          >
            Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
}