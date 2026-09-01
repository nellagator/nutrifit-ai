import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  Home,
  Camera,
  Dumbbell,
  Bot,
  BarChart3,
  User,
  Bell,
  ChevronDown,
  Flame,
  Droplets,
  Footprints,
  Play,
  Plus,
  Sun,
  Moon,
  LogOut,
  X,
} from "lucide-react";

const calorieData = [
  { day: "Mon", calories: 1550 },
  { day: "Tue", calories: 1720 },
  { day: "Wed", calories: 1600 },
  { day: "Thu", calories: 1710 },
  { day: "Fri", calories: 1450 },
  { day: "Sat", calories: 1900 },
  { day: "Sun", calories: 1550 },
];

export default function Dashboard() {
  const navigate = useNavigate();

  const [activePage, setActivePage] = useState("Dashboard");

  // Profile dropdown
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Notifications
  const [showNotifications, setShowNotifications] = useState(false);

  // Theme
  const [darkMode, setDarkMode] = useState(false);

  // Hydration
  const [water, setWater] = useState(1.8);

  // Workout message
  const [workoutStarted, setWorkoutStarted] = useState(false);

  const profileMenuRef = useRef(null);
  const notificationRef = useRef(null);

  const menuItems = [
    {
      name: "Dashboard",
      icon: Home,
    },
    {
      name: "Food Scanner",
      icon: Camera,
    },
    {
      name: "Workouts",
      icon: Dumbbell,
    },
    {
      name: "AI Coach",
      icon: Bot,
    },
    {
      name: "Progress",
      icon: BarChart3,
    },
    {
      name: "Profile",
      icon: User,
    },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavigation = (page) => {
    setShowProfileMenu(false);

    const routes = {
      Dashboard: "/dashboard",
      "Food Scanner": "/food-scanner",
      Workouts: "/workouts",
      "AI Coach": "/ai-coach",
      Progress: "/progress",
      Profile: "/profile",
    };

    if (routes[page]) {
      navigate(routes[page]);
    }
  };

  // Logout
  const handleLogout = () => {
    setShowProfileMenu(false);

    // Temporary logout
    navigate("/login");
  };

  // Hydration
  const addWater = () => {
    setWater((current) => {
      const newAmount = Math.min(current + 0.25, 2.5);
      return Number(newAmount.toFixed(2));
    });
  };

  // Workout
  const startWorkout = () => {
    setWorkoutStarted(true);

    setTimeout(() => {
      setWorkoutStarted(false);
    }, 2500);
  };

  return (
    <div
      className={`flex min-h-screen p-2 transition-colors duration-300 ${
        darkMode ? "bg-[#111111]" : "bg-[#1c1c1c]"
      }`}
    >
{/* ========================================================================================================================
                                                          SIDEBAR
============================================================================================================================ */}

      <aside
        className={`flex w-[195px] flex-col rounded-l-lg shadow-md transition-colors ${
          darkMode ? "bg-[#222222] text-white" : "bg-white"
        }`}
      >
        {/* Logo */}
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

{/* ========================================================================================================================
                                                          NAVIGATION
============================================================================================================================ */}
        <nav className="mt-7 flex flex-1 flex-col gap-2 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = activePage === item.name;

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavigation(item.name)}
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

{/* ========================================================================================================================
                                                          LOGOUT AT BOTTOM
============================================================================================================================ */}
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

{/*========================================================================================================================
                                                          MAIN CONTENT
=========================================================================================================================== */}

      <main
        className={`relative flex-1 overflow-auto rounded-r-lg p-5 transition-colors ${
          darkMode
            ? "bg-[#181818] text-white"
            : "bg-white text-black"
        }`}
      >
{/* ========================================================================================================================
                                                          HEADER
============================================================================================================================ */}

        <header className="mb-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Good Morning, John!👋
            </h1>

            <p
              className={`mt-1 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Here's your overview for today.
            </p>
          </div>

          <div className="flex items-center gap-4">

{/* ========================================================================================================================
                                                          NOTIFICATION
============================================================================================================================ */}

            <div
              ref={notificationRef}
              className="relative"
            >
              <button
                type="button"
                onClick={() =>
                  setShowNotifications(!showNotifications)
                }
                className={`rounded-full p-2 transition ${
                  darkMode
                    ? "text-gray-300 hover:bg-[#333333]"
                    : "text-gray-400 hover:bg-gray-100"
                }`}
              >
                <Bell size={21} />
              </button>

              {/* Notification dot */}
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />

              {/* Notification dropdown */}
              {showNotifications && (
                <div
                  className={`absolute right-0 top-12 z-50 w-72 rounded-xl border p-4 shadow-xl ${
                    darkMode
                      ? "border-gray-700 bg-[#252525]"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">
                      Notifications
                    </h3>

                    <button
                      type="button"
                      onClick={() => setShowNotifications(false)}
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <div
                    className={`mt-3 rounded-lg p-3 text-sm ${
                      darkMode
                        ? "bg-[#333333]"
                        : "bg-[#f0faeb]"
                    }`}
                  >
                    <p className="font-semibold">
                      Great job! 🎉
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      You're only 2,158 steps away from your
                      daily goal.
                    </p>
                  </div>

                  <div
                    className={`mt-2 rounded-lg p-3 text-sm ${
                      darkMode
                        ? "bg-[#333333]"
                        : "bg-blue-50"
                    }`}
                  >
                    <p className="font-semibold">
                      Hydration reminder 💧
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Don't forget to drink some water.
                    </p>
                  </div>
                </div>
              )}
            </div>

{/* ========================================================================================================================
                                                          PROFILE DROPDOWN
============================================================================================================================ */}

            <div
              ref={profileMenuRef}
              className="relative"
            >
              <button
                type="button"
                onClick={() =>
                  setShowProfileMenu(!showProfileMenu)
                }
                className={`flex items-center gap-2 rounded-lg p-1.5 transition ${
                  darkMode
                    ? "hover:bg-[#333333]"
                    : "hover:bg-gray-100"
                }`}
              >
                {/* Profile icon */}
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-300">
                  <User
                    size={22}
                    className="text-white"
                  />
                </div>

                <span className="text-sm font-bold">
                  John Lim
                </span>

                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform ${
                    showProfileMenu
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

{/* ========================================================================================================================
                                                          DROPDOWN MENU
============================================================================================================================ */}

              {showProfileMenu && (
                <div
                  className={`absolute right-0 top-12 z-50 w-52 overflow-hidden rounded-xl border shadow-xl ${
                    darkMode
                      ? "border-gray-700 bg-[#252525]"
                      : "border-gray-200 bg-white"
                  }`}
                >
{/* ========================================================================================================================
                                                          PROFILE
============================================================================================================================ */}
                  <button
                    type="button"
                    onClick={() => {
                      handleNavigation("Profile");
                    }}
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

{/* ========================================================================================================================
                                                          THEME
============================================================================================================================ */}
                  <button
                    type="button"
                    onClick={() => {
                      setDarkMode(!darkMode);
                    }}
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

{/* ========================================================================================================================
                                                          TOGGLE
============================================================================================================================ */}
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

{/* ========================================================================================================================
                                                          DIVIDER
============================================================================================================================ */}
                  <div
                    className={`border-t ${
                      darkMode
                        ? "border-gray-700"
                        : "border-gray-200"
                    }`}
                  />

{/* ========================================================================================================================
                                                          LOGOUT BUTTON
============================================================================================================================ */}
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-red-500 transition hover:bg-red-50"
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
            NON-DASHBOARD PAGES
        ============================================================ */}

        {activePage !== "Dashboard" ? (
          <SectionPlaceholder
            page={activePage}
            darkMode={darkMode}
            onBack={() => setActivePage("Dashboard")}
          />
        ) : (
          <>
            {/* ========================================================
                STAT CARDS
            ======================================================== */}

            <div className="grid grid-cols-4 gap-3">

              {/* Calories */}
              <div
                className={`rounded-lg border p-3 shadow-sm ${
                  darkMode
                    ? "border-gray-700 bg-[#222222]"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex justify-between">
                  <span className="text-xs font-semibold">
                    Daily Calories
                  </span>

                  <span className="text-xs font-bold text-[#4CAF2F]">
                    84%
                  </span>
                </div>

                <div className="mt-2">
                  <span className="text-xl font-bold">
                    1850
                  </span>

                  <span className="text-xs text-gray-500">
                    /2200 kcal
                  </span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-gray-200">
                  <div className="h-2 w-[84%] rounded-full bg-[#69bd3e]" />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-1">
                  <Macro
                    name="Protein"
                    value="79/120g"
                  />

                  <Macro
                    name="Carbs"
                    value="165/250g"
                  />

                  <Macro
                    name="Fat"
                    value="45/70g"
                  />
                </div>
              </div>

              {/* Hydration */}
              <div
                className={`rounded-lg border p-3 shadow-sm ${
                  darkMode
                    ? "border-gray-700 bg-[#222222]"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Droplets
                    size={20}
                    className="text-blue-600"
                  />

                  <span className="text-xs font-semibold">
                    Hydration
                  </span>
                </div>

                <div className="mt-4">
                  <span className="text-2xl font-bold">
                    {water}
                  </span>

                  <span className="text-sm text-gray-500">
                    / 2.5 L
                  </span>
                </div>

                <p className="mt-1 text-xs font-semibold text-gray-500">
                  {Math.round((water / 2.5) * 100)}% of daily
                  goal
                </p>

                <div className="mt-2 h-2 rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-blue-600 transition-all"
                    style={{
                      width: `${(water / 2.5) * 100}%`,
                    }}
                  />
                </div>

                {/* Add water */}
                <button
                  type="button"
                  onClick={addWater}
                  disabled={water >= 2.5}
                  className="mt-2 ml-auto flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40"
                  title="Add 250ml water"
                >
                  <Plus size={15} />
                </button>
              </div>

              {/* Steps */}
              <div
                className={`rounded-lg border p-3 shadow-sm ${
                  darkMode
                    ? "border-gray-700 bg-[#222222]"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Footprints
                    size={21}
                    className="text-green-600"
                  />

                  <span className="text-xs font-semibold">
                    Steps
                  </span>
                </div>

                <div className="mt-5">
                  <span className="text-2xl font-bold">
                    7 842
                  </span>

                  <span className="text-sm text-gray-500">
                    / 10 000
                  </span>
                </div>

                <p className="mt-1 text-xs font-semibold text-gray-500">
                  78% of daily goal
                </p>

                <div className="mt-2 h-2 rounded-full bg-gray-200">
                  <div className="h-2 w-[78%] rounded-full bg-[#4CAF2F]" />
                </div>
              </div>

              {/* Streak */}
              <div
                className={`rounded-lg border p-3 shadow-sm ${
                  darkMode
                    ? "border-gray-700 bg-[#222222]"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Flame
                    size={23}
                    className="text-orange-400"
                  />

                  <span className="text-xs font-semibold">
                    Streak
                  </span>
                </div>

                <div className="mt-5">
                  <span className="text-2xl font-bold">
                    6
                  </span>

                  <span className="ml-1 text-sm font-semibold">
                    Days
                  </span>
                </div>

                <p className="mt-1 text-xs text-gray-500">
                  Keep it up!
                </p>

                <div className="mt-2 flex justify-between text-[10px]">
                  {["M", "T", "W", "T", "F", "S", "S"].map(
                    (day, index) => (
                      <div
                        key={index}
                        className="text-center"
                      >
                        <div
                          className={`mx-auto mb-1 flex h-4 w-4 items-center justify-center rounded-full text-white ${
                            index === 6
                              ? "border border-orange-400 text-orange-400"
                              : "bg-green-600"
                          }`}
                        >
                          {index === 6 ? "" : "✓"}
                        </div>

                        {day}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

{/* ========================================================================================================================
                                                        LOWER SECTION
============================================================================================================================ */}

            <div className="mt-3 grid grid-cols-2 gap-3">

{/* ========================================================================================================================
                                                        TODAY'S PLAN
============================================================================================================================ */}
              <section
                className={`rounded-lg border p-3 shadow-sm ${
                  darkMode
                    ? "border-gray-700 bg-[#222222]"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold">
                    Todays Plan
                  </h2>

                  <button
                    type="button"
                    onClick={() =>
                      setActivePage("Food Scanner")
                    }
                    className="text-xs font-semibold text-[#4CAF2F] hover:underline"
                  >
                    View All
                  </button>
                </div>

                <h3 className="mt-1 text-sm font-semibold">
                  Meals
                </h3>

                <div className="mt-2 grid grid-cols-4 gap-2">
                  <Meal
                    title="Breakfast"
                    calories="420 kcal"
                    image="/breakfast.jpg"
                  />

                  <Meal
                    title="Lunch"
                    calories="620 kcal"
                    image="/lunch.jpg"
                  />

                  <Meal
                    title="Dinner"
                    calories="560 kcal"
                    image="/dinner.jpg"
                  />

                  <Meal
                    title="Snack"
                    calories="250 kcal"
                    image="/snack.jpg"
                  />
                </div>

                <h3 className="mt-3 text-sm font-semibold">
                  Workout
                </h3>

                <div
                  className={`mt-2 flex items-center gap-3 rounded-lg border p-2 ${
                    darkMode
                      ? "border-gray-700"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-md bg-gray-200">
                    <Dumbbell className="text-gray-500" />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold">
                      Upper Body Strength
                    </h4>

                    <p className="text-xs text-gray-500">
                      35 min • Intermediate
                    </p>

                    <p className="mt-2 text-xs text-gray-500">
                      Build strength and tone your upper body
                      with this workout
                    </p>
                  </div>

{/* ========================================================================================================================
                                                      START WORKOUT CARD
============================================================================================================================ */}
                  <button
                    type="button"
                    onClick={startWorkout}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white transition hover:bg-green-700"
                    title="Start workout"
                  >
                    <Play
                      size={14}
                      fill="white"
                    />
                  </button>
                </div>

                {/* Workout started */}
                {workoutStarted && (
                  <div className="mt-2 rounded-md bg-[#dcffcc] p-2 text-center text-xs font-semibold text-[#4CAF2F]">
                    Workout started! 💪
                  </div>
                )}
              </section>

{/* ========================================================================================================================
                                                          INSIGHTS GRAPH
============================================================================================================================ */}
              <section>
                <div className="mt-2 h-40 rounded-md border border-gray-100 p-2">

                  <div className="flex items-center justify-between">
                    <p className="text-[9px] font-semibold">
                      Calories Trend
                    </p>

                    <p className="text-[8px] font-semibold text-gray-500">
                      Average: 1718 kcal
                    </p>
                  </div>

                  <div className="mt-1 h-[115px] w-full">

                    <ResponsiveContainer
                      width="100%"
                      height="100%"
                    >
                      <AreaChart
                        data={calorieData}
                        margin={{
                          top: 5,
                          right: 8,
                          left: 5,
                          bottom: 0,
                        }}
                      >

                        <CartesianGrid
                          stroke="#e5e7eb"
                          vertical={false}
                        />

                        <XAxis
                          dataKey="day"
                          tick={{
                            fontSize: 8,
                            fill: "#6b7280",
                          }}
                          axisLine={{
                            stroke: "#9ca3af",
                          }}
                          tickLine={false}
                        />

                        <YAxis
                          domain={[0, 2400]}
                          ticks={[
                            0,
                            800,
                            1600,
                            2400,
                          ]}
                          tickFormatter={(value) => {
                            if (value === 2400) return "2.4k";
                            if (value === 1600) return "1.6k";
                            if (value === 800) return "800";
                            return "0";
                          }}
                          tick={{
                            fontSize: 8,
                            fill: "#6b7280",
                          }}
                          axisLine={false}
                          tickLine={false}
                          width={30}
                        />

                        <Tooltip
                          formatter={(value) => [
                            `${value} kcal`,
                            "Calories",
                          ]}
                        />

                        <Area
                          type="monotone"
                          dataKey="calories"
                          stroke="#00e51a"
                          strokeWidth={2}
                          fill="#c9f9ce"
                          fillOpacity={0.8}
                          dot={{
                            r: 3,
                            fill: "#00e51a",
                            strokeWidth: 0,
                          }}
                          activeDot={{
                            r: 5,
                          }}
                        />

                      </AreaChart>
                    </ResponsiveContainer>

                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">

{/* ========================================================================================================================
                                              MACRONUTRIENTS DISTRIBUTION
============================================================================================================================ */}
                  <div
                    className={`rounded-lg border p-3 shadow-sm ${
                      darkMode
                        ? "border-gray-700 bg-[#222222]"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <p className="text-[10px] font-semibold">
                      Macronutrient Distribution
                    </p>

                    <div className="mt-3 flex items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border-[15px] border-green-500">
                        <div
                          className={`h-10 w-10 rounded-full ${
                            darkMode
                              ? "bg-[#222222]"
                              : "bg-white"
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Weight */}
                  <div
                    className={`rounded-lg border p-3 shadow-sm ${
                      darkMode
                        ? "border-gray-700 bg-[#222222]"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <p className="text-[10px] font-semibold">
                      Weight Progress
                    </p>

                    <div className="mt-3">
                      <span className="text-sm font-bold">
                        70 kg
                      </span>

                      <span className="ml-2 text-[9px] text-green-600">
                        ▼ 2.5 kg
                      </span>
                    </div>

                    <div className="mt-5 h-1 rounded bg-green-500" />
                  </div>
                </div>
              </section>
            </div>
          </>
        )}
      </main>
    </div>
  );
}


{/* ========================================================================================================================
                                                      MACRO
============================================================================================================================ */}

function Macro({ name, value }) {
  return (
    <div className="rounded-md border border-gray-200 p-1.5">
      <p className="text-[10px] font-bold">
        {name}
      </p>

      <p className="text-[8px] text-gray-500">
        {value}
      </p>

      <div className="mt-1 h-1 rounded-full bg-gray-200">
        <div className="h-1 w-[70%] rounded-full bg-green-500" />
      </div>
    </div>
  );
}


{/* ========================================================================================================================
                                                        MEAL
============================================================================================================================ */}

function Meal({ title, calories, image }) {
  return (
    <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm">
      <div className="h-16 bg-gray-200">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="p-1">
        <p className="text-[10px] font-bold">
          {title}
        </p>

        <p className="text-[8px] text-gray-500">
          {calories}
        </p>
      </div>
    </div>
  );
}