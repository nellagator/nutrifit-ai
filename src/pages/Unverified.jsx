import { Link } from "react-router-dom";
import NutriFitLogo from "../components/NutriFitLogo";

export default function Unverified() {
  return (
    <div className="min-h-screen bg-[#dcffca]">

      <div className="absolute top-6 left-6">
        <NutriFitLogo light small />
      </div>


      <div className="min-h-screen flex items-center justify-center px-6">

        <div className="w-full max-w-xs bg-white rounded-xl shadow-md p-8 text-center">

          <div className="text-5xl mb-5">
            ❌
          </div>

          <h1 className="text-xl font-bold text-gray-800">
            Verification Failed
          </h1>

          <p className="text-xs text-gray-500 mt-3">
            Unable to verify your email.
            <br />
            Please try again.
          </p>


          <Link
            to="/forgot-password"
            className="block mt-7 bg-[#4caf1f] hover:bg-[#3d9715] text-white font-semibold py-3 rounded-lg transition text-sm"
          >
            Retry
          </Link>

        </div>

      </div>

    </div>
  );
}