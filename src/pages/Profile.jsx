import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Camera,
  Dumbbell,
  Bot,
  BarChart3,
  User,
  LogOut,
  Bell,
  Globe,
  Ruler,
  ChevronRight,
  Target,
  HeartPulse,
  Utensils,
} from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState(true);

  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Food Scanner", icon: Camera, path: "/food-scanner" },
    { name: "Workouts", icon: Dumbbell, path: "/workouts" },
    { name: "AI Coach", icon: Bot, path: "/ai-coach" },
    { name: "Progress", icon: BarChart3, path: "/progress" },
    { name: "Profile", icon: User, path: "/profile" },
  ];

  return (
    <div className="flex min-h-screen bg-[#1c1c1c] p-2">
      {/* SIDEBAR */}
      <aside className="flex w-[195px] flex-col rounded-l-lg bg-white shadow-md">
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

        <nav className="mt-7 flex flex-1 flex-col gap-2 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-semibold ${
                  item.name === "Profile"
                    ? "border-l-2 border-[#4CAF2F] bg-[#dcffcc] text-[#4CAF2F]"
                    : "text-gray-400 hover:bg-gray-100 hover:text-[#4CAF2F]"
                }`}
              >
                <Icon size={19} />
                {item.name}
              </button>
            );
          })}
        </nav>

        <button
          onClick={() => navigate("/login")}
          className="mx-2 mb-4 flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50"
        >
          <LogOut size={19} />
          Log Out
        </button>
      </aside>

      {/* MAIN */}
      <main className="flex-1 overflow-auto rounded-r-lg bg-white p-5">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Profile</h1>

          <Bell size={21} className="text-gray-500" />
        </div>

        {/* PROFILE HEADER */}
        <section className="mt-4 overflow-hidden rounded-lg">
          <div className="flex items-center gap-5 bg-gradient-to-r from-green-700 to-green-400 p-5 text-white">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-200">
              <User size={42} className="text-white" />
            </div>

            <div>
              <h2 className="text-xl font-bold">
                John Lim
              </h2>

              <p className="text-xs">
                johnlim@gmail.com
              </p>

              <p className="mt-1 text-xs">
                Joined May 2024
              </p>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="mt-4 rounded-xl border p-4 shadow-sm">
          <h2 className="font-bold">My Overview</h2>

          <div className="mt-3 grid grid-cols-4 gap-3">
            <Overview
              icon={<Ruler />}
              title="Height"
              value="170 cm"
            />

            <Overview
              icon={<Utensils />}
              title="Weight"
              value="70 kg"
            />

            <Overview
              icon={<HeartPulse />}
              title="BMI"
              value="24.2"
              subtitle="Normal"
            />

            <Overview
              icon={<Target />}
              title="Goal"
              value="Lose Weight"
            />
          </div>
        </section>

        {/* PLAN */}
        <section className="mt-4 rounded-xl border shadow-sm">
          <div className="border-b px-4 py-3 font-bold">
            My Plan
          </div>

          <ProfileRow
            icon={<Target />}
            title="Fitness Goal"
            value="Lose Weight"
          />

          <ProfileRow
            icon={<Utensils />}
            title="Diet Preference"
            value="High Protein"
          />

          <ProfileRow
            icon={<Dumbbell />}
            title="Activity Level"
            value="Moderate"
          />

          <ProfileRow
            icon={<HeartPulse />}
            title="Health Conditions"
            value="None"
          />
        </section>

        {/* SETTINGS */}
        <section className="mt-4 rounded-xl border shadow-sm">
          <div className="border-b px-4 py-3 font-bold">
            Settings
          </div>

          <ProfileRow
            icon={<User />}
            title="Personal Information"
            value=""
          />

          <div className="flex items-center gap-3 border-b px-4 py-3">
            <Bell size={18} className="text-gray-400" />

            <span className="flex-1 text-sm">
              Notifications
            </span>

            <button
              onClick={() =>
                setNotifications(!notifications)
              }
              className={`relative h-5 w-9 rounded-full ${
                notifications
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${
                  notifications
                    ? "left-[18px]"
                    : "left-0.5"
                }`}
              />
            </button>
          </div>

          <ProfileRow
            icon={<Ruler />}
            title="Units"
            value="Metric (kg, cm, km)"
          />

          <ProfileRow
            icon={<Globe />}
            title="Language"
            value="English"
          />

          <button
            onClick={() => navigate("/login")}
            className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-red-500 hover:bg-red-50"
          >
            <LogOut size={18} />
            Logout
          </button>
        </section>
      </main>
    </div>
  );
}

function Overview({ icon, title, value, subtitle }) {
  return (
    <div className="rounded-lg border p-3">
      <div className="flex items-center gap-2 text-green-600">
        {icon}
        <span className="text-xs font-semibold">
          {title}
        </span>
      </div>

      <p className="mt-2 font-bold">{value}</p>

      {subtitle && (
        <p className="text-xs text-green-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function ProfileRow({ icon, title, value }) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 border-b px-4 py-3 text-left hover:bg-gray-50"
    >
      <span className="text-gray-400">
        {icon}
      </span>

      <span className="flex-1 text-sm">
        {title}
      </span>

      {value && (
        <span className="text-xs text-gray-500">
          {value}
        </span>
      )}

      <ChevronRight
        size={16}
        className="text-gray-400"
      />
    </button>
  );
}