import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NutriFitLogo from "../components/NutriFitLogo";

export default function VerifyOTP() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "your email";

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");

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

    // Demo OTP
    if (code === "1234") {
      navigate("/verified");
    } else {
      setError("Invalid OTP. For testing, use 1234.");
    }
  };


  return (
    <div className="min-h-screen bg-[#dcffca]">

      {/* Logo */}
      <div className="absolute top-6 left-6">
        <NutriFitLogo light small />
      </div>


      <div className="min-h-screen flex items-center justify-center px-6">

        <div className="w-full max-w-md text-center">

          <h1 className="text-xl font-bold text-gray-800">
            Verify your email
          </h1>

          <p className="text-xs text-gray-600 mt-3">
            We've sent a 4-digit code to
          </p>

          <p className="text-sm font-semibold text-gray-800 mt-1">
            {email}
          </p>


          <form onSubmit={handleVerify}>

            {/* OTP */}
            <div className="flex justify-center gap-3 mt-8">

              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={digit}
                  onChange={(e) =>
                    handleChange(e.target.value, index)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e, index)
                  }
                  className="w-14 h-14 text-center text-xl font-bold bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                />
              ))}

            </div>


            {error && (
              <p className="text-red-500 text-xs mt-4">
                {error}
              </p>
            )}


            <p className="text-xs text-gray-500 mt-5">
              Didn't receive the code?
            </p>

            <button
              type="button"
              className="text-xs font-semibold text-green-700 hover:underline mt-1"
            >
              Resend OTP
            </button>


            <button
              type="submit"
              className="block mx-auto mt-7 w-52 bg-[#4caf1f] hover:bg-[#3d9715] text-white font-semibold py-3 rounded-lg transition"
            >
              Verify
            </button>

          </form>


          <Link
            to="/forgot-password"
            className="inline-block mt-5 text-xs text-gray-500 hover:text-green-700"
          >
            Change email
          </Link>

        </div>

      </div>

    </div>
  );
}