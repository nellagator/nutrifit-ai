import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Home,
  Camera,
  Dumbbell,
  Bot,
  BarChart3,
  User,
  LogOut,
  Upload,
  ChevronRight,
  ChevronDown,
  Moon,
  Sun,
  Bell,
} from "lucide-react";

export default function FoodScanner() {
  const navigate = useNavigate();

  // ============================================================
  // STATE
  // ============================================================

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("nutrifit-theme") === "dark";
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const profileMenuRef = useRef(null);

  // ============================================================
  // SAVE THEME
  // ============================================================

  useEffect(() => {
    localStorage.setItem(
      "nutrifit-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  // ============================================================
  // CLOSE PROFILE DROPDOWN WHEN CLICKING OUTSIDE
  // ============================================================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // ============================================================
  // NAVIGATION ITEMS
  // ============================================================

  const menuItems = [
    {
      name: "Dashboard",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "Food Scanner",
      icon: Camera,
      path: "/food-scanner",
    },
    {
      name: "Workouts",
      icon: Dumbbell,
      path: "/workouts",
    },
    {
      name: "AI Coach",
      icon: Bot,
      path: "/ai-coach",
    },
    {
      name: "Progress",
      icon: BarChart3,
      path: "/progress",
    },
    {
      name: "Profile",
      icon: User,
      path: "/profile",
    },
  ];

  // ============================================================
  // RECENT SCANS
  // ============================================================

  const recentScans = [
    {
      name: "Mixed Fruits",
      calories: "250 kcal",
      image: "/mixed-fruits.jpg",
      time: "Today, 12:45 PM",
    },
    {
      name: "Vegetable Macaroni",
      calories: "450 kcal",
      image: "/vegetable-macaroni.jpg",
      time: "Today, 8:15 AM",
    },
    {
      name: "Vegetable Salad",
      calories: "320 kcal",
      image: "/vegetable-salad.jpg",
      time: "Today, 7:30 AM",
    },
  ];

  // ============================================================
  // NAVIGATION
  // ============================================================

  const handleNavigation = (path) => {
    setShowProfileMenu(false);
    navigate(path);
  };

  // ============================================================
  // LOGOUT
  // ============================================================

  const handleLogout = () => {
    setShowProfileMenu(false);

    // Remove login information if you are storing it
    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  };

  // ============================================================
  // IMAGE UPLOAD
  // ============================================================

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setSelectedImage(imageUrl);
  };

  // ============================================================
  // RETURN
  // ============================================================

  return (
    <div
      className={`flex min-h-screen p-2 transition-colors ${
        darkMode
          ? "bg-[#111111]"
          : "bg-[#1c1c1c]"
      }`}
    >
      {/* ============================================================
                                      SIDEBAR
      ============================================================ */}

      <aside
        className={`flex w-[195px] flex-col rounded-l-lg shadow-md transition-colors ${
          darkMode
            ? "bg-[#222222] text-white"
            : "bg-white text-black"
        }`}
      >
        {/* ============================================================
                                      LOGO
        ============================================================ */}

        <div className="flex items-center gap-2 px-4 py-5">
          <img
            src="/nutrifit-logo.png"
            alt="NutriFit AI"
            className="h-9 w-9 object-contain"
          />

          <span className="text-xl font-bold text-[#4CAF2F]">
            NutriFit AI
          </span>
        </div>

        {/* ============================================================
                                      NAVIGATION
        ============================================================ */}

        <nav className="mt-7 flex flex-1 flex-col gap-2 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active =
              item.name === "Food Scanner";

            return (
              <button
                key={item.name}
                type="button"
                onClick={() =>
                  handleNavigation(item.path)
                }
                className={`flex items-center gap-3 rounded-md px-4 py-2.5 text-left text-sm font-semibold transition ${
                  active
                    ? "border-l-2 border-[#4CAF2F] bg-[#dcffcc] text-[#4CAF2F]"
                    : darkMode
                    ? "text-gray-400 hover:bg-[#333333] hover:text-[#4CAF2F]"
                    : "text-gray-400 hover:bg-gray-100 hover:text-[#4CAF2F]"
                }`}
              >
                <Icon size={19} />

                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* ============================================================
                                      SIDEBAR LOGOUT
        ============================================================ */}

        <button
          type="button"
          onClick={handleLogout}
          className={`mx-2 mb-4 flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-semibold text-red-500 transition ${
            darkMode
              ? "hover:bg-[#333333]"
              : "hover:bg-red-50"
          }`}
        >
          <LogOut size={19} />

          <span>Log Out</span>
        </button>
      </aside>

      {/* ============================================================
                                      MAIN AREA
      ============================================================ */}

      <main
        className={`relative flex-1 overflow-auto rounded-r-lg p-5 transition-colors ${
          darkMode
            ? "bg-[#181818] text-white"
            : "bg-white text-black"
        }`}
      >
        {/* ============================================================
                                      TOP HEADER
        ============================================================ */}

        <header
          className={`mb-5 flex items-center justify-between ${
            darkMode
              ? "border-gray-700"
              : "border-gray-200"
          }`}
        >
          {/* PAGE TITLE */}

          <div>
            <h1 className="text-2xl font-bold">
              Scanner
            </h1>

            <p
              className={`mt-1 text-sm ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-500"
              }`}
            >
              Scan or upload a photo of your food.
            </p>
          </div>

          {/* ========================================================
                                      RIGHT HEADER
          ======================================================== */}

          <div className="flex items-center gap-5">
            {/* ======================================================
                                      NOTIFICATION
            ====================================================== */}

            <button
              type="button"
              className={`relative rounded-lg p-2 transition ${
                darkMode
                  ? "hover:bg-[#333333]"
                  : "hover:bg-gray-100"
              }`}
            >
              <Bell
                size={21}
                className={
                  darkMode
                    ? "text-gray-300"
                    : "text-gray-500"
                }
              />

              {/* RED NOTIFICATION DOT */}

              <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500" />
            </button>

            {/* ======================================================
                                      PROFILE DROPDOWN
            ====================================================== */}

            <div
              ref={profileMenuRef}
              className="relative"
            >
              {/* PROFILE BUTTON */}

              <button
                type="button"
                onClick={() =>
                  setShowProfileMenu(
                    !showProfileMenu
                  )
                }
                className={`flex items-center gap-2 rounded-lg p-1.5 transition ${
                  darkMode
                    ? "hover:bg-[#333333]"
                    : "hover:bg-gray-100"
                }`}
              >
                {/* PROFILE ICON */}

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-300">
                  <User
                    size={22}
                    className="text-white"
                  />
                </div>

                {/* NAME */}

                <span className="text-sm font-bold">
                  John Lim
                </span>

                {/* ARROW */}

                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform ${
                    showProfileMenu
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {/* ====================================================
                                      DROPDOWN MENU
              ==================================================== */}

              {showProfileMenu && (
                <div
                  className={`absolute right-0 top-12 z-50 w-52 overflow-hidden rounded-xl border shadow-xl ${
                    darkMode
                      ? "border-gray-700 bg-[#252525]"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {/* ==================================================
                                      PROFILE
                  ================================================== */}

                  <button
                    type="button"
                    onClick={() =>
                      handleNavigation(
                        "/profile"
                      )
                    }
                    className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition ${
                      darkMode
                        ? "hover:bg-[#333333]"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <User
                      size={18}
                      className="text-[#4CAF2F]"
                    />

                    <div>
                      <p className="font-semibold">
                        Profile
                      </p>

                      <p className="text-[10px] text-gray-500">
                        View your profile
                      </p>
                    </div>
                  </button>

                  {/* ==================================================
                                      THEME
                  ================================================== */}

                  <button
                    type="button"
                    onClick={() =>
                      setDarkMode(!darkMode)
                    }
                    className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition ${
                      darkMode
                        ? "hover:bg-[#333333]"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {darkMode ? (
                        <Moon
                          size={18}
                          className="text-[#4CAF2F]"
                        />
                      ) : (
                        <Sun
                          size={18}
                          className="text-[#4CAF2F]"
                        />
                      )}

                      <div>
                        <p className="font-semibold">
                          Theme
                        </p>

                        <p className="text-[10px] text-gray-500">
                          {darkMode
                            ? "Dark mode"
                            : "Light mode"}
                        </p>
                      </div>
                    </div>

                    {/* ==================================================
                                      TOGGLE
                    ================================================== */}

                    <div
                      className={`relative h-5 w-9 rounded-full transition ${
                        darkMode
                          ? "bg-[#4CAF2F]"
                          : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${
                          darkMode
                            ? "left-[18px]"
                            : "left-0.5"
                        }`}
                      />
                    </div>
                  </button>

                  {/* ==================================================
                                      DIVIDER
                  ================================================== */}

                  <div
                    className={`border-t ${
                      darkMode
                        ? "border-gray-700"
                        : "border-gray-200"
                    }`}
                  />

                  {/* ==================================================
                                      LOGOUT
                  ================================================== */}

                  <button
                    type="button"
                    onClick={handleLogout}
                    className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-red-500 transition ${
                      darkMode
                        ? "hover:bg-[#333333]"
                        : "hover:bg-red-50"
                    }`}
                  >
                    <LogOut size={18} />

                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* ============================================================
                                      PAGE CONTENT
        ============================================================ */}

        <div className="p-5">
          {/* ============================================================
                                      SCANNER CONTENT
          ============================================================ */}

          <div className="grid grid-cols-2 gap-4">
            {/* ========================================================
                                      SCAN CARD
            ======================================================== */}

            <section
              className={`rounded-xl border p-5 shadow-sm transition-colors ${
                darkMode
                  ? "border-gray-700 bg-[#222222]"
                  : "border-gray-200 bg-white"
              }`}
            >
              <h2 className="font-bold">
                Scan Food
              </h2>

              <div className="mt-4 rounded-lg border p-4">
                {/* ==================================================
                                      UPLOAD AREA
                ================================================== */}

                <label className="block cursor-pointer">
                  <div
                    className={`flex min-h-[270px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-green-400 ${
                      darkMode
                        ? "bg-[#19351a]"
                        : "bg-[#dcffcc]"
                    }`}
                  >
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Selected food"
                        className="h-64 w-full rounded-lg object-cover"
                      />
                    ) : (
                      <>
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white">
                          <Camera size={34} />
                        </div>

                        <h3 className="mt-3 font-bold text-green-600">
                          Scan or Upload Food
                        </h3>

                        <p
                          className={`text-center text-sm ${
                            darkMode
                              ? "text-gray-400"
                              : "text-gray-500"
                          }`}
                        >
                          Take a photo of your food
                          <br />
                          or upload from gallery
                        </p>
                      </>
                    )}
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>

                <p className="my-4 text-center text-sm text-gray-500">
                  or
                </p>

                {/* ==================================================
                                      UPLOAD BUTTON
                ================================================== */}

                <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-3 font-semibold text-green-600 shadow-sm transition hover:bg-green-50">
                  <Upload size={19} />

                  Upload Image

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>

                {/* ==================================================
                                      SCAN BUTTON
                ================================================== */}

                {selectedImage && (
                  <button
                    type="button"
                    onClick={() => {
                      alert(
                        "Food scanning will be connected to the AI model here."
                      );
                    }}
                    className="mt-3 w-full rounded-lg bg-green-600 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
                  >
                    Scan Food
                  </button>
                )}
              </div>
            </section>

            {/* ========================================================
                                      RECENT SCANS
            ======================================================== */}

            <section
              className={`rounded-xl border p-5 shadow-sm transition-colors ${
                darkMode
                  ? "border-gray-700 bg-[#222222]"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <h2 className="font-bold">
                  Recent Scans
                </h2>

                <button
                  type="button"
                  className="text-sm font-semibold text-green-600 hover:text-green-700"
                >
                  View All
                </button>
              </div>

              <div className="mt-4 space-y-3">
                {recentScans.map((food) => (
                  <button
                    key={food.name}
                    type="button"
                    className={`flex w-full items-center gap-3 rounded-lg border p-2 text-left shadow-sm transition hover:shadow-md ${
                      darkMode
                        ? "border-gray-700 hover:bg-[#333333]"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {/* FOOD IMAGE */}

                    <div className="h-20 w-20 overflow-hidden rounded-md bg-gray-200">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display =
                            "none";
                        }}
                      />
                    </div>

                    {/* FOOD INFORMATION */}

                    <div className="flex-1">
                      <p className="font-bold">
                        {food.name}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-green-600">
                        {food.calories}
                      </p>

                      <p className="mt-2 text-xs text-gray-500">
                        {food.time}
                      </p>
                    </div>

                    <ChevronRight
                      size={22}
                      className="text-gray-400"
                    />
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}