import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Home,
  Camera,
  Dumbbell,
  Bot,
  BarChart3,
  User,
  Bell,
  ChevronDown,
  Sun,
  Moon,
  LogOut,
  X,
} from "lucide-react";

import { useTheme } from "../context/ThemeContext";

export default function DashboardLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const { darkMode, toggleTheme } = useTheme();

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const profileMenuRef = useRef(null);
  const notificationRef = useRef(null);

  // ============================================================
  // NAVIGATION
  // ============================================================

  const menuItems = [
    {
      name: "Dashboard",
      icon: Home,
      route: "/dashboard",
    },
    {
      name: "Food Scanner",
      icon: Camera,
      route: "/food-scanner",
    },
    {
      name: "Workouts",
      icon: Dumbbell,
      route: "/workouts",
    },
    {
      name: "AI Coach",
      icon: Bot,
      route: "/ai-coach",
    },
    {
      name: "Progress",
      icon: BarChart3,
      route: "/progress",
    },
    {
      name: "Profile",
      icon: User,
      route: "/profile",
    },
  ];

  // ============================================================
  // CURRENT PAGE
  // ============================================================

  const currentPage =
    menuItems.find(
      (item) => item.route === location.pathname
    )?.name || "Dashboard";

  // ============================================================
  // CLOSE DROPDOWNS
  // ============================================================

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
  // NAVIGATION HANDLER
  // ============================================================

  const handleNavigation = (route) => {
    setShowProfileMenu(false);
    setShowNotifications(false);
    navigate(route);
  };

  // ============================================================
  // LOGOUT
  // ============================================================

  const handleLogout = () => {
    setShowProfileMenu(false);
    navigate("/login");
  };

  // ============================================================
  // PAGE DESCRIPTIONS
  // ============================================================

  const pageDescriptions = {
    Dashboard: "Here's your overview for today.",

    "Food Scanner":
      "Scan your food and get personalized nutrition insights.",

    Workouts:
      "Stay active and reach your fitness goals.",

    "AI Coach":
      "Get personalized guidance from your AI fitness coach.",

    Progress:
      "Track your health and fitness progress.",

    Profile:
      "Manage your personal information and preferences.",
  };

  return (
    <div
      className={`
        min-h-screen
        p-2
        transition-colors
        duration-300

        ${
          darkMode
            ? "bg-[#111111]"
            : "bg-[#f5f7f4]"
        }
      `}
    >

      {/* ========================================================
          MAIN APPLICATION
      ======================================================== */}

      <div
        className={`
          flex
          min-h-[calc(100vh-16px)]
          overflow-hidden
          rounded-lg
          shadow-md
          transition-colors
          duration-300

          ${
            darkMode
              ? "bg-[#181818]"
              : "bg-white"
          }
        `}
      >

        {/* ======================================================
            SIDEBAR
        ====================================================== */}

        <aside
          className={`
            flex
            w-[235px]
            flex-shrink-0
            flex-col
            transition-colors
            duration-300

            ${
              darkMode
                ? "bg-[#222222] text-white"
                : "bg-white text-[#222222]"
            }
          `}
        >

          {/* ====================================================
              LOGO
          ==================================================== */}

          <div className="flex items-center gap-2 px-5 py-6">
            <img
              src="/nutrifit-logo.png"
              alt="NutriFit AI"
              className="h-10 w-10 object-contain"
            />

            <span className="text-xl font-bold text-[#4CAF2F]">
              NutriFit AI
            </span>
          </div>

          {/* ====================================================
              NAVIGATION
          ==================================================== */}

          <nav className="mt-7 flex flex-1 flex-col gap-2 px-3">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const active =
                currentPage === item.name;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() =>
                    handleNavigation(item.route)
                  }
                  className={`
                    flex
                    items-center
                    gap-4
                    rounded-lg
                    px-4
                    py-3
                    text-left
                    text-sm
                    font-semibold
                    transition-all
                    duration-200

                    ${
                      active
                        ? darkMode
                          ? "border-l-2 border-[#4CAF2F] bg-[#294b22] text-[#4CAF2F]"
                          : "border-l-2 border-[#4CAF2F] bg-[#dcffcc] text-[#4CAF2F]"
                        : darkMode
                        ? "text-gray-400 hover:bg-[#333333] hover:text-[#4CAF2F]"
                        : "text-[#8b9bb0] hover:bg-gray-100 hover:text-[#4CAF2F]"
                    }
                  `}
                >
                  <Icon size={20} />

                  <span>
                    {item.name}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* ====================================================
              SIDEBAR LOGOUT
          ==================================================== */}

          <button
            type="button"
            onClick={handleLogout}
            className={`
              mx-3
              mb-5
              flex
              items-center
              gap-4
              rounded-lg
              px-4
              py-3
              text-sm
              font-semibold
              text-red-500
              transition

              ${
                darkMode
                  ? "hover:bg-[#333333]"
                  : "hover:bg-red-50"
              }
            `}
          >
            <LogOut size={20} />

            <span>
              Log Out
            </span>
          </button>
        </aside>

        {/* ======================================================
            RIGHT SIDE
        ====================================================== */}

        <div
          className={`
            flex
            min-w-0
            flex-1
            flex-col
            transition-colors
            duration-300

            ${
              darkMode
                ? "bg-[#181818] text-white"
                : "bg-[#f8faf7] text-[#222222]"
            }
          `}
        >

          {/* ====================================================
              HEADER
          ==================================================== */}

          <header
            className={`
              flex
              items-center
              justify-between
              px-8
              py-5
            `}
          >

            {/* ==================================================
                GREETING
            ================================================== */}

            <div>
              <h1 className="text-2xl font-bold">
                Good Morning, John! 👋
              </h1>

              <p
                className={`
                  mt-1
                  text-sm

                  ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-500"
                  }
                `}
              >
                {pageDescriptions[currentPage]}
              </p>
            </div>

            {/* ==================================================
                HEADER RIGHT
            ================================================== */}

            <div className="flex items-center gap-4">

              {/* =================================================
                  NOTIFICATIONS
              ================================================= */}

              <div
                ref={notificationRef}
                className="relative"
              >
                <button
                  type="button"
                  onClick={() =>
                    setShowNotifications(
                      !showNotifications
                    )
                  }
                  className={`
                    rounded-full
                    p-2
                    transition

                    ${
                      darkMode
                        ? "text-gray-300 hover:bg-[#333333]"
                        : "text-gray-400 hover:bg-gray-100"
                    }
                  `}
                >
                  <Bell size={22} />
                </button>

                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />

                {/* =================================================
                    NOTIFICATION DROPDOWN
                ================================================= */}

                {showNotifications && (
                  <div
                    className={`
                      absolute
                      right-0
                      top-12
                      z-50
                      w-72
                      rounded-xl
                      border
                      p-4
                      shadow-xl

                      ${
                        darkMode
                          ? "border-gray-700 bg-[#252525]"
                          : "border-gray-200 bg-white"
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold">
                        Notifications
                      </h3>

                      <button
                        type="button"
                        onClick={() =>
                          setShowNotifications(false)
                        }
                      >
                        <X size={16} />
                      </button>
                    </div>

                    <div
                      className={`
                        mt-3
                        rounded-lg
                        p-3
                        text-sm

                        ${
                          darkMode
                            ? "bg-[#333333]"
                            : "bg-[#f0faeb]"
                        }
                      `}
                    >
                      <p className="font-semibold">
                        Great job! 🎉
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        You're only 2,158 steps away
                        from your daily goal.
                      </p>
                    </div>

                    <div
                      className={`
                        mt-2
                        rounded-lg
                        p-3
                        text-sm

                        ${
                          darkMode
                            ? "bg-[#333333]"
                            : "bg-blue-50"
                        }
                      `}
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

              {/* =================================================
                  PROFILE
              ================================================= */}

              <div
                ref={profileMenuRef}
                className="relative"
              >
                <button
                  type="button"
                  onClick={() =>
                    setShowProfileMenu(
                      !showProfileMenu
                    )
                  }
                  className={`
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    p-1.5
                    transition

                    ${
                      darkMode
                        ? "hover:bg-[#333333]"
                        : "hover:bg-gray-100"
                    }
                  `}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
                    <User
                      size={23}
                      className="text-white"
                    />
                  </div>

                  <span className="text-sm font-bold">
                    John Lim
                  </span>

                  <ChevronDown
                    size={16}
                    className={`
                      text-gray-400
                      transition-transform

                      ${
                        showProfileMenu
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>

                {/* =================================================
                    PROFILE DROPDOWN
                ================================================= */}

                {showProfileMenu && (
                  <div
                    className={`
                      absolute
                      right-0
                      top-12
                      z-50
                      w-56
                      overflow-hidden
                      rounded-xl
                      border
                      shadow-xl

                      ${
                        darkMode
                          ? "border-gray-700 bg-[#252525]"
                          : "border-gray-200 bg-white"
                      }
                    `}
                  >

                    {/* =================================================
                        PROFILE
                    ================================================= */}

                    <button
                      type="button"
                      onClick={() =>
                        handleNavigation("/profile")
                      }
                      className={`
                        flex
                        w-full
                        items-center
                        gap-3
                        px-4
                        py-3
                        text-left
                        text-sm
                        transition

                        ${
                          darkMode
                            ? "hover:bg-[#333333]"
                            : "hover:bg-gray-100"
                        }
                      `}
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

                    {/* =================================================
                        THEME
                    ================================================= */}

                    <button
                      type="button"
                      onClick={toggleTheme}
                      className={`
                        flex
                        w-full
                        items-center
                        justify-between
                        px-4
                        py-3
                        text-left
                        text-sm
                        transition

                        ${
                          darkMode
                            ? "hover:bg-[#333333]"
                            : "hover:bg-gray-100"
                        }
                      `}
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

                      {/* =================================================
                          TOGGLE
                      ================================================= */}

                      <div
                        className={`
                          relative
                          h-5
                          w-9
                          rounded-full
                          transition

                          ${
                            darkMode
                              ? "bg-[#4CAF2F]"
                              : "bg-gray-300"
                          }
                        `}
                      >
                        <div
                          className={`
                            absolute
                            top-0.5
                            h-4
                            w-4
                            rounded-full
                            bg-white
                            transition

                            ${
                              darkMode
                                ? "left-[18px]"
                                : "left-0.5"
                            }
                          `}
                        />
                      </div>
                    </button>

                    {/* =================================================
                        DIVIDER
                    ================================================= */}

                    <div
                      className={`
                        border-t

                        ${
                          darkMode
                            ? "border-gray-700"
                            : "border-gray-200"
                        }
                      `}
                    />

                    {/* =================================================
                        LOGOUT
                    ================================================= */}

                    <button
                      type="button"
                      onClick={handleLogout}
                      className={`
                        flex
                        w-full
                        items-center
                        gap-3
                        px-4
                        py-3
                        text-left
                        text-sm
                        font-semibold
                        text-red-500
                        transition

                        ${
                          darkMode
                            ? "hover:bg-[#333333]"
                            : "hover:bg-red-50"
                        }
                      `}
                    >
                      <LogOut size={18} />

                      <span>
                        Log Out
                      </span>
                    </button>

                  </div>
                )}
              </div>
            </div>
          </header>

          {/* ====================================================
              PAGE CONTENT
          ==================================================== */}

          <main
            className={`
              flex-1
              overflow-auto
              px-8
              pb-8
              transition-colors
              duration-300

              ${
                darkMode
                  ? "bg-[#181818]"
                  : "bg-[#f8faf7]"
              }
            `}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}