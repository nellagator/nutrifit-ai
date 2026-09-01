import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MailCheck } from "lucide-react";

import NutriFitLogo from "../components/NutriFitLogo";

export default function VerifyRegistration() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);
    setError("");

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();

    const code = otp.join("");

    // TEMPORARY OTP FOR TESTING
    // Use 1234 for now.
    //
    // Later:
    // POST /api/auth/verify-registration

    if (code === "1234") {
      setSuccess("Email verified successfully!");
      setError("");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
      setError(
        "Invalid verification code. For testing, use 1234."
      );
      setSuccess("");
    }
  };

  const handleResend = () => {
    // TEMPORARY
    //
    // Later:
    // POST /api/auth/resend-registration-otp

    setSuccess("A new OTP has been sent to your email.");
    setError("");
  };

  return (
    <div className="min-h-screen bg-[#dcffca]">

      {/* Logo */}
      <div className="absolute top-6 left-6">
        <NutriFitLogo light />
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-6">

        <div className="w-full max-w-md text-center">

          {/* Verification Icon */}
          <div className="flex justify-center mb-5">

            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">

              <MailCheck
                size={40}
                strokeWidth={2}
                className="text-[#4caf1f]"
              />

            </div>

          </div>


          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-800">
            Verify your email
          </h1>


          {/* Description */}
          <p className="text-sm text-gray-600 mt-3">
            We've sent a 4-digit verification code to
          </p>


          {/* Email */}
          <p className="text-sm font-bold text-gray-800 mt-1 break-all">
            {email || "your email address"}
          </p>


          <p className="text-xs text-gray-500 mt-2">
            Enter the code below to complete your registration.
          </p>


          {/* OTP Form */}
          <form onSubmit={handleVerify}>

            {/* OTP Inputs */}
            <div className="flex justify-center gap-3 mt-8">

              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) =>
                    handleChange(
                      e.target.value,
                      index
                    )
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e, index)
                  }
                  className="w-14 h-14 text-center text-xl font-bold bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#4caf1f] focus:border-[#4caf1f]"
                />
              ))}

            </div>


            {/* Error */}
            {error && (
              <p className="text-red-500 text-xs mt-4">
                {error}
              </p>
            )}


            {/* Success */}
            {success && (
              <p className="text-[#4caf1f] text-xs mt-4 font-semibold">
                {success}
              </p>
            )}


            {/* Resend */}
            <div className="mt-5">

              <p className="text-xs text-gray-500">
                Didn't receive the code?
              </p>

              <button
                type="button"
                onClick={handleResend}
                className="text-xs font-semibold text-green-700 hover:underline mt-1"
              >
                Resend OTP
              </button>

            </div>


            {/* Verify Button */}
            <button
              type="submit"
              className="block mx-auto mt-7 w-52 bg-[#4caf1f] hover:bg-[#3d9715] text-white font-semibold py-3 rounded-lg transition"
            >
              Verify Email
            </button>

          </form>


          {/* Back */}
          <Link
            to="/register"
            className="inline-block mt-5 text-xs text-gray-500 hover:text-green-700"
          >
            Back to Registration
          </Link>

        </div>

      </div>

    </div>
  );
}