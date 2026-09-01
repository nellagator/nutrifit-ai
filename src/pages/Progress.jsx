import { useNavigate } from "react-router-dom";
import {
  Home,
  Camera,
  Dumbbell,
  Bot,
  BarChart3,
  User,
  LogOut,
  Flame,
  Footprints,
  Trophy,
} from "lucide-react";

export default function Progress() {
  const navigate = useNavigate();

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
                  item.name === "Progress"
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
          <div>
            <h1 className="text-2xl font-bold">My Progress</h1>

            <p className="mt-1 text-sm text-gray-500">
              Track your health and fitness progress.
            </p>
          </div>

          <div className="rounded-lg border p-2">
            📅
          </div>
        </div>

        {/* PERIOD */}
        <div className="mt-5 flex gap-2">
          {["Week", "Month", "3 Months", "Year"].map(
            (period, index) => (
              <button
                key={period}
                className={`rounded-md px-4 py-2 text-xs font-semibold ${
                  index === 0
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {period}
              </button>
            )
          )}
        </div>

        {/* STATS */}
        <div className="mt-5 grid grid-cols-4 gap-3">
          <StatCard
            icon={<Flame />}
            title="Calories"
            value="13,850"
            subtitle="kcal"
          />

          <StatCard
            icon={<Dumbbell />}
            title="Workouts"
            value="5 / 6"
            subtitle="sessions"
          />

          <StatCard
            icon={<Footprints />}
            title="Steps"
            value="58,420"
            subtitle="steps"
          />

          <StatCard
            icon={<Flame />}
            title="Streak"
            value="7"
            subtitle="Days"
          />
        </div>

        {/* CONTENT */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          {/* CALORIE TREND */}
          <section className="rounded-xl border p-4 shadow-sm">
            <h2 className="font-bold">Calories Trend</h2>

            <div className="mt-5 flex h-52 items-end gap-4 rounded-lg bg-gray-50 p-5">
              {[55, 65, 58, 68, 55, 78, 65].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex flex-1 items-end"
                  >
                    <div
                      className="w-full rounded-t-md bg-green-500"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                )
              )}
            </div>
          </section>

          {/* MACROS */}
          <section className="rounded-xl border p-4 shadow-sm">
            <h2 className="font-bold">
              Macronutrient Distribution
            </h2>

            <div className="mt-6 flex items-center justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border-[25px] border-green-500">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-sm font-bold">
                  Macros
                </div>
              </div>
            </div>

            <div className="mt-5 flex justify-center gap-5 text-xs">
              <span>🟢 Protein 35%</span>
              <span>🔵 Carbs 45%</span>
              <span>🟠 Fats 20%</span>
            </div>
          </section>

          {/* WEIGHT */}
          <section className="rounded-xl border p-4 shadow-sm">
            <h2 className="font-bold">Weight Progress</h2>

            <div className="mt-4">
              <span className="text-2xl font-bold">70 kg</span>

              <span className="ml-2 text-sm text-green-600">
                ▼ 2.5 kg
              </span>
            </div>

            <div className="mt-6 h-2 rounded-full bg-green-500" />
          </section>

          {/* ACHIEVEMENTS */}
          <section className="rounded-xl border p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-bold">Achievements</h2>

              <button className="text-xs font-semibold text-green-600">
                View All
              </button>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <Achievement
                icon={<Flame />}
                title="7 Day Streak"
              />

              <Achievement
                icon={<Trophy />}
                title="Healthy Eater"
              />

              <Achievement
                icon={<Dumbbell />}
                title="Workout Warrior"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon, title, value, subtitle }) {
  return (
    <div className="rounded-xl border p-4 shadow-sm">
      <div className="flex items-center gap-2 text-green-600">
        {icon}
        <span className="text-sm font-semibold">{title}</span>
      </div>

      <p className="mt-4 text-2xl font-bold">
        {value}
      </p>

      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  );
}

function Achievement({ icon, title }) {
  return (
    <div className="rounded-lg border bg-green-50 p-3 text-center">
      <div className="flex justify-center text-green-600">
        {icon}
      </div>

      <p className="mt-2 text-xs font-bold">{title}</p>
    </div>
  );
}